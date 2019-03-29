webpackJsonp([25],{

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

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		735,
		24
	],
	"../pages/apply-leave/apply-leave.module": [
		736,
		6
	],
	"../pages/approve-leave/approve-leave.module": [
		737,
		5
	],
	"../pages/changepassword/changepassword.module": [
		738,
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
		3
	],
	"../pages/interview-schedule/interview-schedule.module": [
		742,
		19
	],
	"../pages/interview-summary/interview-summary.module": [
		743,
		18
	],
	"../pages/leaves-admin/leaves-admin.module": [
		744,
		4
	],
	"../pages/login/login.module": [
		745,
		17
	],
	"../pages/maintenancehistory/maintenancehistory.module": [
		746,
		16
	],
	"../pages/modal/modal.module": [
		747,
		15
	],
	"../pages/modifysystems/modifysystems.module": [
		748,
		14
	],
	"../pages/myprofile/myprofile.module": [
		749,
		13
	],
	"../pages/newuser/newuser.module": [
		759,
		0
	],
	"../pages/nointernet/nointernet.module": [
		750,
		12
	],
	"../pages/payslip/payslip.module": [
		751,
		11
	],
	"../pages/policy/policy.module": [
		752,
		10
	],
	"../pages/recruitment/recruitment.module": [
		758,
		2
	],
	"../pages/support/support.module": [
		753,
		9
	],
	"../pages/systems/systems.module": [
		754,
		1
	],
	"../pages/tabs/tabs.module": [
		755,
		8
	],
	"../pages/upload-events/upload-events.module": [
		756,
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
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offline_offline__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar__ = __webpack_require__(687);
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

/***/ 470:
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

/***/ 477:
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
    ChatbotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatbot',template:/*ion-inline-start:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/'\n<ion-header no-border>\n  <page-header pageTitle="CHATBOT"></page-header>\n</ion-header>\n<ion-content padding>\n    <div class="chats">\n      <div class="chatbox">\n        <div *ngFor="let chat of chat">\n          <div class="message sent" *ngIf="chat.question!=\'\' && chat.question!=null">\n            {{chat.question}}\n            \n          </div>\n          <div class="message received"  *ngIf="chat.answer!=\'\' && chat.answer!=null">\n            {{chat.answer}}\n            \n          </div>\n        </div>\n      </div>\n      </div>\n\n  \n</ion-content>\n\n\n<ion-footer>\n    <ion-item>\n    <ion-input [(ngModel)]="question" name="message" placeholder="Ask me anything"></ion-input>\n    <button ion-button (click)="ask(question)" item-right  color="orange"> <ion-icon  name="send" ></ion-icon></button>\n   \n  </ion-item>\n</ion-footer>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\chatbot\chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(601);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatbot_chatbot__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_firebase__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_database__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_firebase_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_components_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_form_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_calendar__ = __webpack_require__(734);
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], { navExitApp: false }, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-leave/apply-leave.module#ApplyLeavePageModule', name: 'ApplyLeavePage', segment: 'apply-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approve-leave/approve-leave.module#ApproveLeavePageModule', name: 'ApproveLeavePage', segment: 'approve-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 685:
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
            template: "  <ion-toolbar color=\"blue\" hideBackButton=\"true\">\n                    <button ion-button  menuToggle=\"left\" start>\n                        <ion-icon name=\"menu\"></ion-icon>\n                    </button>\n                    \n                    <ion-title text-center>{{this.pageTitle}}</ion-title>\n\n                   \n                    \n                </ion-toolbar>"
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());

