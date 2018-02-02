from django.urls import path
from .views import VideoViewSet, PlaylistLogViewSet, Playlist


urlpatterns = [
    path('videos/', VideoViewSet.as_view({
        'get': 'list',
        'post': 'create',
    }), name='videos'),
    path('videos/<int:id>/', VideoViewSet.as_view({
        'get': 'detail',
        'put': 'update',
    }), name='videos'),

    path('playlist/', Playlist.as_view({
        'get': 'list',
    }), name='playlist'),
    path('playlist/current/', Playlist.as_view({
        'get': 'current',
    }), name='playlist'),
    path('playlist/next/', Playlist.as_view({
        'get': 'next',
    }), name='playlist'),


    path('playlist/logs/', PlaylistLogViewSet.as_view({
        'get': 'get_latest',
        'post': 'create',
    }), name='logs'),
]