webpackJsonp([19],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewSchedulePageModule", function() { return InterviewSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interview_schedule__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InterviewSchedulePageModule = /** @class */ (function () {
    function InterviewSchedulePageModule() {
    }
    InterviewSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interview_schedule__["a" /* InterviewSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__interview_schedule__["a" /* InterviewSchedulePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], InterviewSchedulePageModule);
    return InterviewSchedulePageModule;
}());

//# sourceMappingURL=interview-schedule.module.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(467);
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
 * Generated class for the InterviewSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterviewSchedulePage = /** @class */ (function () {
    function InterviewSchedulePage(alertCtrl, datePicker, navCtrl, navParams, firebase) {
        this.alertCtrl = alertCtrl;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.applicantKeys = [];
        //Initialising schedule form
        this.scheduleForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            scheduleDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            scheduleTime: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            contactPerson: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)]),
            contactPersonNum: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10)]),
            jobTitle: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.applicantList = this.firebase.list('Applicants');
        this.applicantKeys = this.navParams.data;
        this.getSchedules();
    }
    InterviewSchedulePage.prototype.dispdate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: 5,
        }).then(function (date) {
            _this.scheduleForm.controls.scheduleDate.setValue(__WEBPACK_IMPORTED_MODULE_4_moment__(date).format('D-MMM-YYYY'));
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    }; //end of function
    //
    InterviewSchedulePage.prototype.getSchedules = function () {
        this.scheduleList = this.firebase.list('schedules');
        return this.scheduleList.snapshotChanges();
    };
    ;
    InterviewSchedulePage.prototype.saveSchedule = function () {
        var _this = this;
        var schedule = {
            jobTitle: this.scheduleForm.controls.jobTitle.value,
            interviewTime: this.scheduleForm.controls.scheduleTime.value,
            contactPerson: this.scheduleForm.controls.contactPerson.value,
            contactNumber: this.scheduleForm.controls.contactPersonNum.value
        };
        //Schedule details is pushed first to the db and then the key of that particular record is retrieved
        //Once the key is retrieved,that key is add as a reference to the interviewDate field for the selected candidated record. 
        this.scheduleList.push({
            interviewDate: this.scheduleForm.controls.scheduleDate.value,
            interviewDetails: schedule
        }).then(function (snap) {
            // Save the interviewDate for the candidates who are scheduled for interiew
            for (var i = 0; i < _this.applicantKeys.length; i++)
                _this.applicantList.update(_this.applicantKeys[i], {
                    interviewDate: snap.key,
                    interviewStatus: 'Not Reported'
                }).then(function () {
                    var alert = _this.alertCtrl.create({
                        title: "Success",
                        subTitle: "Schedule created succesfuly ",
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.scheduleForm.reset();
                    _this.applicantKeys = [];
                });
        });
    }; //end of save schedule function
    InterviewSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interview-schedule',template:/*ion-inline-start:"F:\ionic-app\src\pages\interview-schedule\interview-schedule.html"*/'<!--\n  Generated template for the InterviewSchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <navbar pageTitle="Interview Schedule"></navbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="scheduleForm" (ngSubmit)="saveSchedule()">\n  <h6 class="title section-title">Schedule Details</h6>\n                \n                \n\n\n  <ion-item >\n      <ion-label stacked>Job Title</ion-label>\n      <ion-input  type="text"   formControlName="jobTitle"></ion-input>\n    </ion-item>\n    <ion-item  no-lines *ngIf=" scheduleForm.get(\'jobTitle\').hasError(\'required\')  && scheduleForm.get(\'jobTitle\').touched">\n        <ion-label stacked  color="danger">\n          Invalid Job Title\n        </ion-label>\n      </ion-item>\n      <ion-item >\n        <ion-label stacked>Interview Date</ion-label>\n        <ion-input    (click)="dispdate()" (ionFocus)="dispdate()" formControlName="scheduleDate"></ion-input>\n      </ion-item>\n      <ion-item  no-lines *ngIf=" scheduleForm.get(\'scheduleDate\').hasError(\'required\')  && scheduleForm.get(\'scheduleDate\').touched">\n          <ion-label stacked  color="danger">\n            Invalid Date\n          </ion-label>\n        </ion-item>\n   \n\n \n      <ion-item >\n          <ion-label stacked>Interview Time</ion-label>\n          <ion-datetime pickerFormat="h:mm A"  formControlName="scheduleTime" readonly></ion-datetime>\n      </ion-item>\n      <ion-item  no-lines *ngIf=" scheduleForm.get(\'scheduleTime\').hasError(\'required\')  && scheduleForm.get(\'scheduleTime\').touched">\n          <ion-label stacked  color="danger" *ngIf="scheduleForm.get(\'scheduleTime\').hasError(\'required\')  && scheduleForm.get(\'scheduleTime\').touched" >\n            Invalid Time\n          </ion-label>\n        </ion-item>\n    \n  \n\n  \n\n        <ion-item>\n          <ion-label stacked>Contact Person</ion-label>\n          <ion-input formControlName="contactPerson" ></ion-input>\n        </ion-item>\n        <ion-item  no-lines *ngIf="(scheduleForm.get(\'contactPerson\').hasError(\'minlength\') || scheduleForm.get(\'contactPerson\').hasError(\'required\') ) && scheduleForm.get(\'contactPerson\').touched">\n            <ion-label stacked  color="danger">\n              Invalid Name\n            </ion-label>\n          </ion-item>\n        \n      \n      \n          <ion-item >\n            <ion-label stacked>Contact Number</ion-label>\n            <ion-input type="text" maxLength="10" formControlName="contactPersonNum" ></ion-input>\n          </ion-item>\n          <ion-item  no-lines *ngIf="(scheduleForm.get(\'contactPersonNum\').hasError(\'minlength\') || scheduleForm.get(\'contactPersonNum\').hasError(\'required\') ) && scheduleForm.get(\'contactPersonNum\').touched">\n              <ion-label stacked  color="danger" >\n                Invalid Contact Number\n              </ion-label>\n            </ion-item>\n\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button type="submit" [disabled]="scheduleForm.invalid" ion-button  icon-end  full color=blue >\n             Save\n           </button>\n        </ion-col>\n           <ion-col col-6>\n            <button ion-button type="reset"  icon-end full color=blue   >\n              Cancel\n            </button>\n          </ion-col>\n        </ion-row>\n        </form>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\interview-schedule\interview-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], InterviewSchedulePage);
    return InterviewSchedulePage;
}());

//# sourceMappingURL=interview-schedule.js.map

/***/ })

});
//# sourceMappingURL=19.js.map