webpackJsonp([8],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewDetailsPageModule", function() { return InterviewDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interview_details__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterviewDetailsPageModule = /** @class */ (function () {
    function InterviewDetailsPageModule() {
    }
    InterviewDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interview_details__["a" /* InterviewDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__interview_details__["a" /* InterviewDetailsPage */]),
            ],
        })
    ], InterviewDetailsPageModule);
    return InterviewDetailsPageModule;
}());

//# sourceMappingURL=interview-details.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the InterviewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterviewDetailsPage = /** @class */ (function () {
    function InterviewDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InterviewDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterviewDetailsPage');
    };
    InterviewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interview-details',template:/*ion-inline-start:"F:\ionic-app\src\pages\interview-details\interview-details.html"*/'<ion-content style="margin-top:50px;" >\n  \n   \n    <div [ngSwitch]="recruitment">\n\n        \n          \n     <div>\n        \n      <ion-list >\n        \n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n        \n                <ion-row no-margin class="table-title row-bottom-border">\n                   <ion-col col-1 > \n                     <ion-checkbox (ionChange)=\'selectAll()\'></ion-checkbox>\n                   </ion-col>\n                   <ion-col col-4>Name</ion-col>\n                    <ion-col col-4>Phone</ion-col>\n                    <ion-col col-3>Interview Time</ion-col>\n                </ion-row>\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor="let x of applicantArray" >\n                    <ion-col col-1 > \n                        <ion-checkbox [checked]="checked"  (ionChange)="clickSelectBox(x.$key)"></ion-checkbox>\n                      </ion-col>\n                      <ion-col col-4>{{x.fName}} {{x.lName}}</ion-col>\n                       <ion-col col-4 >{{x.experience}}</ion-col>\n                       <ion-col col-3>Not Set</ion-col>\n                </ion-row>\n                <form [formGroup]="scheduleForm" (ngSubmit)="saveSchedule()">\n                <h6 class="title section-title">Schedule Details</h6>\n                <ion-row>\n                    <ion-item col-6>\n                      \n                      <ion-label stacked>Interview Date</ion-label>\n                      \n                      <ion-input type="text"  (click)="dispdate()" (ionFocus)="dispdate()" formControlName="scheduleDate"></ion-input>\n                    </ion-item>\n                    <ion-item col-6>\n                        <ion-label stacked>Interview Time</ion-label>\n                        <ion-datetime pickerFormat="h:mm A" formControlName="scheduleTime"></ion-datetime>\n                    </ion-item>\n                  </ion-row>\n                  <ion-row>\n                      <ion-item col-12>\n                        <ion-label stacked>Contact Person</ion-label>\n                        <ion-input formControlName="contactPerson" ></ion-input>\n                      </ion-item>\n                    </ion-row>\n                    <ion-row>\n                        <ion-item col-12>\n                          <ion-label stacked>Contact Number</ion-label>\n                          <ion-input formControlName="contactPersonNum" ></ion-input>\n                        </ion-item>\n                    \n                        <button ion-button type="submit" ion-button  icon-end  full color=blue >\n                           Send Call Letter\n                         </button>\n                      </ion-row> \n                    </form>\n        </ion-list>\n      \n\n\n    </div>\n\n    <div *ngSwitchCase="\'interviews\'" >\n        \n      <ion-list >\n        \n        <ion-item >\n        <button col-6 ion-button (click)="viewInterviewDates()">Past Interviews</button>\n          <button col-6 ion-button>Upcoming Interviews</button>\n          </ion-item>\n\n\n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n        \n                <ion-row no-margin class="table-title row-bottom-border">\n\n                   <ion-col col-4>Interview Date</ion-col>\n                    <ion-col col-5>Contact Person</ion-col>\n                    <ion-col col-3>Action</ion-col>\n                </ion-row>\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor="let x of interviewDate" >\n                    \n                      <ion-col col-4>{{x.interviewDate}} </ion-col>\n                       <ion-col col-5 >{{x.interviewDetails.contactPerson}}</ion-col>\n                       <ion-col col-3>View Details</ion-col>\n                </ion-row>\n                \n        </ion-list>\n      \n\n\n    </div>\n\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\interview-details\interview-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InterviewDetailsPage);
    return InterviewDetailsPage;
}());

//# sourceMappingURL=interview-details.js.map

/***/ })

});
//# sourceMappingURL=8.js.map