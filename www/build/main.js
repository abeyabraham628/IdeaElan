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

/***/ 470:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__ = __webpack_require__(474);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_firebase__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_firebase_service__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_form_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(466);
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
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_strings__ = __webpack_require__(470);
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

/***/ 688:
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

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 286,
	"./af.js": 286,
	"./ar": 287,
	"./ar-dz": 288,
	"./ar-dz.js": 288,
	"./ar-kw": 289,
	"./ar-kw.js": 289,
	"./ar-ly": 290,
	"./ar-ly.js": 290,
	"./ar-ma": 291,
	"./ar-ma.js": 291,
	"./ar-sa": 292,
	"./ar-sa.js": 292,
	"./ar-tn": 293,
	"./ar-tn.js": 293,
	"./ar.js": 287,
	"./az": 294,
	"./az.js": 294,
	"./be": 295,
	"./be.js": 295,
	"./bg": 296,
	"./bg.js": 296,
	"./bm": 297,
	"./bm.js": 297,
	"./bn": 298,
	"./bn.js": 298,
	"./bo": 299,
	"./bo.js": 299,
	"./br": 300,
	"./br.js": 300,
	"./bs": 301,
	"./bs.js": 301,
	"./ca": 302,
	"./ca.js": 302,
	"./cs": 303,
	"./cs.js": 303,
	"./cv": 304,
	"./cv.js": 304,
	"./cy": 305,
	"./cy.js": 305,
	"./da": 306,
	"./da.js": 306,
	"./de": 307,
	"./de-at": 308,
	"./de-at.js": 308,
	"./de-ch": 309,
	"./de-ch.js": 309,
	"./de.js": 307,
	"./dv": 310,
	"./dv.js": 310,
	"./el": 311,
	"./el.js": 311,
	"./en-SG": 312,
	"./en-SG.js": 312,
	"./en-au": 313,
	"./en-au.js": 313,
	"./en-ca": 314,
	"./en-ca.js": 314,
	"./en-gb": 315,
	"./en-gb.js": 315,
	"./en-ie": 316,
	"./en-ie.js": 316,
	"./en-il": 317,
	"./en-il.js": 317,
	"./en-nz": 318,
	"./en-nz.js": 318,
	"./eo": 319,
	"./eo.js": 319,
	"./es": 320,
	"./es-do": 321,
	"./es-do.js": 321,
	"./es-us": 322,
	"./es-us.js": 322,
	"./es.js": 320,
	"./et": 323,
	"./et.js": 323,
	"./eu": 324,
	"./eu.js": 324,
	"./fa": 325,
	"./fa.js": 325,
	"./fi": 326,
	"./fi.js": 326,
	"./fo": 327,
	"./fo.js": 327,
	"./fr": 328,
	"./fr-ca": 329,
	"./fr-ca.js": 329,
	"./fr-ch": 330,
	"./fr-ch.js": 330,
	"./fr.js": 328,
	"./fy": 331,
	"./fy.js": 331,
	"./ga": 332,
	"./ga.js": 332,
	"./gd": 333,
	"./gd.js": 333,
	"./gl": 334,
	"./gl.js": 334,
	"./gom-latn": 335,
	"./gom-latn.js": 335,
	"./gu": 336,
	"./gu.js": 336,
	"./he": 337,
	"./he.js": 337,
	"./hi": 338,
	"./hi.js": 338,
	"./hr": 339,
	"./hr.js": 339,
	"./hu": 340,
	"./hu.js": 340,
	"./hy-am": 341,
	"./hy-am.js": 341,
	"./id": 342,
	"./id.js": 342,
	"./is": 343,
	"./is.js": 343,
	"./it": 344,
	"./it-ch": 345,
	"./it-ch.js": 345,
	"./it.js": 344,
	"./ja": 346,
	"./ja.js": 346,
	"./jv": 347,
	"./jv.js": 347,
	"./ka": 348,
	"./ka.js": 348,
	"./kk": 349,
	"./kk.js": 349,
	"./km": 350,
	"./km.js": 350,
	"./kn": 351,
	"./kn.js": 351,
	"./ko": 352,
	"./ko.js": 352,
	"./ku": 353,
	"./ku.js": 353,
	"./ky": 354,
	"./ky.js": 354,
	"./lb": 355,
	"./lb.js": 355,
	"./lo": 356,
	"./lo.js": 356,
	"./lt": 357,
	"./lt.js": 357,
	"./lv": 358,
	"./lv.js": 358,
	"./me": 359,
	"./me.js": 359,
	"./mi": 360,
	"./mi.js": 360,
	"./mk": 361,
	"./mk.js": 361,
	"./ml": 362,
	"./ml.js": 362,
	"./mn": 363,
	"./mn.js": 363,
	"./mr": 364,
	"./mr.js": 364,
	"./ms": 365,
	"./ms-my": 366,
	"./ms-my.js": 366,
	"./ms.js": 365,
	"./mt": 367,
	"./mt.js": 367,
	"./my": 368,
	"./my.js": 368,
	"./nb": 369,
	"./nb.js": 369,
	"./ne": 370,
	"./ne.js": 370,
	"./nl": 371,
	"./nl-be": 372,
	"./nl-be.js": 372,
	"./nl.js": 371,
	"./nn": 373,
	"./nn.js": 373,
	"./pa-in": 374,
	"./pa-in.js": 374,
	"./pl": 375,
	"./pl.js": 375,
	"./pt": 376,
	"./pt-br": 377,
	"./pt-br.js": 377,
	"./pt.js": 376,
	"./ro": 378,
	"./ro.js": 378,
	"./ru": 379,
	"./ru.js": 379,
	"./sd": 380,
	"./sd.js": 380,
	"./se": 381,
	"./se.js": 381,
	"./si": 382,
	"./si.js": 382,
	"./sk": 383,
	"./sk.js": 383,
	"./sl": 384,
	"./sl.js": 384,
	"./sq": 385,
	"./sq.js": 385,
	"./sr": 386,
	"./sr-cyrl": 387,
	"./sr-cyrl.js": 387,
	"./sr.js": 386,
	"./ss": 388,
	"./ss.js": 388,
	"./sv": 389,
	"./sv.js": 389,
	"./sw": 390,
	"./sw.js": 390,
	"./ta": 391,
	"./ta.js": 391,
	"./te": 392,
	"./te.js": 392,
	"./tet": 393,
	"./tet.js": 393,
	"./tg": 394,
	"./tg.js": 394,
	"./th": 395,
	"./th.js": 395,
	"./tl-ph": 396,
	"./tl-ph.js": 396,
	"./tlh": 397,
	"./tlh.js": 397,
	"./tr": 398,
	"./tr.js": 398,
	"./tzl": 399,
	"./tzl.js": 399,
	"./tzm": 400,
	"./tzm-latn": 401,
	"./tzm-latn.js": 401,
	"./tzm.js": 400,
	"./ug-cn": 402,
	"./ug-cn.js": 402,
	"./uk": 403,
	"./uk.js": 403,
	"./ur": 404,
	"./ur.js": 404,
	"./uz": 405,
	"./uz-latn": 406,
	"./uz-latn.js": 406,
	"./uz.js": 405,
	"./vi": 407,
	"./vi.js": 407,
	"./x-pseudo": 408,
	"./x-pseudo.js": 408,
	"./yo": 409,
	"./yo.js": 409,
	"./zh-cn": 410,
	"./zh-cn.js": 410,
	"./zh-hk": 411,
	"./zh-hk.js": 411,
	"./zh-tw": 412,
	"./zh-tw.js": 412
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
webpackContext.id = 689;

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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic-app\src\app\app.html"*/'\n\n  <offline [hidden]=showOffline></offline>\n\n  \n\n  <ion-nav nav [root]="rootPage" [rootParams]="rootParams" [hidden]="isOffline "></ion-nav>\n\n'/*ion-inline-end:"F:\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]])
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