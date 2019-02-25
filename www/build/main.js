webpackJsonp([14],{

/***/ 229:
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
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-leave/apply-leave.module": [
		749,
		13
	],
	"../pages/changepassword/changepassword.module": [
		737,
		12
	],
	"../pages/chatbot/chatbot.module": [
		738,
		11
	],
	"../pages/home/home.module": [
		739,
		10
	],
	"../pages/inbox/inbox.module": [
		740,
		9
	],
	"../pages/interview-details/interview-details.module": [
		741,
		3
	],
	"../pages/interview-summary/interview-summary.module": [
		742,
		8
	],
	"../pages/login/login.module": [
		743,
		7
	],
	"../pages/newuser/newuser.module": [
		750,
		0
	],
	"../pages/payslip/payslip.module": [
		744,
		6
	],
	"../pages/profile/profile.module": [
		745,
		1
	],
	"../pages/recruitment/recruitment.module": [
		746,
		2
	],
	"../pages/systems/systems.module": [
		747,
		5
	],
	"../pages/tabs/tabs.module": [
		748,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 272;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(603);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_service__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_fire_storage__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_push__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatbot/chatbot.module#ChatbotPageModule', name: 'ChatbotPage', segment: 'chatbot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-details/interview-details.module#InterviewDetailsPageModule', name: 'InterviewDetailsPage', segment: 'interview-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-summary/interview-summary.module#InterviewSummaryPageModule', name: 'InterviewSummaryPage', segment: 'interview-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip/payslip.module#PayslipPageModule', name: 'PayslipPage', segment: 'payslip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-leave/apply-leave.module#ApplyLeavePageModule', name: 'ApplyLeavePage', segment: 'apply-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__providers_firebase_service__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__["a" /* AngularFirestore */],
                __WEBPACK_IMPORTED_MODULE_21__angular_fire_storage__["a" /* AngularFireStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 294,
	"./af.js": 294,
	"./ar": 295,
	"./ar-dz": 296,
	"./ar-dz.js": 296,
	"./ar-kw": 297,
	"./ar-kw.js": 297,
	"./ar-ly": 298,
	"./ar-ly.js": 298,
	"./ar-ma": 299,
	"./ar-ma.js": 299,
	"./ar-sa": 300,
	"./ar-sa.js": 300,
	"./ar-tn": 301,
	"./ar-tn.js": 301,
	"./ar.js": 295,
	"./az": 302,
	"./az.js": 302,
	"./be": 303,
	"./be.js": 303,
	"./bg": 304,
	"./bg.js": 304,
	"./bm": 305,
	"./bm.js": 305,
	"./bn": 306,
	"./bn.js": 306,
	"./bo": 307,
	"./bo.js": 307,
	"./br": 308,
	"./br.js": 308,
	"./bs": 309,
	"./bs.js": 309,
	"./ca": 310,
	"./ca.js": 310,
	"./cs": 311,
	"./cs.js": 311,
	"./cv": 312,
	"./cv.js": 312,
	"./cy": 313,
	"./cy.js": 313,
	"./da": 314,
	"./da.js": 314,
	"./de": 315,
	"./de-at": 316,
	"./de-at.js": 316,
	"./de-ch": 317,
	"./de-ch.js": 317,
	"./de.js": 315,
	"./dv": 318,
	"./dv.js": 318,
	"./el": 319,
	"./el.js": 319,
	"./en-SG": 320,
	"./en-SG.js": 320,
	"./en-au": 321,
	"./en-au.js": 321,
	"./en-ca": 322,
	"./en-ca.js": 322,
	"./en-gb": 323,
	"./en-gb.js": 323,
	"./en-ie": 324,
	"./en-ie.js": 324,
	"./en-il": 325,
	"./en-il.js": 325,
	"./en-nz": 326,
	"./en-nz.js": 326,
	"./eo": 327,
	"./eo.js": 327,
	"./es": 328,
	"./es-do": 329,
	"./es-do.js": 329,
	"./es-us": 330,
	"./es-us.js": 330,
	"./es.js": 328,
	"./et": 331,
	"./et.js": 331,
	"./eu": 332,
	"./eu.js": 332,
	"./fa": 333,
	"./fa.js": 333,
	"./fi": 334,
	"./fi.js": 334,
	"./fo": 335,
	"./fo.js": 335,
	"./fr": 336,
	"./fr-ca": 337,
	"./fr-ca.js": 337,
	"./fr-ch": 338,
	"./fr-ch.js": 338,
	"./fr.js": 336,
	"./fy": 339,
	"./fy.js": 339,
	"./ga": 340,
	"./ga.js": 340,
	"./gd": 341,
	"./gd.js": 341,
	"./gl": 342,
	"./gl.js": 342,
	"./gom-latn": 343,
	"./gom-latn.js": 343,
	"./gu": 344,
	"./gu.js": 344,
	"./he": 345,
	"./he.js": 345,
	"./hi": 346,
	"./hi.js": 346,
	"./hr": 347,
	"./hr.js": 347,
	"./hu": 348,
	"./hu.js": 348,
	"./hy-am": 349,
	"./hy-am.js": 349,
	"./id": 350,
	"./id.js": 350,
	"./is": 351,
	"./is.js": 351,
	"./it": 352,
	"./it-ch": 353,
	"./it-ch.js": 353,
	"./it.js": 352,
	"./ja": 354,
	"./ja.js": 354,
	"./jv": 355,
	"./jv.js": 355,
	"./ka": 356,
	"./ka.js": 356,
	"./kk": 357,
	"./kk.js": 357,
	"./km": 358,
	"./km.js": 358,
	"./kn": 359,
	"./kn.js": 359,
	"./ko": 360,
	"./ko.js": 360,
	"./ku": 361,
	"./ku.js": 361,
	"./ky": 362,
	"./ky.js": 362,
	"./lb": 363,
	"./lb.js": 363,
	"./lo": 364,
	"./lo.js": 364,
	"./lt": 365,
	"./lt.js": 365,
	"./lv": 366,
	"./lv.js": 366,
	"./me": 367,
	"./me.js": 367,
	"./mi": 368,
	"./mi.js": 368,
	"./mk": 369,
	"./mk.js": 369,
	"./ml": 370,
	"./ml.js": 370,
	"./mn": 371,
	"./mn.js": 371,
	"./mr": 372,
	"./mr.js": 372,
	"./ms": 373,
	"./ms-my": 374,
	"./ms-my.js": 374,
	"./ms.js": 373,
	"./mt": 375,
	"./mt.js": 375,
	"./my": 376,
	"./my.js": 376,
	"./nb": 377,
	"./nb.js": 377,
	"./ne": 378,
	"./ne.js": 378,
	"./nl": 379,
	"./nl-be": 380,
	"./nl-be.js": 380,
	"./nl.js": 379,
	"./nn": 381,
	"./nn.js": 381,
	"./pa-in": 382,
	"./pa-in.js": 382,
	"./pl": 383,
	"./pl.js": 383,
	"./pt": 384,
	"./pt-br": 385,
	"./pt-br.js": 385,
	"./pt.js": 384,
	"./ro": 386,
	"./ro.js": 386,
	"./ru": 387,
	"./ru.js": 387,
	"./sd": 388,
	"./sd.js": 388,
	"./se": 389,
	"./se.js": 389,
	"./si": 390,
	"./si.js": 390,
	"./sk": 391,
	"./sk.js": 391,
	"./sl": 392,
	"./sl.js": 392,
	"./sq": 393,
	"./sq.js": 393,
	"./sr": 394,
	"./sr-cyrl": 395,
	"./sr-cyrl.js": 395,
	"./sr.js": 394,
	"./ss": 396,
	"./ss.js": 396,
	"./sv": 397,
	"./sv.js": 397,
	"./sw": 398,
	"./sw.js": 398,
	"./ta": 399,
	"./ta.js": 399,
	"./te": 400,
	"./te.js": 400,
	"./tet": 401,
	"./tet.js": 401,
	"./tg": 402,
	"./tg.js": 402,
	"./th": 403,
	"./th.js": 403,
	"./tl-ph": 404,
	"./tl-ph.js": 404,
	"./tlh": 405,
	"./tlh.js": 405,
	"./tr": 406,
	"./tr.js": 406,
	"./tzl": 407,
	"./tzl.js": 407,
	"./tzm": 408,
	"./tzm-latn": 409,
	"./tzm-latn.js": 409,
	"./tzm.js": 408,
	"./ug-cn": 410,
	"./ug-cn.js": 410,
	"./uk": 411,
	"./uk.js": 411,
	"./ur": 412,
	"./ur.js": 412,
	"./uz": 413,
	"./uz-latn": 414,
	"./uz-latn.js": 414,
	"./uz.js": 413,
	"./vi": 415,
	"./vi.js": 415,
	"./x-pseudo": 416,
	"./x-pseudo.js": 416,
	"./yo": 417,
	"./yo.js": 417,
	"./zh-cn": 418,
	"./zh-cn.js": 418,
	"./zh-hk": 419,
	"./zh-hk.js": 419,
	"./zh-tw": 420,
	"./zh-tw.js": 420
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 698;

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(push, fcm, platform, statusBar, splashScreen) {
        var _this = this;
        this.push = push;
        this.fcm = fcm;
        this.rootPage = 'LoginPage'; //'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
        platform.ready().then(function () {
            //end notifications.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pushsetup();
        });
    }
    MyApp.prototype.pushsetup = function () {
        var options = {
            android: {
                senderID: '500138839182'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\app\app.html"*/'\n\n  <ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCRDymxcDEMORc4U1TjW5_SKiB22G45buM",
    authDomain: "sopaa-b37c1.firebaseapp.com",
    databaseURL: "https://sopaa-b37c1.firebaseio.com",
    projectId: "sopaa-b37c1",
    storageBucket: "sopaa-b37c1.appspot.com",
    messagingSenderId: "500138839182"
};
//# sourceMappingURL=firebase-service.js.map

/***/ })

},[481]);
//# sourceMappingURL=main.js.map