webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"mainHeader\">\n  <ui-view name=\"header\"></ui-view>\n</header>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <ui-view name=\"content\"></ui-view>\n    </div>\n    <div class=\"col-2\">\n      <ui-view name=\"footer\"></ui-view>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var angular_1 = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
var angular_font_awesome_1 = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var ngx_y2_player_1 = __webpack_require__("../../../../ngx-y2-player/ngx-y2-player.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var components_module_1 = __webpack_require__("../../../../../src/app/components/components.module.ts");
var csrf_service_1 = __webpack_require__("../../../../../src/app/commons/services/interceptors/csrf.service.ts");
var window_service_1 = __webpack_require__("../../../../../src/app/commons/services/references/window.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/states/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                http_1.HttpClientModule,
                ngx_y2_player_1.NgxY2PlayerModule.forRoot(),
                ng_bootstrap_1.NgbModule.forRoot(),
                angular_1.UIRouterModule.forRoot({
                    states: index_1.APP_STATES,
                    useHash: false,
                    otherwise: '/not-found',
                }),
                components_module_1.ComponentsModule,
            ],
            providers: [
                window_service_1.WindowRef,
                ngx_cookie_service_1.CookieService,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: csrf_service_1.CsrfService, multi: true },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/commons/services/interceptors/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var CsrfService = /** @class */ (function () {
    function CsrfService(cookieService) {
        this.cookieService = cookieService;
    }
    CsrfService.prototype.intercept = function (req, next) {
        var token = this.cookieService.get('csrftoken');
        var dupReq = req.clone({ headers: req.headers.set('X-CSRFToken', token) });
        return next.handle(dupReq);
    };
    CsrfService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_cookie_service_1.CookieService])
    ], CsrfService);
    return CsrfService;
}());
exports.CsrfService = CsrfService;
;


/***/ }),

/***/ "../../../../../src/app/commons/services/references/window.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        core_1.Injectable()
    ], WindowRef);
    return WindowRef;
}());
exports.WindowRef = WindowRef;


/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var main_module_1 = __webpack_require__("../../../../../src/app/components/main/main.module.ts");
var includes_module_1 = __webpack_require__("../../../../../src/app/components/includes/includes.module.ts");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                main_module_1.MainModule,
                includes_module_1.IncludesModule
            ],
            declarations: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;


/***/ }),

/***/ "../../../../../src/app/components/includes/includes.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var main_header_component_1 = __webpack_require__("../../../../../src/app/components/includes/main-header/main-header.component.ts");
var main_footer_component_1 = __webpack_require__("../../../../../src/app/components/includes/main-footer/main-footer.component.ts");
var IncludesModule = /** @class */ (function () {
    function IncludesModule() {
    }
    IncludesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [main_header_component_1.MainHeaderComponent, main_footer_component_1.MainFooterComponent]
        })
    ], IncludesModule);
    return IncludesModule;
}());
exports.IncludesModule = IncludesModule;


/***/ }),

/***/ "../../../../../src/app/components/includes/main-footer/main-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled\">\n  <li>\n    <p>\n      <strong>SwiftMusik</strong>.<br />\n      The premier video playlist manager for teams.\n    </p>\n  </li>\n  <li><small>&copy; SwiftMusik 2018</small></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/includes/main-footer/main-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/includes/main-footer/main-footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    MainFooterComponent = __decorate([
        core_1.Component({
            selector: 'app-main-footer',
            template: __webpack_require__("../../../../../src/app/components/includes/main-footer/main-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/includes/main-footer/main-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());
exports.MainFooterComponent = MainFooterComponent;


/***/ }),

/***/ "../../../../../src/app/components/includes/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Just an image -->\n<nav class=\"navbar navbar-light bg-light mb-3\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"/static/images/logo.png\" alt=\"logo\" width=\"200\">\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/includes/main-header/main-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/includes/main-header/main-header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    MainHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-main-header',
            template: __webpack_require__("../../../../../src/app/components/includes/main-header/main-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/includes/main-header/main-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());
exports.MainHeaderComponent = MainHeaderComponent;


/***/ }),

