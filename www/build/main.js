webpackJsonp([17],{

/***/ 224:
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
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-leave/apply-leave.module": [
		715,
		6
	],
	"../pages/approve-leave/approve-leave.module": [
		716,
		5
	],
	"../pages/changepassword/changepassword.module": [
		717,
		16
	],
	"../pages/chatbot/chatbot.module": [
		718,
		15
	],
	"../pages/home/home.module": [
		719,
		14
	],
	"../pages/inbox/inbox.module": [
		720,
		13
	],
	"../pages/interview-details/interview-details.module": [
		721,
		8
	],
	"../pages/interview-summary/interview-summary.module": [
		722,
		12
	],
	"../pages/leaves-admin/leaves-admin.module": [
		723,
		3
	],
	"../pages/login/login.module": [
		724,
		11
	],
	"../pages/newuser/newuser.module": [
		731,
		0
	],
	"../pages/payslip/payslip.module": [
		725,
		10
	],
	"../pages/profile/profile.module": [
		726,
		2
	],
	"../pages/recruitment/recruitment.module": [
		727,
		4
	],
	"../pages/systems/systems.module": [
		728,
		9
	],
	"../pages/tabs/tabs.module": [
		729,
		1
	],
	"../pages/upload-events/upload-events.module": [
		730,
		7
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
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(590);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_fcm__ = __webpack_require__(462);
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
                        { loadChildren: '../pages/apply-leave/apply-leave.module#ApplyLeavePageModule', name: 'ApplyLeavePage', segment: 'apply-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approve-leave/approve-leave.module#ApproveLeavePageModule', name: 'ApproveLeavePage', segment: 'approve-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatbot/chatbot.module#ChatbotPageModule', name: 'ChatbotPage', segment: 'chatbot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-details/interview-details.module#InterviewDetailsPageModule', name: 'InterviewDetailsPage', segment: 'interview-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-summary/interview-summary.module#InterviewSummaryPageModule', name: 'InterviewSummaryPage', segment: 'interview-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaves-admin/leaves-admin.module#LeavesAdminPageModule', name: 'LeavesAdminPage', segment: 'leaves-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip/payslip.module#PayslipPageModule', name: 'PayslipPage', segment: 'payslip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-events/upload-events.module#UploadEventsPageModule', name: 'UploadEventsPage', segment: 'upload-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__providers_firebase_service__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__["CalendarModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_fcm__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 268,
	"./af.js": 268,
	"./ar": 269,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 269,
	"./az": 276,
	"./az.js": 276,
	"./be": 277,
	"./be.js": 277,
	"./bg": 278,
	"./bg.js": 278,
	"./bm": 279,
	"./bm.js": 279,
	"./bn": 280,
	"./bn.js": 280,
	"./bo": 281,
	"./bo.js": 281,
	"./br": 282,
	"./br.js": 282,
	"./bs": 283,
	"./bs.js": 283,
	"./ca": 284,
	"./ca.js": 284,
	"./cs": 285,
	"./cs.js": 285,
	"./cv": 286,
	"./cv.js": 286,
	"./cy": 287,
	"./cy.js": 287,
	"./da": 288,
	"./da.js": 288,
	"./de": 289,
	"./de-at": 290,
	"./de-at.js": 290,
	"./de-ch": 291,
	"./de-ch.js": 291,
	"./de.js": 289,
	"./dv": 292,
	"./dv.js": 292,
	"./el": 293,
	"./el.js": 293,
	"./en-SG": 294,
	"./en-SG.js": 294,
	"./en-au": 295,
	"./en-au.js": 295,
	"./en-ca": 296,
	"./en-ca.js": 296,
	"./en-gb": 297,
	"./en-gb.js": 297,
	"./en-ie": 298,
	"./en-ie.js": 298,
	"./en-il": 299,
	"./en-il.js": 299,
	"./en-nz": 300,
	"./en-nz.js": 300,
	"./eo": 301,
	"./eo.js": 301,
	"./es": 302,
	"./es-do": 303,
	"./es-do.js": 303,
	"./es-us": 304,
	"./es-us.js": 304,
	"./es.js": 302,
	"./et": 305,
	"./et.js": 305,
	"./eu": 306,
	"./eu.js": 306,
	"./fa": 307,
	"./fa.js": 307,
	"./fi": 308,
	"./fi.js": 308,
	"./fo": 309,
	"./fo.js": 309,
	"./fr": 310,
	"./fr-ca": 311,
	"./fr-ca.js": 311,
	"./fr-ch": 312,
	"./fr-ch.js": 312,
	"./fr.js": 310,
	"./fy": 313,
	"./fy.js": 313,
	"./ga": 314,
	"./ga.js": 314,
	"./gd": 315,
	"./gd.js": 315,
	"./gl": 316,
	"./gl.js": 316,
	"./gom-latn": 317,
	"./gom-latn.js": 317,
	"./gu": 318,
	"./gu.js": 318,
	"./he": 319,
	"./he.js": 319,
	"./hi": 320,
	"./hi.js": 320,
	"./hr": 321,
	"./hr.js": 321,
	"./hu": 322,
	"./hu.js": 322,
	"./hy-am": 323,
	"./hy-am.js": 323,
	"./id": 324,
	"./id.js": 324,
	"./is": 325,
	"./is.js": 325,
	"./it": 326,
	"./it-ch": 327,
	"./it-ch.js": 327,
	"./it.js": 326,
	"./ja": 328,
	"./ja.js": 328,
	"./jv": 329,
	"./jv.js": 329,
	"./ka": 330,
	"./ka.js": 330,
	"./kk": 331,
	"./kk.js": 331,
	"./km": 332,
	"./km.js": 332,
	"./kn": 333,
	"./kn.js": 333,
	"./ko": 334,
	"./ko.js": 334,
	"./ku": 335,
	"./ku.js": 335,
	"./ky": 336,
	"./ky.js": 336,
	"./lb": 337,
	"./lb.js": 337,
	"./lo": 338,
	"./lo.js": 338,
	"./lt": 339,
	"./lt.js": 339,
	"./lv": 340,
	"./lv.js": 340,
	"./me": 341,
	"./me.js": 341,
	"./mi": 342,
	"./mi.js": 342,
	"./mk": 343,
	"./mk.js": 343,
	"./ml": 344,
	"./ml.js": 344,
	"./mn": 345,
	"./mn.js": 345,
	"./mr": 346,
	"./mr.js": 346,
	"./ms": 347,
	"./ms-my": 348,
	"./ms-my.js": 348,
	"./ms.js": 347,
	"./mt": 349,
	"./mt.js": 349,
	"./my": 350,
	"./my.js": 350,
	"./nb": 351,
	"./nb.js": 351,
	"./ne": 352,
	"./ne.js": 352,
	"./nl": 353,
	"./nl-be": 354,
	"./nl-be.js": 354,
	"./nl.js": 353,
	"./nn": 355,
	"./nn.js": 355,
	"./pa-in": 356,
	"./pa-in.js": 356,
	"./pl": 357,
	"./pl.js": 357,
	"./pt": 358,
	"./pt-br": 359,
	"./pt-br.js": 359,
	"./pt.js": 358,
	"./ro": 360,
	"./ro.js": 360,
	"./ru": 361,
	"./ru.js": 361,
	"./sd": 362,
	"./sd.js": 362,
	"./se": 363,
	"./se.js": 363,
	"./si": 364,
	"./si.js": 364,
	"./sk": 365,
	"./sk.js": 365,
	"./sl": 366,
	"./sl.js": 366,
	"./sq": 367,
	"./sq.js": 367,
	"./sr": 368,
	"./sr-cyrl": 369,
	"./sr-cyrl.js": 369,
	"./sr.js": 368,
	"./ss": 370,
	"./ss.js": 370,
	"./sv": 371,
	"./sv.js": 371,
	"./sw": 372,
	"./sw.js": 372,
	"./ta": 373,
	"./ta.js": 373,
	"./te": 374,
	"./te.js": 374,
	"./tet": 375,
	"./tet.js": 375,
	"./tg": 376,
	"./tg.js": 376,
	"./th": 377,
	"./th.js": 377,
	"./tl-ph": 378,
	"./tl-ph.js": 378,
	"./tlh": 379,
	"./tlh.js": 379,
	"./tr": 380,
	"./tr.js": 380,
	"./tzl": 381,
	"./tzl.js": 381,
	"./tzm": 382,
	"./tzm-latn": 383,
	"./tzm-latn.js": 383,
	"./tzm.js": 382,
	"./ug-cn": 384,
	"./ug-cn.js": 384,
	"./uk": 385,
	"./uk.js": 385,
	"./ur": 386,
	"./ur.js": 386,
	"./uz": 387,
	"./uz-latn": 388,
	"./uz-latn.js": 388,
	"./uz.js": 387,
	"./vi": 389,
	"./vi.js": 389,
	"./x-pseudo": 390,
	"./x-pseudo.js": 390,
	"./yo": 391,
	"./yo.js": 391,
	"./zh-cn": 392,
	"./zh-cn.js": 392,
	"./zh-hk": 393,
	"./zh-hk.js": 393,
	"./zh-tw": 394,
	"./zh-tw.js": 394
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
webpackContext.id = 621;

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(455);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage'; //'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\IdeaElan\src\app\app.html"*/'\n\n  <ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\IdeaElan\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCRDymxcDEMORc4U1TjW5_SKiB22G45buM",
    authDomain: "sopaa-b37c1.firebaseapp.com",
    databaseURL: "https://sopaa-b37c1.firebaseio.com",
    projectId: "sopaa-b37c1",
    storageBucket: "",
    messagingSenderId: "500138839182"
};
//# sourceMappingURL=firebase-service.js.map

/***/ })

},[468]);
//# sourceMappingURL=main.js.map