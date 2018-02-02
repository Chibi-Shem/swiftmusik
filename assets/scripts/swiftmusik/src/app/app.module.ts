import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgxY2PlayerModule } from 'ngx-y2-player';

import { AppComponent } from './app.component';

import { ComponentsModule } from 'app/components/components.module';

import { CommonsModule } from 'app/commons/commons.module';
import { CsrfService } from 'app/commons/services/interceptors/csrf.service';
import { WindowRef } from 'app/commons/services/references/window.service';

import { APP_STATES } from 'app/states/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgxY2PlayerModule.forRoot(),
    NgbModule.forRoot(),

    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      otherwise: '/not-found',
    }),

    ComponentsModule,
    CommonsModule,
  ],
  providers: [
    WindowRef,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: CsrfService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
