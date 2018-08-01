webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_record__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tabRecordRoot = __WEBPACK_IMPORTED_MODULE_2__record_record__["a" /* RecordPage */];
        this.tabConversationRoot = __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__["a" /* ConversationPage */];
        this.tabAboutRoot = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <!-- tabicon list: https://ionicframework.com/docs/ionicons/ -->\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabRecordRoot" tabTitle="Train me!" tabIcon="recording"></ion-tab>\n  <ion-tab [root]="tabConversationRoot" tabTitle="Ask me!" tabIcon="barcode"></ion-tab>\n  <ion-tab [root]="tabAboutRoot" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>LexNg!</ion-list-header>\n  </ion-list>\n    <div style="padding-top:3px;text-align:center;">\n        <img src="assets/bunny-listen3.png" />\n    </div>\n  \n  \n</ion-content>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_SoundService__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecordPage = RecordPage_1 = (function () {
    function RecordPage(navCtrl, soundService, changeDetector, alertCtrl, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.soundService = soundService;
        this.changeDetector = changeDetector;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.timer = null; //TODO: interrupt after 1 min recording
        this.recordingStart = null;
        this.sounds = Array();
    }
    RecordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.soundService.sounds$.subscribe(function (sounds) {
            _this.sounds = sounds;
        });
        this.soundService.name$.subscribe(function (name) {
            _this.nameInputField.nativeElement.value = name;
        });
    };
    //https://stackoverflow.com/questions/42675727/how-to-block-navigation-to-other-tab-if-form-isnt-valid/42676245 	
    //Unfortunately, the IonViewCanLeave doesn't seem to work (yet) in ionic2, when navigating between tabs :(
    //This Nav guard only works if you do a manual navController.pop() at the moment – Doek Apr 4 at 5:41
    RecordPage.prototype.ionViewCanLeave = function () {
        if (this.isRecording()) {
            var toast = this.toastCtrl.create({
                message: 'Recording is running...',
                position: 'middle',
                showCloseButton: true, closeButtonText: 'x', dismissOnPageChange: true,
                duration: 2000
            });
            toast.present();
            return false;
        }
        return true;
    };
    RecordPage.prototype.onRecordStart = function () {
        var _this = this;
        if (this.timer) {
            var recordingTime = this.recordingTime();
            var timer = this.timer;
            this.timer = null;
            this.recordingStart = null;
            clearInterval(timer);
            this.saveRecording(recordingTime);
        }
        else {
            this.timer = setInterval(function () {
                _this.onRecordingRunning();
            }, 1000 /*=1sec*/);
            this.recordingStart = new Date();
        }
    };
    RecordPage.prototype.saveRecording = function (recordingTime) {
        if (recordingTime < RecordPage_1.MIN_RECORDING_SECONDS) {
            var toast = this.toastCtrl.create({
                message: "Recoring is too short, so won't be saved",
                position: 'top',
                showCloseButton: true, closeButtonText: 'x', dismissOnPageChange: true,
                duration: 2000
            });
            toast.present();
            return;
        }
        var s = "" + (new Date());
        this.soundService.addSound(s);
    };
    RecordPage.prototype.onRecordingRunning = function () {
        this.changeDetector.markForCheck(); // as stated by the angular team: the following is required, otherwise the view will not be updated
        var recordingTime = this.recordingTime();
        if (recordingTime > RecordPage_1.MAX_RECORDING_SECONDS) {
            var toast = this.toastCtrl.create({
                message: "Maximum recoring time reached.",
                position: 'top',
                showCloseButton: true, closeButtonText: 'x', dismissOnPageChange: true,
                duration: 2000
            });
            toast.present();
            this.onRecordStart();
        }
    };
    RecordPage.prototype.isRecording = function () {
        return (this.timer != null);
    };
    RecordPage.prototype.recordingTime = function () {
        if (!this.isRecording())
            return 0;
        var diff_ms = (new Date()).getTime() - this.recordingStart.getTime();
        return Math.round(diff_ms / 1000);
    };
    RecordPage.prototype.onNameChanged = function ($event) {
        this.soundService.setName($event.target.value);
        return false;
    };
    return RecordPage;
}());
RecordPage.MAX_RECORDING_SECONDS = 33;
RecordPage.MIN_RECORDING_SECONDS = 5;
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nameInputField'),
    __metadata("design:type", Object)
], RecordPage.prototype, "nameInputField", void 0);
RecordPage = RecordPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-record',template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\pages\record\record.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Record / Train Me\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Train me!</ion-list-header>\n    <ion-item class="transparentbackground" style="padding-top:3px;text-align:left;">\n      Name: &nbsp; <input type="text" (blur)="onNameChanged($event)" #nameInputField class="nameinput" style="width:80%" />\n    </ion-item>\n    <ion-item class="transparentbackground" style="padding-top:33px;text-align:center;">\n      <button style="background-color:transparent;" (click)="onRecordStart()">\n        <img src="assets/{{isRecording() ? \'onair3.gif\' : \'r5.png\'}}"\n          [ngClass]="{\'rot\': isRecording()}"\n          style="width:166px;height:166px;" #recordImg />\n        <br>\n        <span *ngIf="!isRecording()"> Record!</span>\n        <span *ngIf="isRecording()">Recording {{recordingTime()}} seconds</span>\n      </button> \n    </ion-item>\n\n    <lexng-soundlist></lexng-soundlist>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\pages\record\record.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_SoundService__["a" /* SoundService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], RecordPage);

