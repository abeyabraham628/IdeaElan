webpackJsonp([18],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConst; });
var AppConst = {
    logo: "assets/images/companylogo.png",
    noInternet: "assets/images/noInternet.png",
    FirebaseError: [
        { code: 'auth/argument-error', error: 'Invalid Email Id or Password' },
        { code: 'auth/user-not-found', error: 'Invalid Email Id or Password' },
        { code: 'auth/wrong-password', error: 'Invalid Email Id or Password' },
        { code: 'auth/network-request-failed', error: 'Network timeout' },
        { code: 'auth/invalid-email', error: 'Invalid Email Id' },
        { code: 'auth/user-not-found-email', error: 'Invalid Email Id' }
    ]
};
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ 226:
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
webpackEmptyAsyncContext.id = 226;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-leave/apply-leave.module": [
		723,
		5
	],
	"../pages/approve-leave/approve-leave.module": [
		724,
		4
	],
	"../pages/changepassword/changepassword.module": [
		725,
		16
	],
	"../pages/forgotpassword/forgotpassword.module": [
		726,
		15
	],
	"../pages/home/home.module": [
		727,
		14
	],
	"../pages/inbox/inbox.module": [
		728,
		13
	],
	"../pages/interview-details/interview-details.module": [
		729,
		12
	],
	"../pages/interview-summary/interview-summary.module": [
		730,
		11
	],
	"../pages/leaves-admin/leaves-admin.module": [
		731,
		2
	],
	"../pages/login/login.module": [
		732,
		10
	],
	"../pages/newuser/newuser.module": [
		740,
		0
	],
	"../pages/nointernet/nointernet.module": [
		733,
		17
	],
	"../pages/payslip/payslip.module": [
		734,
		9
	],
	"../pages/policy/policy.module": [
		735,
		8
	],
	"../pages/recruitment/recruitment.module": [
		736,
		7
	],
	"../pages/systems/systems.module": [
		737,
		3
	],
	"../pages/tabs/tabs.module": [
		738,
		1
	],
	"../pages/upload-events/upload-events.module": [
		739,
		6
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
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__page_header_page_header__["a" /* PageHeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__page_header_page_header__["a" /* PageHeaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    ChatbotPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
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
            selector: 'page-chatbot',template:/*ion-inline-start:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/'\n<ion-header no-border>\n  <page-header pageTitle="CHATBOT"></page-header>\n</ion-header>\n\n<ion-content padding >\n\n  <ion-input type="text" [(ngModel)]="question" hidden=true></ion-input>\n\n  <button ion-button (click)="ask(question)" hidden=true>Ask</button>\n\n  \n\n\n \n\n\n  <p text-center *ngIf="sending">sending...</p>\n  <div *ngFor="let q of questions" style="left:0px" >\n    <label name="title" class="msgClass">{{q.question}}</label>\n     \n  </div>\n\n  <div *ngFor="let q of answer"  class="msgClass" style="right:0px;position: relative; text-align: right; background-color: honeydew ">\n      <label name="title" style="display:inline-flex">{{q.answer}}</label>\n  \n</div>\n \n \n</ion-content>\n\n<ion-footer>\n    <ion-item>\n    <ion-input [(ngModel)]="question" name="message" class="input_message" placeholder="Ask me anything"></ion-input>\n    <button ion-button (click)="ask(question)" item-right  color="orange"> <ion-icon  name="send" ></ion-icon></button>\n   \n  </ion-item>\n</ion-footer>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NointernetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_strings__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NointernetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NointernetPage = /** @class */ (function () {
    function NointernetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //noInternetImage:string=AppConst.noInternet
        this.noInternetImage = __WEBPACK_IMPORTED_MODULE_2__providers_strings__["a" /* AppConst */].noInternet;
        alert(this.noInternetImage);
    }
    NointernetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nointernet',template:/*ion-inline-start:"F:\ionic-app\src\pages\nointernet\nointernet.html"*/'<!--\n  Generated template for the NointernetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n  <ion-list>\n  <ion-thumbnail >\n    <ion-img  [src]="noInternetImage"></ion-img>\n  </ion-thumbnail>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\nointernet\nointernet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NointernetPage);
    return NointernetPage;
}());

