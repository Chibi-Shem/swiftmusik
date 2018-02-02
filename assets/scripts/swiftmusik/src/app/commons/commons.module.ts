import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorsModule } from 'app/commons/services/interceptors/interceptors.module';
import { PlaylistModule } from './services/playlist/playlist.module';

@NgModule({
  imports: [
    CommonModule,
    InterceptorsModule,
    PlaylistModule
  ],
  declarations: []
})
export class CommonsModule { }