//# sourceMappingURL=page-header.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_strings__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 285,
	"./af.js": 285,
	"./ar": 286,
	"./ar-dz": 287,
	"./ar-dz.js": 287,
	"./ar-kw": 288,
	"./ar-kw.js": 288,
	"./ar-ly": 289,
	"./ar-ly.js": 289,
	"./ar-ma": 290,
	"./ar-ma.js": 290,
	"./ar-sa": 291,
	"./ar-sa.js": 291,
	"./ar-tn": 292,
	"./ar-tn.js": 292,
	"./ar.js": 286,
	"./az": 293,
	"./az.js": 293,
	"./be": 294,
	"./be.js": 294,
	"./bg": 295,
	"./bg.js": 295,
	"./bm": 296,
	"./bm.js": 296,
	"./bn": 297,
	"./bn.js": 297,
	"./bo": 298,
	"./bo.js": 298,
	"./br": 299,
	"./br.js": 299,
	"./bs": 300,
	"./bs.js": 300,
	"./ca": 301,
	"./ca.js": 301,
	"./cs": 302,
	"./cs.js": 302,
	"./cv": 303,
	"./cv.js": 303,
	"./cy": 304,
	"./cy.js": 304,
	"./da": 305,
	"./da.js": 305,
	"./de": 306,
	"./de-at": 307,
	"./de-at.js": 307,
	"./de-ch": 308,
	"./de-ch.js": 308,
	"./de.js": 306,
	"./dv": 309,
	"./dv.js": 309,
	"./el": 310,
	"./el.js": 310,
	"./en-SG": 311,
	"./en-SG.js": 311,
	"./en-au": 312,
	"./en-au.js": 312,
	"./en-ca": 313,
	"./en-ca.js": 313,
	"./en-gb": 314,
	"./en-gb.js": 314,
	"./en-ie": 315,
	"./en-ie.js": 315,
	"./en-il": 316,
	"./en-il.js": 316,
	"./en-nz": 317,
	"./en-nz.js": 317,
	"./eo": 318,
	"./eo.js": 318,
	"./es": 319,
	"./es-do": 320,
	"./es-do.js": 320,
	"./es-us": 321,
	"./es-us.js": 321,
	"./es.js": 319,
	"./et": 322,
	"./et.js": 322,
	"./eu": 323,
	"./eu.js": 323,
	"./fa": 324,
	"./fa.js": 324,
	"./fi": 325,
	"./fi.js": 325,
	"./fo": 326,
	"./fo.js": 326,
	"./fr": 327,
	"./fr-ca": 328,
	"./fr-ca.js": 328,
	"./fr-ch": 329,
	"./fr-ch.js": 329,
	"./fr.js": 327,
	"./fy": 330,
	"./fy.js": 330,
	"./ga": 331,
	"./ga.js": 331,
	"./gd": 332,
	"./gd.js": 332,
	"./gl": 333,
	"./gl.js": 333,
	"./gom-latn": 334,
	"./gom-latn.js": 334,
	"./gu": 335,
	"./gu.js": 335,
	"./he": 336,
	"./he.js": 336,
	"./hi": 337,
	"./hi.js": 337,
	"./hr": 338,
	"./hr.js": 338,
	"./hu": 339,
	"./hu.js": 339,
	"./hy-am": 340,
	"./hy-am.js": 340,
	"./id": 341,
	"./id.js": 341,
	"./is": 342,
	"./is.js": 342,
	"./it": 343,
	"./it-ch": 344,
	"./it-ch.js": 344,
	"./it.js": 343,
	"./ja": 345,
	"./ja.js": 345,
	"./jv": 346,
	"./jv.js": 346,
	"./ka": 347,
	"./ka.js": 347,
	"./kk": 348,
	"./kk.js": 348,
	"./km": 349,
	"./km.js": 349,
	"./kn": 350,
	"./kn.js": 350,
	"./ko": 351,
	"./ko.js": 351,
	"./ku": 352,
	"./ku.js": 352,
	"./ky": 353,
	"./ky.js": 353,
	"./lb": 354,
	"./lb.js": 354,
	"./lo": 355,
	"./lo.js": 355,
	"./lt": 356,
	"./lt.js": 356,
	"./lv": 357,
	"./lv.js": 357,
	"./me": 358,
	"./me.js": 358,
	"./mi": 359,
	"./mi.js": 359,
	"./mk": 360,
	"./mk.js": 360,
	"./ml": 361,
	"./ml.js": 361,
	"./mn": 362,
	"./mn.js": 362,
	"./mr": 363,
	"./mr.js": 363,
	"./ms": 364,
	"./ms-my": 365,
	"./ms-my.js": 365,
	"./ms.js": 364,
	"./mt": 366,
	"./mt.js": 366,
	"./my": 367,
	"./my.js": 367,
	"./nb": 368,
	"./nb.js": 368,
	"./ne": 369,
	"./ne.js": 369,
	"./nl": 370,
	"./nl-be": 371,
	"./nl-be.js": 371,
	"./nl.js": 370,
	"./nn": 372,
	"./nn.js": 372,
	"./pa-in": 373,
	"./pa-in.js": 373,
	"./pl": 374,
	"./pl.js": 374,
	"./pt": 375,
	"./pt-br": 376,
	"./pt-br.js": 376,
	"./pt.js": 375,
	"./ro": 377,
	"./ro.js": 377,
	"./ru": 378,
	"./ru.js": 378,
	"./sd": 379,
	"./sd.js": 379,
	"./se": 380,
	"./se.js": 380,
	"./si": 381,
	"./si.js": 381,
	"./sk": 382,
	"./sk.js": 382,
	"./sl": 383,
	"./sl.js": 383,
	"./sq": 384,
	"./sq.js": 384,
	"./sr": 385,
	"./sr-cyrl": 386,
	"./sr-cyrl.js": 386,
	"./sr.js": 385,
	"./ss": 387,
	"./ss.js": 387,
	"./sv": 388,
	"./sv.js": 388,
	"./sw": 389,
	"./sw.js": 389,
	"./ta": 390,
	"./ta.js": 390,
	"./te": 391,
	"./te.js": 391,
	"./tet": 392,
	"./tet.js": 392,
	"./tg": 393,
	"./tg.js": 393,
	"./th": 394,
	"./th.js": 394,
	"./tl-ph": 395,
	"./tl-ph.js": 395,
	"./tlh": 396,
	"./tlh.js": 396,
	"./tr": 397,
	"./tr.js": 397,
	"./tzl": 398,
	"./tzl.js": 398,
	"./tzm": 399,
	"./tzm-latn": 400,
	"./tzm-latn.js": 400,
	"./tzm.js": 399,
	"./ug-cn": 401,
	"./ug-cn.js": 401,
	"./uk": 402,
	"./uk.js": 402,
	"./ur": 403,
	"./ur.js": 403,
	"./uz": 404,
	"./uz-latn": 405,
	"./uz-latn.js": 405,
	"./uz.js": 404,
	"./vi": 406,
	"./vi.js": 406,
	"./x-pseudo": 407,
	"./x-pseudo.js": 407,
	"./yo": 408,
	"./yo.js": 408,
	"./zh-cn": 409,
	"./zh-cn.js": 409,
	"./zh-hk": 410,
	"./zh-hk.js": 410,
	"./zh-tw": 411,
	"./zh-tw.js": 411
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
webpackContext.id = 688;

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(242);
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
        this.tony();
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
    MyApp.prototype.tony = function () {
        var _this = this;
        this.storage.get('roles').then(function (roles) {
            if (roles) {
                _this.storage.get('userId').then(function (x) {
                    _this.rootParams = [roles, x];
                    _this.rootPage = 'TabsPage';
                });
            }
            else {
                console.log(roles);
                _this.rootPage = 'LoginPage';
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

/***/ 733:
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

},[480]);
//# sourceMappingURL=main.js.map