/***/ "../../../../../src/app/components/main/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8\">\n    <div class=\"player-placeholder d-flex justify-content-center align-items-center\">\n      <ngx-y2-player\n        #videoPlayer\n        (ready)=\"onVideoReady($event)\"\n        [playerOptions]=\"playerOptions\">\n      </ngx-y2-player>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Changelogs\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><span class=\"badge badge-primary\">v0.1</span></h5>\n            <ul>\n              <li>\n                Core features\n                <ul>\n                  <li>Video player</li>\n                  <li>Only accepts youtube urls</li>\n                  <li>Basic queue</li>\n                  <li>Zero management whatsoever. Just add videos, and you're good.</li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Future Features\n          </div>\n          <div class=\"card-body\">\n            <ul>\n              <li>Removal of queued videos based on voting.</li>\n              <li>Authentication</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n  <hr>\n  <div class=\"col-sm-12 col-md-4\">\n    <h3>Add a Video</h3>\n    <form (ngSubmit)=\"onAddVideoSubmit()\" #addVideoForm>\n      <ul *ngIf=\"errors.url\" class=\"list-unstyled\">\n        <li *ngFor=\"let error of errors.url\"><small class=\"text-danger\">{{ error }}</small></li>\n      </ul>\n      <div class=\"input-group\">\n        <input type=\"text\"\n          [(ngModel)]=\"video.url\"\n          name=\"url\"\n          class=\"form-control\"\n          placeholder=\"Enter Youtube URL..\">\n        <div class=\"input-group-append\">\n          <button type=\"submit\" class=\"btn btn-default\">Add</button>\n        </div>\n      </div>\n    </form>\n\n    <hr>\n\n    <h3>Queue</h3>\n    <div *ngIf=\"!queue.length\" class=\"alert alert-info\">\n      <span>There are no videos queued up. Add some!</span>\n    </div>\n    <ul *ngIf=\"queue.length\" class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let vid of queue\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <img class=\"img-thumbnail\" src=\"{{ vid.parsed_thumb }}\" alt=\"{{ vid.parsed_title }}\">\n          </div>\n          <div class=\"col-6\">\n            <p>{{ vid.parsed_title }}</p>\n            <!--<p>\n              <small>Remove Votes: <span class=\"badge badge-secondary\">{{ vid.remove_votes }}</span></small>\n            </p>\n            <p>\n              <button class=\"btn btn-sm btn-warning\">\n                Vote To Remove\n              </button>\n            </p>-->\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-placeholder {\n  width: 100%;\n  max-width: 1024px;\n  height: 500px;\n  background: transparent;\n  color: white; }\n\n.update-cards {\n  width: 28rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var R = __webpack_require__("../../../../ramda/src/index.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ngx_y2_player_1 = __webpack_require__("../../../../ngx-y2-player/ngx-y2-player.js");
var api_1 = __webpack_require__("../../../../../src/app/constants/api.ts");
var video_structs_1 = __webpack_require__("../../../../../src/app/structs/video.structs.ts");
var api_ts_1 = __webpack_require__("../../../../../src/app/constants/api.ts");
var LandingComponent = /** @class */ (function () {
    function LandingComponent(http, ref, window) {
        this.http = http;
        this.ref = ref;
        this.ENDED_STATE = 0;
        this.video = new video_structs_1.Video('');
        this.queueError = false;
        this.submitSuccess = false;
        this.errors = {};
        this.pusher = null;
        this.channel = null;
        this.playerOptions = {
            videoId: null,
            height: 500,
            width: 730,
            playerVars: {
                autoplay: 1,
            }
        };
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.queue = [];
        this.loadQueue();
        this.setupPusher();
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        this.pusher.disconnect();
    };
    LandingComponent.prototype.setupPusher = function () {
        // TODO: Change this to be dynamic/from the server
        this.pusher = new window.Pusher('7a2ad5e829d1ab529256', {
            cluster: 'ap1',
            encrypted: true
        });
        var that = this;
        this.channel = this.pusher.subscribe("" + api_ts_1.PUSHER_CHANNEL);
        this.channel.bind('VIDEO_ADD', function (data) {
            that.loadQueue();
        });
    };
    LandingComponent.prototype.loadQueue = function () {
        var _this = this;
        this.http.get("" + api_1.VIDEO_API_URL())
            .subscribe(function (result) {
            _this.queue = result;
            _this.checkPlayingVideo();
            _this.ref.detectChanges();
        }, function (error) {
            _this.queueError = true;
        });
    };
    LandingComponent.prototype.onAddVideoSubmit = function () {
        var _this = this;
        this.errors = {};
        this.submitSuccess = false;
        this.http.post("" + api_1.VIDEO_API_URL(), this.video)
            .subscribe(function (result) {
            _this.submitSuccess = true;
            _this.video = new video_structs_1.Video('');
        }, function (error) {
            _this.errors = error.error;
        });
    };
    LandingComponent.prototype.checkPlayingVideo = function () {
        console.log();
        var that = this;
        var jplay = R.prop('j', this.videoPlayer.videoPlayer);
        var playerState = R.prop('playerState', jplay);
        var playerInstance = this.videoPlayer.videoPlayer;
        if (playerState === -1 || playerState === 5 || playerState === 0) {
            this.playVideo(playerInstance, this.getNextVideoId());
        }
    };
    LandingComponent.prototype.getNextVideoId = function () {
        var first = R.head(this.queue);
        var newList = R.drop(1, this.queue);
        this.queue = newList;
        this.ref.detectChanges();
        return first;
    };
    LandingComponent.prototype.playVideo = function (player, videoObj) {
        var _this = this;
        // Tell api that we already updated our playlist. Get an updated version
        if (videoObj) {
            this.http.put("" + api_1.VIDEO_API_URL() + R.prop('id', videoObj) + "/", { status: 'finished' })
                .subscribe(function (result) {
                _this.loadQueue();
            });
            // Update video player
            player.loadVideoById(R.prop('parsed_id', videoObj));
        }
    };
    LandingComponent.prototype.onVideoReady = function () {
        var that = this;
        var jplay = R.prop('j', this.videoPlayer.videoPlayer);
        var playerState = R.prop('playerState', jplay);
        var playerInstance = this.videoPlayer.videoPlayer;
        if (playerState === -1 || playerState === 5) {
            this.playVideo(playerInstance, this.getNextVideoId());
        }
        this.videoPlayer.videoPlayer.addEventListener('onStateChange', function (event$) {
            if (R.prop('data', event$) === 0) {
                // Video Already Stopped playing. Play next video
                that.playVideo(playerInstance, that.getNextVideoId());
            }
        });
    };
    __decorate([
        core_1.ViewChild('videoPlayer'),
        __metadata("design:type", ngx_y2_player_1.NgxY2PlayerComponent)
    ], LandingComponent.prototype, "videoPlayer", void 0);
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/components/main/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/landing/landing.component.scss")]
        }),
        __param(2, core_1.Inject('Window')),
        __metadata("design:paramtypes", [http_1.HttpClient,
            core_1.ChangeDetectorRef,
            Window])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "../../../../../src/app/components/main/main.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var landing_component_1 = __webpack_require__("../../../../../src/app/components/main/landing/landing.component.ts");