//# sourceMappingURL=nointernet.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(595);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_screen_orientation__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_chatbot_chatbot__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_database__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion2_calendar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_service__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_components_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_page_tite_service__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_nointernet_nointernet__ = __webpack_require__(472);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_chatbot_chatbot__["a" /* ChatbotPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_nointernet_nointernet__["a" /* NointernetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], { navExitApp: false }, {
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
                        { loadChildren: '../pages/nointernet/nointernet.module#NointernetPageModule', name: 'NointernetPage', segment: 'nointernet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip/payslip.module#PayslipPageModule', name: 'PayslipPage', segment: 'payslip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/policy/policy.module#PolicyPageModule', name: 'PolicyPage', segment: 'policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-events/upload-events.module#UploadEventsPageModule', name: 'UploadEventsPage', segment: 'upload-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__providers_firebase_service__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_22__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_chatbot_chatbot__["a" /* ChatbotPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_nointernet_nointernet__["a" /* NointernetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_23__providers_page_tite_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PageHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "pageTitle", void 0);
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-header',
            template: "  <ion-toolbar color=\"blue\" hideBackButton=\"true\">\n                    <button ion-button  menuToggle=\"left\" start>\n                        <ion-icon name=\"menu\"></ion-icon>\n                    </button>\n                    \n                    <ion-title text-center>{{this.pageTitle}}</ion-title>\n\n                    <ion-buttons end>\n                      <button ion-button >\n                        <ion-icon name=\"notifications\"></ion-icon> \n                      </button> \n                    </ion-buttons>\n                    \n                </ion-toolbar>"
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());

