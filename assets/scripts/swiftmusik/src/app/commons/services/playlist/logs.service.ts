import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PLAYLIST_LOG_API_PATH } from 'app/constants/api';

@Injectable()
export class LogsService {

  constructor(
    private http: HttpClient
  ) { }

  getLatest () {
    return this.http.get(`${PLAYLIST_LOG_API_PATH()}`);
  }

  addLog (data) {
    return this.http.post(`${PLAYLIST_LOG_API_PATH()}`, data);
  } 

}
