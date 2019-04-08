webpackJsonp([25],{

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		735,
		24
	],
	"../pages/apply-leave/apply-leave.module": [
		738,
		4
	],
	"../pages/approve-leave/approve-leave.module": [
		736,
		3
	],
	"../pages/changepassword/changepassword.module": [
		737,
		23
	],
	"../pages/forgotpassword/forgotpassword.module": [
		739,
		22
	],
	"../pages/home/home.module": [
		757,
		21
	],
	"../pages/inbox/inbox.module": [
		740,
		20
	],
	"../pages/interview-details/interview-details.module": [
		741,
		7
	],
	"../pages/interview-schedule/interview-schedule.module": [
		742,
		5
	],
	"../pages/interview-summary/interview-summary.module": [
		743,
		19
	],
	"../pages/leaves-admin/leaves-admin.module": [
		744,
		2
	],
	"../pages/login/login.module": [
		745,
		18
	],
	"../pages/maintenancehistory/maintenancehistory.module": [
		746,
		17
	],
	"../pages/modal/modal.module": [
		747,
		16
	],
	"../pages/modifysystems/modifysystems.module": [
		748,
		15
	],
	"../pages/myprofile/myprofile.module": [
		749,
		14
	],
	"../pages/newuser/newuser.module": [
		759,
		0
	],
	"../pages/nointernet/nointernet.module": [
		750,
		13
	],
	"../pages/payslip/payslip.module": [
		751,
		12
	],
	"../pages/policy/policy.module": [
		752,
		11
	],
	"../pages/recruitment/recruitment.module": [
		758,
		6
	],
	"../pages/support/support.module": [
		753,
		10
	],
	"../pages/systems/systems.module": [
		754,
		1
	],
	"../pages/tabs/tabs.module": [
		755,
		9
	],
	"../pages/upload-events/upload-events.module": [
		756,
		8
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
webpackAsyncContext.id = 285;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offline_offline__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar__ = __webpack_require__(688);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_1__page_header_page_header__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__offline_offline__["a" /* OfflineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar__["a" /* NavbarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__page_header_page_header__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__offline_offline__["a" /* OfflineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar__["a" /* NavbarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConst; });
var AppConst = {
    logo: "assets/images/companylogo.png",
    offline: "assets/images/offline.png",
    passwordImg: "assets/images/26053.png",
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

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(15);
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
    function DataService(afAuth) {
        this.afAuth = afAuth;
        this.oldValue = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.currentValue = this.oldValue.asObservable();
        this.oldUri = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/" + this.afAuth.auth.currentUser.uid + ".jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5");
        this.currentUri = this.oldUri.asObservable();
    }
    DataService.prototype.changeValue = function (newValue) {
        this.oldValue.next(newValue);
    };
    DataService.prototype.changeUri = function (newValue) {
        this.oldUri.next(newValue);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=form-service.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Author Abey Abraham


var ChatbotPage = /** @class */ (function () {
    function ChatbotPage(navCtrl, navParams, platform, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ngZone = ngZone;
        this.chat = [];
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
        this.chat.push({ 'question': question });
        ApiAIPromises.requestText({
            query: question
        }).then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            _this.ngZone.run(function () {
                _this.chat.push({ 'answer': speech });
            });
        });
        this.question = "";
    };
    var _a, _b, _c, _d;
    ChatbotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatbot',template:/*ion-inline-start:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/'<!--Author Abey Abraham-->\n\n<ion-header no-border>\n\n  <page-header pageTitle="CHATBOT"></page-header>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="chats">\n\n      <div class="chatbox">\n\n        <div *ngFor="let chat of chat">\n\n          <div class="message sent" *ngIf="chat.question!=\'\' && chat.question!=null">\n\n            {{chat.question}}\n\n            \n\n          </div>\n\n          <div class="message received"  *ngIf="chat.answer!=\'\' && chat.answer!=null">\n\n            {{chat.answer}}\n\n            \n\n          </div>\n\n        </div>\n\n      </div>\n\n      </div>\n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <ion-item>\n\n    <ion-input [(ngModel)]="question" name="message" placeholder="Ask me anything"></ion-input>\n\n    <button ion-button (click)="ask(question)" item-right  color="orange"> <ion-icon  name="send" ></ion-icon></button>\n\n   \n\n  </ion-item>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" ? _d : Object])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(603);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatbot_chatbot__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_firebase__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_firebase_service__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_form_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Author Abey & Tony



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], { navExitApp: false }, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approve-leave/approve-leave.module#ApproveLeavePageModule', name: 'ApproveLeavePage', segment: 'approve-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-leave/apply-leave.module#ApplyLeavePageModule', name: 'ApplyLeavePage', segment: 'apply-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-details/interview-details.module#InterviewDetailsPageModule', name: 'InterviewDetailsPage', segment: 'interview-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-schedule/interview-schedule.module#InterviewSchedulePageModule', name: 'InterviewSchedulePage', segment: 'interview-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-summary/interview-summary.module#InterviewSummaryPageModule', name: 'InterviewSummaryPage', segment: 'interview-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaves-admin/leaves-admin.module#LeavesAdminPageModule', name: 'LeavesAdminPage', segment: 'leaves-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintenancehistory/maintenancehistory.module#MaintenancehistoryPageModule', name: 'MaintenancehistoryPage', segment: 'maintenancehistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifysystems/modifysystems.module#ModifysystemsPageModule', name: 'ModifysystemsPage', segment: 'modifysystems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nointernet/nointernet.module#NointernetPageModule', name: 'NointernetPage', segment: 'nointernet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payslip/payslip.module#PayslipPageModule', name: 'PayslipPage', segment: 'payslip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/policy/policy.module#PolicyPageModule', name: 'PolicyPage', segment: 'policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-events/upload-events.module#UploadEventsPageModule', name: 'UploadEventsPage', segment: 'upload-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__providers_firebase_service__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_24__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_25__providers_form_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__["a" /* AngularFireStorage */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 686:
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
//Author Tony Manuel

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
            template: "  <ion-toolbar color=\"blue\" hideBackButton=\"true\">\n                    <button ion-button  menuToggle=\"left\" start>\n                        <ion-icon name=\"menu\"></ion-icon>\n                    </button>\n                    \n                    <ion-title text-center>{{this.pageTitle}}</ion-title>\n\n                   \n                    \n                </ion-toolbar>"
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());

//# sourceMappingURL=page-header.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_strings__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
//Author Tony Manuel
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
 * Generated class for the OfflineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OfflineComponent = /** @class */ (function () {
    function OfflineComponent() {
        this.offline = __WEBPACK_IMPORTED_MODULE_0__providers_strings__["a" /* AppConst */].offline;
    }
    OfflineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'offline',
            template: "  <ion-content padding class=\"login\">\n                <ion-list style=\"text-align:center\">\n                <img class=\"ionImage\" [src]=\"offline\">\n                <hr>\n                \n                <h3>WHOOPS!</h3>\n                <h5>Slow or no internet connection.</h5>\n                <h5>Please check your internet setting.</h5>\n                </ion-list>\n              \n              </ion-content>"
        }),
        __metadata("design:paramtypes", [])
    ], OfflineComponent);
    return OfflineComponent;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
