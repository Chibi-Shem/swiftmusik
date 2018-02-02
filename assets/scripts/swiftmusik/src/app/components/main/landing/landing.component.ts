import * as R from 'ramda';
import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

import { VIDEO_API_URL, PLAYLIST_API_PATH } from 'app/constants/api';
import { LogsService } from 'app/commons/services/playlist/logs.service';

import { Video } from 'app/structs/video.structs';

import { PUSHER_CHANNEL } from 'app/constants/api.ts';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayer: NgxY2PlayerComponent;

  ENDED_STATE = 0;

  video = new Video('');
  queue: any;
  curVideo: any;
  queueError = false;
  submitSuccess = false;
  errors = {};
  pusher = null;
  channel = null;

  playerOptions: NgxY2PlayerOptions = {
    videoId: null,
    height: 500,
    width: 730,
    playerVars: {
      autoplay: 1,
    }
  };

  constructor(
    private http: HttpClient,
    private ref: ChangeDetectorRef,
    private logs: LogsService,
    @Inject('Window') window: Window
    ) { }

  ngOnInit() {
    this.queue = [];
    this.loadQueue();
    this.playCurrentVideo();

    this.setupPusher();
  }

  ngOnDestroy() {
    this.pusher.disconnect();
  }

  setupPusher() {
    // TODO: Change this to be dynamic/from the server
      this.pusher = new (<any>window).Pusher('7a2ad5e829d1ab529256', {
        cluster: 'ap1',
        encrypted: true
      });

      const that = this;

      this.channel = this.pusher.subscribe(`${PUSHER_CHANNEL}`);
      this.channel.bind('VIDEO_ADD', function(data) {
        that.loadQueue();
      });
  }

  /* LOAD PLAYLIST
   * desc : retrieve and load the current playlist
   */
  loadQueue() {
    this.http.get(`${PLAYLIST_API_PATH()}`)
      .subscribe(
        result => {
          this.queue = result;
          this.ref.detectChanges();
        },
        error => {
          this.queueError = true;
        }
      )
  }

  /* ADD NEW VIDEO
   * desc : add new video in the playlist
   */
  onAddVideoSubmit() {
    this.errors = {};
    this.submitSuccess = false;

    this.http.post(`${VIDEO_API_URL()}`, this.video)
      .subscribe(
        result => {
          this.submitSuccess = true;
          this.video = new Video('');
        },
        error => {
          this.errors = error.error;
        }
      )
  }

  /* PLAY CURRENT VIDEO
   * desc : play the current video
   */
  playCurrentVideo() {
    this.http.get(`${PLAYLIST_API_PATH()}current/`)
      .subscribe(
        result => {

          if (Object.keys(result).length > 0) {
            const playerInstance = this.videoPlayer.videoPlayer;
            this.playVideo(playerInstance, result['video_code']);

            console.log(this.getCurrentTime(), result['timestamp']);

            const seconds = this.timeDiff(result['now'], result['timestamp']);
            console.log(seconds);
            playerInstance.seekTo(seconds, true);

            this.curVideo = this.getVideoObj(result['video_id']);
          } else {
            console.log('ASDSADSA');
            this.playNextVideo();
          }
        }
      )
  }

  playNextVideo() {
    this.http.get(`${PLAYLIST_API_PATH()}next/`)
      .subscribe(
        result => {
          const playerInstance = this.videoPlayer.videoPlayer;
          this.playVideo(playerInstance, result['parsed_id']);

          this.addLog(result['id'], 'play');
          this.updateVideoStatus(result['id'], 'playing');

          this.curVideo = this.getVideoObj(result['id']);
        }
      )
  }

  updateVideoStatus(videoId, status) {
    // update video
    this.http.put(`${VIDEO_API_URL()}${videoId}/`, {status: status})
      .subscribe(
        result => {

        }
      )
  }

  addLog(videoId, status) {
    this.logs.addLog({video: videoId, action: status})
      .subscribe(
        result => {
          console.log('log added.');
        }
      )
  }

  //// UTILS
  playVideo(player, code) {
    player.loadVideoById(code);
  }

  toSeconds(time_str) {
    // Extract hours, minutes and seconds
    var parts = time_str.split(':');
    // compute  and return total seconds
    return parts[0] * 3600 + // an hour has 3600 seconds
    parts[1] * 60 + // a minute has 60 seconds
    +
    parts[2]; // seconds
  }

  timeDiff(a, b) {
    return Math.abs(this.toSeconds(a) - this.toSeconds(b));
  }

  getCurrentTime() {
    // TODO: should get this in the server
    var d = new Date();
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

  getVideoObj(id) {
    return R.find(R.propEq('id', id))(this.queue);
  }


  onVideoReady() {
    const that = this;
    const jplay = R.prop('j', this.videoPlayer.videoPlayer);
    const playerState = R.prop('playerState', jplay);
    const playerInstance = this.videoPlayer.videoPlayer;

    if (playerState === -1 || playerState === 5) {
      this.playCurrentVideo();
    }

    this.videoPlayer.videoPlayer.addEventListener('onStateChange', (event$) => {

      if (R.prop('data', event$) === 0) {
        this.addLog(this.curVideo.id, 'finish');
        this.updateVideoStatus(this.curVideo.id, 'finished');

        this.playNextVideo();
      }

    });


  }

}