var angular_font_awesome_1 = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ngx_y2_player_1 = __webpack_require__("../../../../ngx-y2-player/ngx-y2-player.js");
var window_service_1 = __webpack_require__("../../../../../src/app/commons/services/references/window.service.ts");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                forms_1.FormsModule,
                ngx_y2_player_1.NgxY2PlayerModule
            ],
            declarations: [landing_component_1.LandingComponent],
            providers: [window_service_1.WindowRef, { provide: 'Window', useValue: window }],
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;


/***/ }),

/***/ "../../../../../src/app/constants/api.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_DOMAIN = window.base_url;
exports.PUSHER_CHANNEL = window.pusher_channel;
exports.API_PATH = 'api/';
exports.VIDEO_API_PATH = function () { return exports.API_PATH + "videos/"; };
exports.VIDEO_API_URL = function () { return "" + exports.API_DOMAIN + exports.VIDEO_API_PATH(); };


/***/ }),

/***/ "../../../../../src/app/states/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __webpack_require__("../../../../../src/app/states/main.ts");
exports.APP_STATES = [].concat(main_1.MAIN_STATES);


/***/ }),

/***/ "../../../../../src/app/states/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__("../../../../../src/app/utils/index.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/components/main/landing/landing.component.ts");
var landingState = {
    name: 'landingState',
    url: '/',
    views: index_1.createViewsWithCommonIncludes(landing_component_1.LandingComponent)
};
exports.MAIN_STATES = [
    // Add states here
    landingState
];


/***/ }),

/***/ "../../../../../src/app/structs/video.structs.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Video = /** @class */ (function () {
    function Video(url) {
        this.url = url;
    }
    return Video;
}());
exports.Video = Video;


/***/ }),

/***/ "../../../../../src/app/utils/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_footer_component_1 = __webpack_require__("../../../../../src/app/components/includes/main-footer/main-footer.component.ts");
var main_header_component_1 = __webpack_require__("../../../../../src/app/components/includes/main-header/main-header.component.ts");
function createViewsWithCommonIncludes(content, header, footer) {
    if (header === void 0) { header = main_header_component_1.MainHeaderComponent; }
    if (footer === void 0) { footer = main_footer_component_1.MainFooterComponent; }
    return {
        'header': header,
        'content': content,
        'footer': footer,
    };
}
exports.createViewsWithCommonIncludes = createViewsWithCommonIncludes;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map