//Author Tony Manuel
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
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('pageTitle'),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "pageTitle", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: "<ion-navbar color=\"blue\">\n                <ion-title>\n                  {{this.pageTitle}}\n                </ion-title>\n               </ion-navbar>"
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 293,
	"./af.js": 293,
	"./ar": 294,
	"./ar-dz": 295,
	"./ar-dz.js": 295,
	"./ar-kw": 296,
	"./ar-kw.js": 296,
	"./ar-ly": 297,
	"./ar-ly.js": 297,
	"./ar-ma": 298,
	"./ar-ma.js": 298,
	"./ar-sa": 299,
	"./ar-sa.js": 299,
	"./ar-tn": 300,
	"./ar-tn.js": 300,
	"./ar.js": 294,
	"./az": 301,
	"./az.js": 301,
	"./be": 302,
	"./be.js": 302,
	"./bg": 303,
	"./bg.js": 303,
	"./bm": 304,
	"./bm.js": 304,
	"./bn": 305,
	"./bn.js": 305,
	"./bo": 306,
	"./bo.js": 306,
	"./br": 307,
	"./br.js": 307,
	"./bs": 308,
	"./bs.js": 308,
	"./ca": 309,
	"./ca.js": 309,
	"./cs": 310,
	"./cs.js": 310,
	"./cv": 311,
	"./cv.js": 311,
	"./cy": 312,
	"./cy.js": 312,
	"./da": 313,
	"./da.js": 313,
	"./de": 314,
	"./de-at": 315,
	"./de-at.js": 315,
	"./de-ch": 316,
	"./de-ch.js": 316,
	"./de.js": 314,
	"./dv": 317,
	"./dv.js": 317,
	"./el": 318,
	"./el.js": 318,
	"./en-SG": 319,
	"./en-SG.js": 319,
	"./en-au": 320,
	"./en-au.js": 320,
	"./en-ca": 321,
	"./en-ca.js": 321,
	"./en-gb": 322,
	"./en-gb.js": 322,
	"./en-ie": 323,
	"./en-ie.js": 323,
	"./en-il": 324,
	"./en-il.js": 324,
	"./en-nz": 325,
	"./en-nz.js": 325,
	"./eo": 326,
	"./eo.js": 326,
	"./es": 327,
	"./es-do": 328,
	"./es-do.js": 328,
	"./es-us": 329,
	"./es-us.js": 329,
	"./es.js": 327,
	"./et": 330,
	"./et.js": 330,
	"./eu": 331,
	"./eu.js": 331,
	"./fa": 332,
	"./fa.js": 332,
	"./fi": 333,
	"./fi.js": 333,
	"./fo": 334,
	"./fo.js": 334,
	"./fr": 335,
	"./fr-ca": 336,
	"./fr-ca.js": 336,
	"./fr-ch": 337,
	"./fr-ch.js": 337,
	"./fr.js": 335,
	"./fy": 338,
	"./fy.js": 338,
	"./ga": 339,
	"./ga.js": 339,
	"./gd": 340,
	"./gd.js": 340,
	"./gl": 341,
	"./gl.js": 341,
	"./gom-latn": 342,
	"./gom-latn.js": 342,
	"./gu": 343,
	"./gu.js": 343,
	"./he": 344,
	"./he.js": 344,
	"./hi": 345,
	"./hi.js": 345,
	"./hr": 346,
	"./hr.js": 346,
	"./hu": 347,
	"./hu.js": 347,
	"./hy-am": 348,
	"./hy-am.js": 348,
	"./id": 349,
	"./id.js": 349,
	"./is": 350,
	"./is.js": 350,
	"./it": 351,
	"./it-ch": 352,
	"./it-ch.js": 352,
	"./it.js": 351,
	"./ja": 353,
	"./ja.js": 353,
	"./jv": 354,
	"./jv.js": 354,
	"./ka": 355,
	"./ka.js": 355,
	"./kk": 356,
	"./kk.js": 356,
	"./km": 357,
	"./km.js": 357,
	"./kn": 358,
	"./kn.js": 358,
	"./ko": 359,
	"./ko.js": 359,
	"./ku": 360,
	"./ku.js": 360,
	"./ky": 361,
	"./ky.js": 361,
	"./lb": 362,
	"./lb.js": 362,
	"./lo": 363,
	"./lo.js": 363,
	"./lt": 364,
	"./lt.js": 364,
	"./lv": 365,
	"./lv.js": 365,
	"./me": 366,
	"./me.js": 366,
	"./mi": 367,
	"./mi.js": 367,
	"./mk": 368,
	"./mk.js": 368,
	"./ml": 369,
	"./ml.js": 369,
	"./mn": 370,
	"./mn.js": 370,
	"./mr": 371,
	"./mr.js": 371,
	"./ms": 372,
	"./ms-my": 373,
	"./ms-my.js": 373,
	"./ms.js": 372,
	"./mt": 374,
	"./mt.js": 374,
	"./my": 375,
	"./my.js": 375,
	"./nb": 376,
	"./nb.js": 376,
	"./ne": 377,
	"./ne.js": 377,
	"./nl": 378,
	"./nl-be": 379,
	"./nl-be.js": 379,
	"./nl.js": 378,
	"./nn": 380,
	"./nn.js": 380,
	"./pa-in": 381,
	"./pa-in.js": 381,
	"./pl": 382,
	"./pl.js": 382,
	"./pt": 383,
	"./pt-br": 384,
	"./pt-br.js": 384,
	"./pt.js": 383,
	"./ro": 385,
	"./ro.js": 385,
	"./ru": 386,
	"./ru.js": 386,
	"./sd": 387,
	"./sd.js": 387,
	"./se": 388,
	"./se.js": 388,
	"./si": 389,
	"./si.js": 389,
	"./sk": 390,
	"./sk.js": 390,
	"./sl": 391,
	"./sl.js": 391,
	"./sq": 392,
	"./sq.js": 392,
	"./sr": 393,
	"./sr-cyrl": 394,
	"./sr-cyrl.js": 394,
	"./sr.js": 393,
	"./ss": 395,
	"./ss.js": 395,
	"./sv": 396,
	"./sv.js": 396,
	"./sw": 397,
	"./sw.js": 397,
	"./ta": 398,
	"./ta.js": 398,
	"./te": 399,
	"./te.js": 399,
	"./tet": 400,
	"./tet.js": 400,
	"./tg": 401,
	"./tg.js": 401,
	"./th": 402,
	"./th.js": 402,
	"./tl-ph": 403,
	"./tl-ph.js": 403,
	"./tlh": 404,
	"./tlh.js": 404,
	"./tr": 405,
	"./tr.js": 405,
	"./tzl": 406,
	"./tzl.js": 406,
	"./tzm": 407,
	"./tzm-latn": 408,
	"./tzm-latn.js": 408,
	"./tzm.js": 407,
	"./ug-cn": 409,
	"./ug-cn.js": 409,
	"./uk": 410,
	"./uk.js": 410,
	"./ur": 411,
	"./ur.js": 411,
	"./uz": 412,
	"./uz-latn": 413,
	"./uz-latn.js": 413,
	"./uz.js": 412,
	"./vi": 414,
	"./vi.js": 414,
	"./x-pseudo": 415,
	"./x-pseudo.js": 415,
	"./yo": 416,
	"./yo.js": 416,
	"./zh-cn": 417,
	"./zh-cn.js": 417,
	"./zh-hk": 418,
	"./zh-hk.js": 418,
	"./zh-tw": 419,
	"./zh-tw.js": 419
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
webpackContext.id = 702;

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Author Tony Manuel