//# sourceMappingURL=page-header.js.map

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 271,
	"./af.js": 271,
	"./ar": 272,
	"./ar-dz": 273,
	"./ar-dz.js": 273,
	"./ar-kw": 274,
	"./ar-kw.js": 274,
	"./ar-ly": 275,
	"./ar-ly.js": 275,
	"./ar-ma": 276,
	"./ar-ma.js": 276,
	"./ar-sa": 277,
	"./ar-sa.js": 277,
	"./ar-tn": 278,
	"./ar-tn.js": 278,
	"./ar.js": 272,
	"./az": 279,
	"./az.js": 279,
	"./be": 280,
	"./be.js": 280,
	"./bg": 281,
	"./bg.js": 281,
	"./bm": 282,
	"./bm.js": 282,
	"./bn": 283,
	"./bn.js": 283,
	"./bo": 284,
	"./bo.js": 284,
	"./br": 285,
	"./br.js": 285,
	"./bs": 286,
	"./bs.js": 286,
	"./ca": 287,
	"./ca.js": 287,
	"./cs": 288,
	"./cs.js": 288,
	"./cv": 289,
	"./cv.js": 289,
	"./cy": 290,
	"./cy.js": 290,
	"./da": 291,
	"./da.js": 291,
	"./de": 292,
	"./de-at": 293,
	"./de-at.js": 293,
	"./de-ch": 294,
	"./de-ch.js": 294,
	"./de.js": 292,
	"./dv": 295,
	"./dv.js": 295,
	"./el": 296,
	"./el.js": 296,
	"./en-SG": 297,
	"./en-SG.js": 297,
	"./en-au": 298,
	"./en-au.js": 298,
	"./en-ca": 299,
	"./en-ca.js": 299,
	"./en-gb": 300,
	"./en-gb.js": 300,
	"./en-ie": 301,
	"./en-ie.js": 301,
	"./en-il": 302,
	"./en-il.js": 302,
	"./en-nz": 303,
	"./en-nz.js": 303,
	"./eo": 304,
	"./eo.js": 304,
	"./es": 305,
	"./es-do": 306,
	"./es-do.js": 306,
	"./es-us": 307,
	"./es-us.js": 307,
	"./es.js": 305,
	"./et": 308,
	"./et.js": 308,
	"./eu": 309,
	"./eu.js": 309,
	"./fa": 310,
	"./fa.js": 310,
	"./fi": 311,
	"./fi.js": 311,
	"./fo": 312,
	"./fo.js": 312,
	"./fr": 313,
	"./fr-ca": 314,
	"./fr-ca.js": 314,
	"./fr-ch": 315,
	"./fr-ch.js": 315,
	"./fr.js": 313,
	"./fy": 316,
	"./fy.js": 316,
	"./ga": 317,
	"./ga.js": 317,
	"./gd": 318,
	"./gd.js": 318,
	"./gl": 319,
	"./gl.js": 319,
	"./gom-latn": 320,
	"./gom-latn.js": 320,
	"./gu": 321,
	"./gu.js": 321,
	"./he": 322,
	"./he.js": 322,
	"./hi": 323,
	"./hi.js": 323,
	"./hr": 324,
	"./hr.js": 324,
	"./hu": 325,
	"./hu.js": 325,
	"./hy-am": 326,
	"./hy-am.js": 326,
	"./id": 327,
	"./id.js": 327,
	"./is": 328,
	"./is.js": 328,
	"./it": 329,
	"./it-ch": 330,
	"./it-ch.js": 330,
	"./it.js": 329,
	"./ja": 331,
	"./ja.js": 331,
	"./jv": 332,
	"./jv.js": 332,
	"./ka": 333,
	"./ka.js": 333,
	"./kk": 334,
	"./kk.js": 334,
	"./km": 335,
	"./km.js": 335,
	"./kn": 336,
	"./kn.js": 336,
	"./ko": 337,
	"./ko.js": 337,
	"./ku": 338,
	"./ku.js": 338,
	"./ky": 339,
	"./ky.js": 339,
	"./lb": 340,
	"./lb.js": 340,
	"./lo": 341,
	"./lo.js": 341,
	"./lt": 342,
	"./lt.js": 342,
	"./lv": 343,
	"./lv.js": 343,
	"./me": 344,
	"./me.js": 344,
	"./mi": 345,
	"./mi.js": 345,
	"./mk": 346,
	"./mk.js": 346,
	"./ml": 347,
	"./ml.js": 347,
	"./mn": 348,
	"./mn.js": 348,
	"./mr": 349,
	"./mr.js": 349,
	"./ms": 350,
	"./ms-my": 351,
	"./ms-my.js": 351,
	"./ms.js": 350,
	"./mt": 352,
	"./mt.js": 352,
	"./my": 353,
	"./my.js": 353,
	"./nb": 354,
	"./nb.js": 354,
	"./ne": 355,
	"./ne.js": 355,
	"./nl": 356,
	"./nl-be": 357,
	"./nl-be.js": 357,
	"./nl.js": 356,
	"./nn": 358,
	"./nn.js": 358,
	"./pa-in": 359,
	"./pa-in.js": 359,
	"./pl": 360,
	"./pl.js": 360,
	"./pt": 361,
	"./pt-br": 362,
	"./pt-br.js": 362,
	"./pt.js": 361,
	"./ro": 363,
	"./ro.js": 363,
	"./ru": 364,
	"./ru.js": 364,
	"./sd": 365,
	"./sd.js": 365,
	"./se": 366,
	"./se.js": 366,
	"./si": 367,
	"./si.js": 367,
	"./sk": 368,
	"./sk.js": 368,
	"./sl": 369,
	"./sl.js": 369,
	"./sq": 370,
	"./sq.js": 370,
	"./sr": 371,
	"./sr-cyrl": 372,
	"./sr-cyrl.js": 372,
	"./sr.js": 371,
	"./ss": 373,
	"./ss.js": 373,
	"./sv": 374,
	"./sv.js": 374,
	"./sw": 375,
	"./sw.js": 375,
	"./ta": 376,
	"./ta.js": 376,
	"./te": 377,
	"./te.js": 377,
	"./tet": 378,
	"./tet.js": 378,
	"./tg": 379,
	"./tg.js": 379,
	"./th": 380,
	"./th.js": 380,
	"./tl-ph": 381,
	"./tl-ph.js": 381,
	"./tlh": 382,
	"./tlh.js": 382,
	"./tr": 383,
	"./tr.js": 383,
	"./tzl": 384,
	"./tzl.js": 384,
	"./tzm": 385,
	"./tzm-latn": 386,
	"./tzm-latn.js": 386,
	"./tzm.js": 385,
	"./ug-cn": 387,
	"./ug-cn.js": 387,
	"./uk": 388,
	"./uk.js": 388,
	"./ur": 389,
	"./ur.js": 389,
	"./uz": 390,
	"./uz-latn": 391,
	"./uz-latn.js": 391,
	"./uz.js": 390,
	"./vi": 392,
	"./vi.js": 392,
	"./x-pseudo": 393,
	"./x-pseudo.js": 393,
	"./yo": 394,
	"./yo.js": 394,
	"./zh-cn": 395,
	"./zh-cn.js": 395,
	"./zh-hk": 396,
	"./zh-hk.js": 396,
	"./zh-tw": 397,
	"./zh-tw.js": 397
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
webpackContext.id = 628;

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_strings__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(227);
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
    function MyApp(screenOrientation, network, app, platform, statusBar, splashScreen, alertCtrl) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.network = network;
        this.app = app;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.rootPage = 'LoginPage'; //'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
        this.noInternetImage = __WEBPACK_IMPORTED_MODULE_0__providers_strings__["a" /* AppConst */].noInternet;
        this.tony = true;
        this.x = false;
        this.platform.ready().then(function () {
            //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
            _this.checkDisconnection();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.checkDisconnection = function () {
        var _this = this;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.checkConnection();
            disconnectSubscription.unsubscribe();
            _this.tony = false;
            _this.x = true;
            //this.navCtrl.push(NointernetPage);
        });
    };
    MyApp.prototype.checkConnection = function () {
        var _this = this;
        var connectSubscription = this.network.onConnect().subscribe(function () {
            _this.checkDisconnection();
            connectSubscription.unsubscribe();
            //this.navCtrl.pop();
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('tony'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"]) === "function" ? _a : Object)
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic-app\src\app\app.html"*/'\n\n  <ion-content padding [hidden]="tony">\n\n      <ion-list>\n\n      <ion-thumbnail >\n\n        <ion-img  [src]="noInternetImage"></ion-img>\n\n      </ion-thumbnail>\n\n    </ion-list>\n\n    </ion-content>\n\n  <ion-nav [hidden]="x" [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"]) === "function" ? _h : Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 721:
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

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.pageTitle = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('Home');
        this.currentTitle = this.pageTitle.asObservable();
    }
    DataService.prototype.changeTitle = function (title) {
        this.pageTitle.next(title);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=page-tite-service.js.map

/***/ })

},[474]);
//# sourceMappingURL=main.js.map