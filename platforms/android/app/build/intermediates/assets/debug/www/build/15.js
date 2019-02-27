webpackJsonp([15],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveLeavePageModule", function() { return ApproveLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_leave__ = __webpack_require__(818);
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

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
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
    function ApproveLeavePage(alertCtrl, navCtrl, navParams, firebase, afauth) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afauth = afauth;
        this.userLeaveDetails = this.navParams.get('userDetails');
        this.userRemainingLeaves(this.userLeaveDetails.userId);
    }
    ApproveLeavePage.prototype.userRemainingLeaves = function (userId) {
        var _this = this;
        this.firebase.database.ref("AvailableLeaves/" + new Date().getFullYear() + "/" + userId).on('value', function (snapshot) {
            _this.sickRemaining = snapshot.child('sick').val();
            _this.casualRemaining = snapshot.child('casual').val();
        });
    };
    ApproveLeavePage.prototype.showConfirm = function (data, status) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to approve this leave request',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.saveLeaveStatus(data, status);
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    ApproveLeavePage.prototype.rejectConfirm = function (data, status) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Reject',
            message: 'Provide the reason for rejection',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Reason'
                },
            ],
            buttons: [
                {
                    text: 'Yes',
                    handler: function (reject) {
                        _this.saveLeaveStatus(data, status, reject.reason);
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    ApproveLeavePage.prototype.saveLeaveStatus = function (data, status, reason) {
        var _this = this;
        console.log(data.leaveType);
        if (status == "approved") {
            var count_1;
            if (data.leaveType == "casual")
                count_1 = this.casualRemaining - data.date.length;
            else
                count_1 = this.sickRemaining - data.date.length;
            this.firebase.database.ref("EmployeeLeaves/" + data.$key + "/status").set("" + status).then(function () {
                _this.firebase.database.ref("AvailableLeaves/" + new Date().getFullYear() + "/" + data.userId + "/" + data.leaveType).set(count_1);
            });
        }
        else {
            this.firebase.database.ref("EmployeeLeaves/" + data.$key).update({ 'status': "" + status, 'reason': "" + reason });
        }
    };
    ApproveLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-approve-leave',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\approve-leave\approve-leave.html"*/'<ion-header no-border>\n\n    <ion-toolbar color="blue" >\n\n      <button ion-button  menuToggle="left" start>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      \n\n      <ion-title text-center>Approve Leaves</ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button >\n\n          <ion-icon name="notifications"></ion-icon> \n\n        </button> \n\n      </ion-buttons>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/companylogo.png">\n\n          </ion-avatar>\n\n          <h2>{{userLeaveDetails.name}}</h2>\n\n          <p>Leave Type:{{userLeaveDetails.leaveType}}</p>\n\n          <p>Date: [ {{userLeaveDetails.date}}]</p>\n\n        </ion-item>\n\n        <ion-row>\n\n            <ion-col col-6>This month leaves</ion-col>\n\n            <ion-col col-6>Remaining Leaves</ion-col>\n\n         </ion-row>\n\n         \n\n        <ion-row >\n\n           <ion-col col-6>{{currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{casualRemaining}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{sickRemaining}}</ion-col>\n\n         </ion-row>\n\n \n\n         <ion-row>\n\n           <ion-col col-6><button ion-button color="secondary" (click)="showConfirm(userLeaveDetails,\'approved\')"  >Approve</button></ion-col>\n\n           <ion-col col-6><button ion-button color="danger" (click)="rejectConfirm(userLeaveDetails,\'rejected\')" >Reject</button></ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n\n\n    \n\n    \n\n      \n\n  <ion-card>\n\n      <ion-list>\n\n        <h6 text-center class="title section-title">Past Leaves</h6>\n\n        <ion-item>\n\n            <ion-label>Calendar</ion-label>\n\n            <ion-select [(ngModel)]="month" (ionChange)="enableYear()">\n\n              <ion-option *ngFor="let x of months.monthName" value="{{x.value}}">{{x.monthName}}</ion-option>\n\n            </ion-select>\n\n            <ion-select [(ngModel)]="year" [hidden]=showYear >\n\n              <ion-option value="2019">2019</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n              <ion-row class="table-title" >\n\n                <ion-col col-3 >Leave Type</ion-col>\n\n                <ion-col col-7 >Date</ion-col>\n\n                <ion-col col-2 >Status</ion-col>\n\n                <ion-col hidden col-2>View</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-row *ngFor="let x of pastLeaves" class="col-text row-bottom-border" [ngClass]=\'x.status\'>\n\n                  <ion-col col-3>{{x.leaveType}}</ion-col><ion-col col-7 text-wrap>{{x.date}}</ion-col><ion-col col-2>{{x.status}}</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n        </ion-list>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\approve-leave\approve-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], ApproveLeavePage);
    return ApproveLeavePage;
}());

//# sourceMappingURL=approve-leave.js.map

/***/ })

});
//# sourceMappingURL=15.js.map