var RecordPage_1;
//# sourceMappingURL=record.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversationPage = (function () {
    function ConversationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ConversationPage;
}());
ConversationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conversation',template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\pages\conversation\conversation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Conversation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Conversation</ion-list-header>\n    <ion-item class="transparentbackground" style="padding-top:13px;text-align:center;">\n      <div style="background-color:transparent;">\n        Start asking me!<br>\n        <img src="assets/l8.png" style="max-width:299px;" />\n        <br>\n      </div> \n    </ion-item>\n    <ion-item class="transparentbackground" style="padding-top:13px;text-align:center;">\n      <button style="background-color:transparent;">\n        <img src="assets/r4.png" style="width:64px;" />\n        <br>\n      </button> \n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\pages\conversation\conversation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ConversationPage);

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to LexNg!</h2>\n  <p>\n    The app understanding You while listening!\n  </p>\n  <p>\n    <img src="assets/bunny-listen4.png" />\n  </p>\n  \n</ion-content>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


//import { ConnectionBackend } from '@angular/http';
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_SoundService__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_record_record__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_conversation_conversation__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_lexng_soundlist_lexng_soundlist__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {Http} from '@angular/http';











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_record_record__["a" /* RecordPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__app_lexng_soundlist_lexng_soundlist__["a" /* SoundList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_record_record__["a" /* RecordPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_SoundService__["a" /* SoundService */],
            //Http, //-> Uncaught (in promise): Error: No provider for ConnectionBackend! Error: No provider for ConnectionBackend! at injectionError
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_SoundService__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_SoundService__["a" /* SoundService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SoundService__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundList = (function () {
    function SoundList(navCtrl, soundService) {
        this.navCtrl = navCtrl;
        this.soundService = soundService;
        this.sounds = Array();
    }
    SoundList.prototype.ngOnInit = function () {
        var _this = this;
        this.soundService.sounds$.subscribe(function (sounds) {
            _this.sounds = sounds;
        });
    };
    SoundList.prototype.playSound = function (slidingItem, task) {
        alert("//TODO;");
    };
    SoundList.prototype.removeSound = function (slidingItem, sound) {
        this.soundService.removeSound(sound);
    };
    return SoundList;
}());
SoundList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'lexng-soundlist',template:/*ion-inline-start:"D:\projects\lexng\lexngclient\src\app\lexng-soundlist\lexng-soundlist.html"*/'  <ion-item class="transparentbackground" style="padding-bottom:33px;">\n    Existing recordings:\n    <p *ngIf="sounds.length < 1">\n      no recordings yet.\n    </p>\n\n    <ion-item-sliding *ngFor="let sound of sounds" #slidingItem class="halbtransparentbackground">\n      <ion-item class="halbtransparentbackground">\n        {{sound | date:\'medium\' }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button icon-only (click)="playSound(slidingItem, sound)" color="secondary">\n          <ion-icon name="barcode"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="removeSound(slidingItem,sound)" color="danger">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n   </ion-item>\n'/*ion-inline-end:"D:\projects\lexng\lexngclient\src\app\lexng-soundlist\lexng-soundlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_SoundService__["a" /* SoundService */]])
], SoundList);

//# sourceMappingURL=lexng-soundlist.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SoundService = (function () {
    function SoundService(http, events) {
        this.http = http;
        this.events = events;
        this.sounds = new Array();
        this.soundsSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]([]);
        this.sounds$ = this.soundsSubject.asObservable();
        this.name = "";
        this.nameSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](null);
        this.name$ = this.nameSubject.asObservable();
        this.setName("");
    }
    SoundService.prototype.refresh = function () {
        this.soundsSubject.next(this.sounds);
    };
    SoundService.prototype.getSounds = function () {
        return Promise.resolve(this.sounds);
    };
    SoundService.prototype.addSound = function (soundFileName) {
        this.sounds.unshift(soundFileName);
        this.events.publish('sounds:added', soundFileName);
        this.refresh();
    };
    SoundService.prototype.removeSound = function (soundFileName) {
        var index = this.sounds.indexOf(soundFileName);
        this.sounds.splice(index, 1);
        this.events.publish('sounds:deleted', soundFileName);
        this.refresh();
    };
    SoundService.prototype.getName = function () {
        return Promise.resolve(this.name);
    };
    SoundService.prototype.setName = function (name) {
        this.name = name;
        this.nameSubject.next(this.name);
    };
    return SoundService;
}());
SoundService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
], SoundService);

//# sourceMappingURL=SoundService.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map