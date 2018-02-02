import pusher
from django.db import models
from django.conf import settings


class PlaylistLog(models.Model):
    """ Action logs for playlist.
        TODO: implement playlist. right now it only run 1 playlist
    """
    PLAY = 'play'
    PAUSE = 'pause'
    STOP = 'stop'
    FINISH = 'finish'

    ACTION = (
        (PLAY, 'Play'),
        (PAUSE, 'Pause'),
        (STOP, 'Stop'),
        (FINISH, 'Finish'),
    )

    video = models.ForeignKey('Video', on_delete=models.CASCADE)
    action = models.CharField(max_length=15, choices=ACTION, default=PLAY)
    timestamp = models.TimeField(auto_now_add=True)

    def __str__(self):
        return "{} ({}): {}".format(self.video.parsed_title, self.action, self.timestamp)


class Video(models.Model):
    """Videos that are to be added by the users to the playlist
    """
    QUEUED = 'queued'
    PLAYING = 'playing'
    FINISHED = 'finished'
    CANCELED = 'canceled'

    STATUS_CHOICES = (
        (QUEUED, 'Queued'),
        (PLAYING, 'Playing'),
        (FINISHED, 'Finished'),
        (CANCELED, 'Canceled')
    )

    url = models.CharField(max_length=255)
    parsed_id = models.CharField(max_length=255)
    parsed_title = models.CharField(max_length=255, default='No Title')
    parsed_thumb = models.URLField()

    status = models.CharField(choices=STATUS_CHOICES, default=QUEUED, max_length=15)

    date_added = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.parsed_title, self.url)

    def save(self, *args, **kwargs):
        super(Video, self).save(*args, **kwargs)

        pusher_client = pusher.Pusher(**settings.PUSHER_CREDENTIALS)

        pusher_client.trigger(settings.PUSHER_CHANNEL, 'VIDEO_ADD', {'video_added': 'fetch_some_buddy'})


class Vote(models.Model):
    UP = 'up'
    DOWN = 'down'

    TYPE_CHOICES = (
        (UP, 'Up'),
        (DOWN, 'Down')
    )

    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='votes')
    vote_type = models.CharField(max_length=5, choices=TYPE_CHOICES, default=DOWN)

    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.video)

    def save(self, *args, **kwargs):
        super(Video, self).save(*args, **kwargs)
