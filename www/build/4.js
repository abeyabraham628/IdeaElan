webpackJsonp([4],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveLeavePageModule", function() { return ApproveLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_leave__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApproveLeavePageModule = /** @class */ (function () {
    function ApproveLeavePageModule() {
    }
    ApproveLeavePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__approve_leave__["a" /* ApproveLeavePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__approve_leave__["a" /* ApproveLeavePage */]),
            ],
        })
    ], ApproveLeavePageModule);
    return ApproveLeavePageModule;
}());

//# sourceMappingURL=approve-leave.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendar__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
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
 * Generated class for the ApproveLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApproveLeavePage = /** @class */ (function () {
    function ApproveLeavePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.months = new __WEBPACK_IMPORTED_MODULE_0__providers_calendar__["a" /* Calendar */]();
    }
    ApproveLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-approve-leave',template:/*ion-inline-start:"F:\ionic-app\src\pages\approve-leave\approve-leave.html"*/'<ion-header no-border>\n    <ion-toolbar color="blue" hideBackButton="true">\n      <button ion-button  menuToggle="left" start>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      \n      <ion-title text-center>Approve Leaves</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button >\n          <ion-icon name="notifications"></ion-icon> \n        </button> \n      </ion-buttons>\n  </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/companylogo.png">\n          </ion-avatar>\n          <h2>Tony Manuel</h2>\n          <p>Sick Leave</p>\n        </ion-item>\n        <ion-row>\n            <ion-col col-6>This month leaves</ion-col>\n            <ion-col col-6>Remaining Leaves</ion-col>\n         </ion-row>\n         \n        <ion-row >\n           <ion-col col-6>{{currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{casualRemaining}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{sickRemaining}}</ion-col>\n         </ion-row>\n \n         <ion-row>\n           <ion-col col-6><button ion-button color="secondary" >Approve</button></ion-col>\n           <ion-col col-6><button ion-button color="danger" >Reject</button></ion-col>\n        </ion-row>\n      </ion-card>\n\n    \n    \n      \n  <ion-card>\n      <ion-list>\n        <h6 text-center class="title section-title">Past Leaves</h6>\n        <ion-item>\n            <ion-label>Calendar</ion-label>\n            <ion-select [(ngModel)]="month" (ionChange)="enableYear()">\n              <ion-option *ngFor="let x of months.monthName" value="{{x.value}}">{{x.monthName}}</ion-option>\n            </ion-select>\n            <ion-select [(ngModel)]="year" [hidden]=showYear >\n              <ion-option value="2019">2019</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item>\n              <ion-row class="table-title" >\n                <ion-col col-3 >Leave Type</ion-col>\n                <ion-col col-7 >Date</ion-col>\n                <ion-col col-2 >Status</ion-col>\n                <ion-col hidden col-2>View</ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item>\n              <ion-row *ngFor="let x of pastLeaves" class="col-text row-bottom-border" [ngClass]=\'x.status\'>\n                  <ion-col col-3>{{x.leaveType}}</ion-col><ion-col col-7 text-wrap>{{x.date}}</ion-col><ion-col col-2>{{x.status}}</ion-col>\n              </ion-row>\n            </ion-item>\n        </ion-list>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\approve-leave\approve-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], ApproveLeavePage);
    return ApproveLeavePage;
}());

//# sourceMappingURL=approve-leave.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.showYear = true;
        this.monthName = [{ 'monthName': 'January', 'value': '01' },
            { 'monthName': 'February', 'value': '02' },
            { 'monthName': 'March', 'value': '03' },
            { 'monthName': 'April', 'value': '04' },
            { 'monthName': 'May', 'value': '05' },
            { 'monthName': 'June', 'value': '06' },
            { 'monthName': 'July', 'value': '07' },
            { 'monthName': 'August', 'value': '08' },
            { 'monthName': 'September', 'value': '09' },
            { 'monthName': 'October', 'value': '10' },
            { 'monthName': 'November', 'value': '11' },
            { 'monthName': 'December', 'value': '12' }];
    }
    return Calendar;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=4.js.map