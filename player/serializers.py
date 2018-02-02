import re
import requests
from urllib.parse import urlencode
from django.conf import settings
from rest_framework import serializers

from player.models import Video, PlaylistLog


class VideoSerializer(serializers.ModelSerializer):
    url = serializers.CharField(required=False)

    class Meta:
        model = Video
        fields = ('id', 'url', 'parsed_id', 'parsed_title', 'parsed_thumb', 'status', 'date_added', )
        read_only_fields = ('id' ,'parsed_id', 'parsed_title', 'parsed_thumb', 'date_added', )

    def create(self, validated_data):
        pattern = '((?<=(v|V)/)|(?<=be/)|(?<=(\?|\&)v=)|(?<=embed/))([\w-]+)'
        compiled_pattern = re.compile(pattern)

        url = validated_data.get('url', None)
        try:
            if url:
                # Parse URL for video ID
                vid_id = compiled_pattern.search(url)
                validated_data['parsed_id'] = vid_id.group(0)

            # Fetch video data
            new_params = {
                "part": "snippet",
                "id": vid_id.group(0),
                "key": settings.YOUTUBE_API_KEY
            }
            new_params_str = urlencode(new_params)
            updated_api_url = "{}?{}".format(settings.YOUTUBE_VIDEO_API_URL, new_params_str)
            fetch_data = requests.get(updated_api_url)
            if fetch_data.status_code == 200:
                fetch_json = fetch_data.json()

                validated_data['parsed_title'] = fetch_json.get('items')[0].get('snippet').get('title')
                validated_data['parsed_thumb'] = fetch_json.get('items')[0].get('snippet').get('thumbnails').get('default').get('url')

            video = Video.objects.create(**validated_data)
        except Exception as e:
            raise serializers.ValidationError({'url': ['Invalid Youtube URL', ]})
        return validated_data


class PlaylistLogSerializer(serializers.ModelSerializer):

    class Meta:
        model = PlaylistLog
        fields = ('id', 'video', 'action', 'timestamp')

    def update(self, instance,  data):
        data.pop('parse_id', None)
        return super(PlaylistLogSerializer, self).update(instance, **data)