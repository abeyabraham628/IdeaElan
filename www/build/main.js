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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-leave/apply-leave.module": [
		716,
		4
	],
	"../pages/approve-leave/approve-leave.module": [
		717,
		3
	],
	"../pages/changepassword/changepassword.module": [
		718,
		16
	],
	"../pages/forgotpassword/forgotpassword.module": [
		719,
		15
	],
	"../pages/home/home.module": [
		720,
		14
	],
	"../pages/inbox/inbox.module": [
		721,
		13
	],
	"../pages/interview-details/interview-details.module": [
		722,
		12
	],
	"../pages/interview-summary/interview-summary.module": [
		723,
		11
	],
	"../pages/leaves-admin/leaves-admin.module": [
		724,
		2
	],
	"../pages/login/login.module": [
		725,
		10
	],
	"../pages/newuser/newuser.module": [
		732,
		0
	],
	"../pages/payslip/payslip.module": [
		726,
		9
	],
	"../pages/policy/policy.module": [
		727,
		8
	],
	"../pages/recruitment/recruitment.module": [
		728,
		7
	],
	"../pages/systems/systems.module": [
		729,
		6
	],
	"../pages/tabs/tabs.module": [
		730,
		1
	],
	"../pages/upload-events/upload-events.module": [
		731,
		5
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
webpackAsyncContext.id = 266;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotPage = /** @class */ (function () {
    function ChatbotPage(navCtrl, navParams, platform, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ngZone = ngZone;
        this.questions = [];
        this.answer = [];
        platform.ready().then(function () {
            ApiAIPromises.init({
                clientAccessToken: "eefd359fd25447899a07c6e5404be212"
            }).then(function (result) { return console.log(result); });
        });
    }
    ChatbotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatbotPage');
    };
    ChatbotPage.prototype.ask = function (question) {
        var _this = this;
        this.questions.push({ 'question': question });
        ApiAIPromises.requestText({
            query: question
        }).then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            _this.ngZone.run(function () {
                _this.answer.push({ 'answer': speech });
            });
        });
    };
    ChatbotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatbot',template:/*ion-inline-start:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/'\n\n\n<ion-header no-border>\n  <ion-toolbar color="blue" hideBackButton="true">\n    <button ion-button  menuToggle="left" start>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title text-center>Chat</ion-title>\n\n    <ion-buttons end>\n      <button ion-button >\n        <ion-icon name="notifications"></ion-icon> \n      </button> \n    </ion-buttons>\n    \n</ion-toolbar>\n\n</ion-header>\n\n<ion-content padding >\n\n  <ion-input type="text" [(ngModel)]="question" hidden=true></ion-input>\n\n  <button ion-button (click)="ask(question)" hidden=true>Ask</button>\n\n  \n\n\n \n\n\n  <p text-center *ngIf="sending">sending...</p>\n  <div *ngFor="let q of questions" style="left:0px" >\n    <label name="title" class="msgClass">{{q.question}}</label>\n     \n  </div>\n\n  <div *ngFor="let q of answer"  class="msgClass" style="right:0px;position: relative; text-align: right; background-color: honeydew ">\n      <label name="title" style="display:inline-flex">{{q.answer}}</label>\n  \n</div>\n \n \n</ion-content>\n\n<ion-footer>\n    <ion-item>\n    <ion-input [(ngModel)]="question" name="message" class="input_message" placeholder="Ask me anything"></ion-input>\n    <button ion-button (click)="ask(question)" item-right  color="orange"> <ion-icon  name="send" ></ion-icon></button>\n   \n  </ion-item>\n</ion-footer>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(589);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_chatbot_chatbot__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion2_calendar__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_service__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__ = __webpack_require__(465);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_0__pages_chatbot_chatbot__["a" /* ChatbotPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {
                    navExitApp: false
                }, {
                    links: [
                        { loadChildren: '../pages/apply-leave/apply-leave.module#ApplyLeavePageModule', name: 'ApplyLeavePage', segment: 'apply-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approve-leave/approve-leave.module#ApproveLeavePageModule', name: 'ApproveLeavePage', segment: 'approve-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-details/interview-details.module#InterviewDetailsPageModule', name: 'InterviewDetailsPage', segment: 'interview-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-summary/interview-summary.module#InterviewSummaryPageModule', name: 'InterviewSummaryPage', segment: 'interview-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaves-admin/leaves-admin.module#LeavesAdminPageModule', name: 'LeavesAdminPage', segment: 'leaves-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip/payslip.module#PayslipPageModule', name: 'PayslipPage', segment: 'payslip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/policy/policy.module#PolicyPageModule', name: 'PolicyPage', segment: 'policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-events/upload-events.module#UploadEventsPageModule', name: 'UploadEventsPage', segment: 'upload-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__providers_firebase_service__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17_ion2_calendar__["CalendarModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_0__pages_chatbot_chatbot__["a" /* ChatbotPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 267,
	"./af.js": 267,
	"./ar": 268,
	"./ar-dz": 269,
	"./ar-dz.js": 269,
	"./ar-kw": 270,
	"./ar-kw.js": 270,
	"./ar-ly": 271,
	"./ar-ly.js": 271,
	"./ar-ma": 272,
	"./ar-ma.js": 272,
	"./ar-sa": 273,
	"./ar-sa.js": 273,
	"./ar-tn": 274,
	"./ar-tn.js": 274,
	"./ar.js": 268,
	"./az": 275,
	"./az.js": 275,
	"./be": 276,
	"./be.js": 276,
	"./bg": 277,
	"./bg.js": 277,
	"./bm": 278,
	"./bm.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-SG": 293,
	"./en-SG.js": 293,
	"./en-au": 294,
	"./en-au.js": 294,
	"./en-ca": 295,
	"./en-ca.js": 295,
	"./en-gb": 296,
	"./en-gb.js": 296,
	"./en-ie": 297,
	"./en-ie.js": 297,
	"./en-il": 298,
	"./en-il.js": 298,
	"./en-nz": 299,
	"./en-nz.js": 299,
	"./eo": 300,
	"./eo.js": 300,
	"./es": 301,
	"./es-do": 302,
	"./es-do.js": 302,
	"./es-us": 303,
	"./es-us.js": 303,
	"./es.js": 301,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./ga": 313,
	"./ga.js": 313,
	"./gd": 314,
	"./gd.js": 314,
	"./gl": 315,
	"./gl.js": 315,
	"./gom-latn": 316,
	"./gom-latn.js": 316,
	"./gu": 317,
	"./gu.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it-ch": 326,
	"./it-ch.js": 326,
	"./it.js": 325,
	"./ja": 327,
	"./ja.js": 327,
	"./jv": 328,
	"./jv.js": 328,
	"./ka": 329,
	"./ka.js": 329,
	"./kk": 330,
	"./kk.js": 330,
	"./km": 331,
	"./km.js": 331,
	"./kn": 332,
	"./kn.js": 332,
	"./ko": 333,
	"./ko.js": 333,
	"./ku": 334,
	"./ku.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mn": 344,
	"./mn.js": 344,
	"./mr": 345,
	"./mr.js": 345,
	"./ms": 346,
	"./ms-my": 347,
	"./ms-my.js": 347,
	"./ms.js": 346,
	"./mt": 348,
	"./mt.js": 348,
	"./my": 349,
	"./my.js": 349,
	"./nb": 350,
	"./nb.js": 350,
	"./ne": 351,
	"./ne.js": 351,
	"./nl": 352,
	"./nl-be": 353,
	"./nl-be.js": 353,
	"./nl.js": 352,
	"./nn": 354,
	"./nn.js": 354,
	"./pa-in": 355,
	"./pa-in.js": 355,
	"./pl": 356,
	"./pl.js": 356,
	"./pt": 357,
	"./pt-br": 358,
	"./pt-br.js": 358,
	"./pt.js": 357,
	"./ro": 359,
	"./ro.js": 359,
	"./ru": 360,
	"./ru.js": 360,
	"./sd": 361,
	"./sd.js": 361,
	"./se": 362,
	"./se.js": 362,
	"./si": 363,
	"./si.js": 363,
	"./sk": 364,
	"./sk.js": 364,
	"./sl": 365,
	"./sl.js": 365,
	"./sq": 366,
	"./sq.js": 366,
	"./sr": 367,
	"./sr-cyrl": 368,
	"./sr-cyrl.js": 368,
	"./sr.js": 367,
	"./ss": 369,
	"./ss.js": 369,
	"./sv": 370,
	"./sv.js": 370,
	"./sw": 371,
	"./sw.js": 371,
	"./ta": 372,
	"./ta.js": 372,
	"./te": 373,
	"./te.js": 373,
	"./tet": 374,
	"./tet.js": 374,
	"./tg": 375,
	"./tg.js": 375,
	"./th": 376,
	"./th.js": 376,
	"./tl-ph": 377,
	"./tl-ph.js": 377,
	"./tlh": 378,
	"./tlh.js": 378,
	"./tr": 379,
	"./tr.js": 379,
	"./tzl": 380,
	"./tzl.js": 380,
	"./tzm": 381,
	"./tzm-latn": 382,
	"./tzm-latn.js": 382,
	"./tzm.js": 381,
	"./ug-cn": 383,
	"./ug-cn.js": 383,
	"./uk": 384,
	"./uk.js": 384,
	"./ur": 385,
	"./ur.js": 385,
	"./uz": 386,
	"./uz-latn": 387,
	"./uz-latn.js": 387,
	"./uz.js": 386,
	"./vi": 388,
	"./vi.js": 388,
	"./x-pseudo": 389,
	"./x-pseudo.js": 389,
	"./yo": 390,
	"./yo.js": 390,
	"./zh-cn": 391,
	"./zh-cn.js": 391,
	"./zh-hk": 392,
	"./zh-hk.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
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
webpackContext.id = 614;

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
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
    function MyApp(app, platform, statusBar, splashScreen, alertCtrl) {
        this.app = app;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.rootPage = 'LoginPage'; //'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.ngOnInit()
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic-app\src\app\app.html"*/'\n\n  <ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 715:
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

},[467]);
//# sourceMappingURL=main.js.map