var MyApp = /** @class */ (function () {
    function MyApp(storage, afAuth, zone, screenOrientation, network, app, platform, statusBar, splashScreen, alertCtrl) {
        var _this = this;
        this.storage = storage;
        this.afAuth = afAuth;
        this.zone = zone;
        this.screenOrientation = screenOrientation;
        this.network = network;
        this.app = app;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.isOffline = false;
        this.showOffline = true;
        this.alertShown = false;
        this.checkConnection();
        this.checkDisconnection();
        this.platform.ready().then(function () {
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            statusBar.styleDefault();
            splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            }, 0);
        });
        this.checkUserState();
    }
    MyApp.prototype.checkDisconnection = function () {
        var _this = this;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isOffline = true;
                _this.showOffline = false;
            });
            _this.checkConnection();
            disconnectSubscription.unsubscribe();
        });
    };
    MyApp.prototype.checkConnection = function () {
        var _this = this;
        var connectSubscription = this.network.onConnect().subscribe(function () {
            _this.checkDisconnection();
            _this.zone.run(function () {
                _this.isOffline = false;
                _this.showOffline = true;
            });
            connectSubscription.unsubscribe();
        });
    };
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want Exit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    MyApp.prototype.checkUserState = function () {
        var _this = this;
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.storage.get('roles').then(function (roles) {
                    if (roles) {
                        _this.zone.run(function () {
                            _this.rootParams = roles;
                            _this.rootPage = 'TabsPage';
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            _this.rootPage = 'LoginPage';
                        });
                    }
                });
            }
            else {
                _this.zone.run(function () {
                    _this.rootPage = 'LoginPage';
                });
            }
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"]) === "function" ? _a : Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic-app\src\app\app.html"*/'\n\n  <offline [hidden]=showOffline></offline>\n\n  \n\n  <ion-nav nav [root]="rootPage" [rootParams]="rootParams" [hidden]="isOffline "></ion-nav>\n\n'/*ion-inline-end:"F:\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]) === "function" ? _l : Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 732:
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
/*export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCRDymxcDEMORc4U1TjW5_SKiB22G45buM",
  authDomain: "sopaa-b37c1.firebaseapp.com",
  databaseURL: "https://sopaa-b37c1.firebaseio.com",
  projectId: "sopaa-b37c1",
  storageBucket: "sopaa-b37c1.appspot.com",
  messagingSenderId: "500138839182"
};*/
//# sourceMappingURL=firebase-service.js.map

/***/ })

},[482]);
//# sourceMappingURL=main.js.map