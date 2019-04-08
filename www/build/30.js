webpackJsonp([30],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentPageModule", function() { return RecruitmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recruitment__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RecruitmentPageModule = /** @class */ (function () {
    function RecruitmentPageModule() {
    }
    RecruitmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__recruitment__["a" /* RecruitmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__recruitment__["a" /* RecruitmentPage */]),
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], RecruitmentPageModule);
    return RecruitmentPageModule;
}());

//# sourceMappingURL=recruitment.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__["a" /* MomentdatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__["a" /* TablefilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__["a" /* MomentdatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__["a" /* TablefilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentdatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//TOny MAnuel


/**
 * Generated class for the MomentdatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentdatePipe = /** @class */ (function () {
    function MomentdatePipe() {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
    }
    MomentdatePipe.prototype.transform = function (date) {
        var expiryDate = __WEBPACK_IMPORTED_MODULE_1_moment__(date);
        return expiryDate.diff(this.currentDate, 'days');
    };
    MomentdatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'momentdate',
        })
    ], MomentdatePipe);
    return MomentdatePipe;
}());

//# sourceMappingURL=momentdate.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
//Tony Manuel
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TablefilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TablefilterPipe = /** @class */ (function () {
    function TablefilterPipe() {
    }
    TablefilterPipe.prototype.transform = function (items, field, value) {
        console.log(value);
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) {
            return singleItem[field].toLowerCase().includes(value.toLowerCase());
        });
    };
    TablefilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tableFilter',
        })
    ], TablefilterPipe);
    return TablefilterPipe;
}());

//# sourceMappingURL=tablefilter.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Tony Manuel




/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecruitmentPage = /** @class */ (function () {
    function RecruitmentPage(toastCtrl, loadingCtrl, alertCtrl, firebase, navCtrl, ref) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.firebase = firebase;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.checked = false;
        this.showDelete = false;
        this.showFooter = false;
        this.applicantsErr = false;
        this.applicantKeys = [];
        this.applicantDetails = []; // for storing the applciants retrieved from db
        this.x = true;
        //Initialising new applicant form
        this.newApplicantForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            $key: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            fName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2)]),
            lName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10)]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            employer: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)]),
            noticePeriod: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)]),
            currentctc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4)]),
            experience: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            expectedctc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4)]),
        });
        //Funtion for saving interview schedules for the respective applicants
        // fucntion for toggling check all or uncheck all applicants
        this.checkAll = false;
        // function for retrieving the history of schedules
        this.interviewDate = [];
        this.recruitment = "newApplicant";
        this.getApplicants();
        this.showApplicants();
    }
    RecruitmentPage.prototype.ionViewDidEnter = function () {
        this.applicantKeys = [];
        this.applicantsErr = false;
    };
    RecruitmentPage.prototype.getApplicants = function () {
        this.applicantList = this.firebase.list('Applicants');
        return this.applicantList.snapshotChanges();
    };
    ;
    //
    RecruitmentPage.prototype.getSchedules = function () {
        this.scheduleList = this.firebase.list('schedules');
        return this.scheduleList.snapshotChanges();
    };
    ;
    RecruitmentPage.prototype.showApplicants = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
            dismissOnPageChange: true
        });
        loader.present();
        this.newApplicantForm.reset();
        this.getApplicants().subscribe(function (res) {
            _this.applicantDetails = res.map(function (item) {
                if (!item.payload.hasChild('interviewDate')) //  retrieve the applicants who are not scheduled for an interview
                    return __assign({ $key: item.key }, item.payload.val());
                else
                    return null;
            }).filter(Boolean); //end of map
            loader.dismiss();
            _this.content.resize();
        }); //end of subscribe
    }; //end of show applicant function
    //Function for saving a new applicant to the database
    RecruitmentPage.prototype.saveApplicant = function (applicantDetails) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'dots',
            dismissOnPageChange: true
        });
        loader.present();
        this.applicantList.push({
            fName: applicantDetails.fName,
            lName: applicantDetails.lName,
            mobile: applicantDetails.mobile,
            email: applicantDetails.email,
            employer: applicantDetails.employer,
            noticePeriod: applicantDetails.noticePeriod,
            currentctc: applicantDetails.currentctc,
            experience: applicantDetails.experience,
            expectedctc: applicantDetails.expectedctc
        }).then(function () {
            loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: "Success",
                subTitle: "Applicant added succesfuly ",
                buttons: [{
                        text: "Ok",
                        handler: function () { _this.showDelete = false; _this.newApplicantForm.reset(); }
                    }]
            });
            alert.present();
        });
    }; //end of function
    RecruitmentPage.prototype.editCandidate = function (obj) {
        this.showFooter = false;
        this.content.resize();
        this.newApplicantForm.setValue(obj);
        this.recruitment = "newApplicant";
        this.showDelete = true;
    };
    RecruitmentPage.prototype.updateApplicant = function (applicantDetails) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'dots',
            dismissOnPageChange: true
        });
        loader.present();
        this.applicantList.update(applicantDetails.$key, {
            fName: applicantDetails.fName,
            lName: applicantDetails.lName,
            mobile: applicantDetails.mobile,
            email: applicantDetails.email,
            employer: applicantDetails.employer,
            noticePeriod: applicantDetails.noticePeriod,
            currentctc: applicantDetails.currentctc,
            experience: applicantDetails.experience,
            expectedctc: applicantDetails.expectedctc
        }).then(function () {
            loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: "Success",
                subTitle: "Applicant Updated succesfuly ",
                buttons: [{
                        text: "Ok",
                        handler: function () { _this.showDelete = false; _this.newApplicantForm.reset(); }
                    }]
            });
            alert.present();
        });
    }; //end of function
    RecruitmentPage.prototype.disableFooter = function () {
        this.showFooter = false;
        this.content.resize();
        this.applicantKeys = [];
    };
    RecruitmentPage.prototype.enableFooter = function () {
        this.showFooter = true;
        this.content.resize();
        this.resetApplciantForm();
    };
    RecruitmentPage.prototype.deleteApplicant = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete this applicant',
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        _this.applicantList.remove(_this.newApplicantForm.controls['$key'].value);
                        var toast = _this.toastCtrl.create({
                            message: 'Applicant deteled successfully',
                            duration: 3000
                        });
                        toast.present();
                        _this.resetApplciantForm();
                    }
                },
                {
                    text: 'No',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    RecruitmentPage.prototype.onSubmit = function () {
        if (this.newApplicantForm.controls.$key.value == null) {
            this.saveApplicant(this.newApplicantForm.value); // function for saving the form data to the database
        }
        else {
            this.updateApplicant(this.newApplicantForm.value); // function for saving the form data to the database
        }
    };
    RecruitmentPage.prototype.resetApplciantForm = function () {
        this.newApplicantForm.reset();
        this.showDelete = false; // hide the delete button
    };
    RecruitmentPage.prototype.selectAll = function () {
        if (this.checkAll)
            this.checked = true;
        else
            this.checked = false;
    };
    RecruitmentPage.prototype.gotoCreateSchedule = function () {
        if (this.applicantKeys.length < 1)
            this.applicantsErr = true;
        else
            this.navCtrl.push('InterviewSchedulePage', this.applicantKeys);
    };
    // Function for selecting multiple applincants before assigning a interview schedule
    RecruitmentPage.prototype.clickSelectBox = function (itemKey) {
        var foundAt = this.applicantKeys.indexOf(itemKey);
        if (foundAt >= 0)
            this.applicantKeys.splice(foundAt, 1);
        else
            this.applicantKeys.push(itemKey);
        /*if(this.applicantKeys.length<1){
        this.checkAll=false
        this.selectAll()
        
        }*/
    };
    RecruitmentPage.prototype.viewInterviewDates = function () {
        var _this = this;
        this.showFooter = false;
        this.getSchedules().subscribe(function (res) {
            _this.interviewDate = res.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            }); //end of map
        }); //end of subscribe
        console.log(this.interviewDate);
        this.content.resize();
    }; //end of function
    RecruitmentPage.prototype.interviewDetailsPage = function (interviewKey, interviewDate) {
        this.navCtrl.push('InterviewDetailsPage', { 'key': interviewKey, 'date': interviewDate });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]) === "function" ? _a : Object)
    ], RecruitmentPage.prototype, "content", void 0);
    RecruitmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recruitment',template:/*ion-inline-start:"D:\IdeaElan\src\pages\recruitment\recruitment.html"*/'<!--TOny Manuel-->\n\n<ion-header no-border>\n\n  <navbar pageTitle="RECRUITMENT"></navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="recruitment" color="white" >\n\n      <ion-segment-button  value="newApplicant" (click)="disableFooter()" >\n\n         New Applicant\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="schedules" (click)="enableFooter()">\n\n         Schedules\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="interviews" (click)="viewInterviewDates()">\n\n          Interviews\n\n      </ion-segment-button>\n\n  </ion-segment>\n\n   \n\n    <div [ngSwitch]="recruitment">\n\n\n\n        <div *ngSwitchCase="\'newApplicant\'">\n\n          <form [formGroup]="newApplicantForm" (ngSubmit)="onSubmit()">\n\n         \n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n              \n\n           <ion-row>\n\n                   <ion-col col-6>\n\n                    <ion-item>\n\n                      <ion-label stacked>First Name</ion-label>\n\n                      <ion-input type="text" formControlName="fName" maxlength="15" ></ion-input>\n\n                    </ion-item> \n\n                    <ion-item  no-lines *ngIf="(newApplicantForm.get(\'fName\').hasError(\'minlength\') || newApplicantForm.get(\'fName\').hasError(\'required\') ) && newApplicantForm.get(\'fName\').touched">\n\n                        <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'fName\').hasError(\'required\')  || newApplicantForm.get(\'fName\').hasError(\'minlength\')) && newApplicantForm.get(\'fName\').touched" >\n\n                          Invalid First Name\n\n                        </ion-label>\n\n                      </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-6>\n\n                      <ion-item  >\n\n                        <ion-label stacked>Last Name</ion-label>\n\n                        <ion-input type="text"  formControlName="lName" maxlength="15" ></ion-input>\n\n                      </ion-item>\n\n                      <ion-item  no-lines *ngIf="(newApplicantForm.get(\'lName\').hasError(\'minlength\') || newApplicantForm.get(\'lName\').hasError(\'required\') ) && newApplicantForm.get(\'lName\').touched">\n\n                          <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'lName\').hasError(\'required\')  || newApplicantForm.get(\'lName\').hasError(\'minlength\')) && newApplicantForm.get(\'lName\').touched" >\n\n                            Invalid Last Name\n\n                          </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n             </ion-row>\n\n\n\n               \n\n                    <ion-item  > \n\n                        <ion-label stacked>Mobile</ion-label>\n\n                        <ion-input type="text" formControlName="mobile" maxlength="10"></ion-input>\n\n                    </ion-item> \n\n                    <ion-item  no-lines *ngIf="(newApplicantForm.get(\'mobile\').hasError(\'minlength\') || newApplicantForm.get(\'mobile\').hasError(\'required\') ) && newApplicantForm.get(\'mobile\').touched">\n\n                      <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'mobile\').hasError(\'required\')  || newApplicantForm.get(\'mobile\').hasError(\'minlength\') ) && newApplicantForm.get(\'mobile\').touched" >\n\n                        Invalid Mobile Number\n\n                      </ion-label>\n\n                    </ion-item>\n\n                \n\n                      \n\n                  \n\n                    <ion-item> \n\n                       <ion-label stacked>Email</ion-label>\n\n                       <ion-input type="email" formControlName="email"  ></ion-input>\n\n                     </ion-item>\n\n                     <ion-item  no-lines *ngIf="(newApplicantForm.get(\'email\').hasError(\'minlength\') || newApplicantForm.get(\'email\').hasError(\'required\') || newApplicantForm.get(\'email\').hasError(\'pattern\') ) && newApplicantForm.get(\'email\').touched">\n\n                      <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'email\').hasError(\'minlength\') || newApplicantForm.get(\'email\').hasError(\'required\') || newApplicantForm.get(\'email\').hasError(\'pattern\') ) && newApplicantForm.get(\'email\').touched" >\n\n                        Invalid Email ID\n\n                      </ion-label>\n\n                    </ion-item>\n\n                   \n\n\n\n                   <h6 class="title section-title ">Employer And Salary</h6>\n\n                 \n\n                     <ion-item > \n\n                        <ion-label stacked>Current Employer</ion-label>\n\n                        <ion-input type="text"  formControlName="employer" maxlength="20"></ion-input>\n\n                      </ion-item>\n\n                      <ion-item  no-lines *ngIf="(newApplicantForm.get(\'employer\').hasError(\'minlength\') || newApplicantForm.get(\'employer\').hasError(\'required\') ) && newApplicantForm.get(\'employer\').touched">\n\n                        <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'employer\').hasError(\'required\')  || newApplicantForm.get(\'employer\').hasError(\'minlength\')) && newApplicantForm.get(\'employer\').touched" >\n\n                          Employer details Required\n\n                        </ion-label>\n\n                      </ion-item>\n\n                   \n\n                    \n\n                    <ion-row>\n\n                      <ion-col col-6>\n\n                          <ion-item > \n\n                              <ion-label stacked>Notice Period</ion-label>\n\n                              <ion-input type="text"  formControlName="noticePeriod" maxlength="10"></ion-input>\n\n                            </ion-item>\n\n                            <ion-item  no-lines *ngIf="(newApplicantForm.get(\'noticePeriod\').hasError(\'minlength\') || newApplicantForm.get(\'noticePeriod\').hasError(\'required\') ) && newApplicantForm.get(\'noticePeriod\').touched">\n\n                              <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'noticePeriod\').hasError(\'required\')  || newApplicantForm.get(\'noticePeriod\').hasError(\'minlength\')) && newApplicantForm.get(\'noticePeriod\').touched" >\n\n                                Notice Period Required\n\n                              </ion-label>\n\n                            </ion-item>\n\n                            \n\n                      </ion-col>\n\n                    \n\n                   \n\n                       <ion-col col-6>\n\n                         <ion-item>\n\n                          <ion-label stacked>Current CTC</ion-label>\n\n                          <ion-input type="Number" formControlName="currentctc" maxlength="7"></ion-input>\n\n                        </ion-item>\n\n\n\n                        <ion-item  no-lines *ngIf="(newApplicantForm.get(\'currentctc\').hasError(\'minlength\') || newApplicantForm.get(\'currentctc\').hasError(\'required\') ) && newApplicantForm.get(\'currentctc\').touched">\n\n                          <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'currentctc\').hasError(\'required\')  || newApplicantForm.get(\'currentctc\').hasError(\'minlength\')) && newApplicantForm.get(\'currentctc\').touched" >\n\n                            CTC Required\n\n                          </ion-label>\n\n                        </ion-item>\n\n                        </ion-col>\n\n                     </ion-row> \n\n                    \n\n                    <h6 class="title section-title">Experience Details</h6>\n\n                   <ion-row >\n\n                     <ion-col col-6>\n\n                     <ion-item >\n\n                            <ion-label stacked>Total Experience</ion-label>\n\n                            <ion-select    formControlName="experience">\n\n                              <ion-option value="Below 1 Year">Below 1 Year</ion-option>\n\n                              <ion-option value="1 - 2 Years">1 - 2 Years</ion-option>\n\n                              <ion-option value="2 - 3 Years">2 - 3 Years</ion-option>\n\n                              <ion-option value="3 - 4 Years">3 - 4 Years</ion-option>\n\n                              <ion-option value="4 - 5 Years">4 - 5 Years</ion-option>\n\n                              <ion-option value="Above 5 Years">Above 5 Years</ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                          <ion-item  no-lines *ngIf="(newApplicantForm.get(\'experience\').hasError(\'minlength\') || newApplicantForm.get(\'experience\').hasError(\'required\') ) && newApplicantForm.get(\'experience\').touched">\n\n                            <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'experience\').hasError(\'required\')  || newApplicantForm.get(\'experience\').hasError(\'minlength\')) && newApplicantForm.get(\'experience\').touched" >\n\n                             Invalid Experience\n\n                            </ion-label>\n\n                          </ion-item>\n\n                        </ion-col>\n\n                     \n\n                    <ion-col col-6>\n\n                        <ion-item >\n\n                          <ion-label stacked>Expected CTC</ion-label>\n\n                          <ion-input type="Number"  formControlName="expectedctc" maxlength="7"> </ion-input>\n\n                        </ion-item>\n\n                        <ion-item  no-lines *ngIf="(newApplicantForm.get(\'expectedctc\').hasError(\'minlength\') || newApplicantForm.get(\'expectedctc\').hasError(\'required\') ) && newApplicantForm.get(\'expectedctc\').touched">\n\n                          <ion-label stacked  color="danger" *ngIf="(newApplicantForm.get(\'expectedctc\').hasError(\'required\')  || newApplicantForm.get(\'expectedctc\').hasError(\'minlength\')) && newApplicantForm.get(\'expectedctc\').touched" >\n\n                            Invalid Expected CTC\n\n                          </ion-label>\n\n                        </ion-item>\n\n                      </ion-col>\n\n                  </ion-row>\n\n                       \n\n                      <ion-row>\n\n                        <ion-col (col-6)="showDelete" (col-4)="!showDelete">\n\n                        <button ion-button type="submit" [disabled]="newApplicantForm.invalid" ion-button  icon-end  full color=blue >\n\n                           Save\n\n                         </button>\n\n                        </ion-col>\n\n                        <ion-col *ngIf="showDelete" col-4 >\n\n                          <button  ion-button type="button" (click)="deleteApplicant()"  ion-button  icon-end  full color=blue >\n\n                             Delete\n\n                           </button>\n\n                          </ion-col>\n\n                          <ion-col (col-6)="showDelete" (col-4)="!showDelete">\n\n                            <button ion-button type="reset" (click)="resetApplciantForm()"  icon-end full color=blue   >\n\n                              Cancel\n\n                            </button>\n\n                            </ion-col>\n\n                      </ion-row> \n\n                       \n\n            \n\n          </form>\n\n        </div>\n\n          \n\n     <div *ngSwitchCase="\'schedules\'">\n\n        \n\n         <ion-searchbar placeholder="Search Applicant" [(ngModel)]=searchString  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n         <ion-row no-margin class="table-title row-bottom-border">\n\n                        <ion-col col-1 > \n\n                          <ion-checkbox [(ngModel)]="checkAll" (ionChange)=\'selectAll()\'></ion-checkbox>\n\n                        </ion-col>\n\n                        <ion-col col-3>Name</ion-col>\n\n                         <ion-col col-3>Exp</ion-col>\n\n                         <ion-col col-3>Interview Date</ion-col>\n\n                         <ion-col col-2>Edit</ion-col>\n\n                     </ion-row>\n\n     \n\n                     <ion-row no-margin class=" col-text  row-bottom-border" *ngFor=\'let x of applicantDetails | tableFilter : "fName" : searchString; let i = index\'  >\n\n                         <ion-col col-1 > \n\n                             <ion-checkbox (ionChange)="clickSelectBox(x.$key)"></ion-checkbox>\n\n                           </ion-col>\n\n                           <ion-col col-3>{{x.fName}} {{x.lName}}</ion-col>\n\n                            <ion-col col-3 >{{x.experience}}</ion-col>\n\n                            <ion-col col-3>Not Set</ion-col>\n\n                            <ion-col col-2 (click)="editCandidate(x)">Edit</ion-col>\n\n                      </ion-row>\n\n                     \n\n                     \n\n                      \n\n                  \n\n                    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'interviews\'" >\n\n        \n\n      <ion-list >\n\n        \n\n      <!-- <ion-searchbar placeholder="Search User" [(ngModel)]="searchInterview"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n        -->\n\n                <ion-row no-margin class="table-title row-bottom-border">\n\n                <ion-col col-4>Interview Date</ion-col>\n\n                    <ion-col col-5>Interview Time</ion-col>\n\n                     <ion-col col-3>Action</ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor=\'let x of interviewDate | tableFilter : "contactPerson" : searchInterview; let i = index\' >\n\n                    \n\n                      <ion-col col-4>{{x.interviewDate}} </ion-col>\n\n                       <ion-col col-5 >{{x.interviewDetails.interviewTime}}</ion-col>\n\n                       <ion-col col-3 (click)="interviewDetailsPage(x.$key,x.interviewDate)">View Details</ion-col>\n\n                </ion-row>\n\n                \n\n        </ion-list>\n\n      \n\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf="showFooter">\n\n    <ion-item  no-lines *ngIf="applicantsErr">\n\n        <ion-label stacked  color="danger" >\n\n          Select Candidate\n\n        </ion-label>\n\n      </ion-item>\n\n  <button ion-button color="blue" full (click)="gotoCreateSchedule()">Create Schedules</button>\n\n</ion-footer>'/*ion-inline-end:"D:\IdeaElan\src\pages\recruitment\recruitment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" ? _g : Object])
    ], RecruitmentPage);
    return RecruitmentPage;
}());

//# sourceMappingURL=recruitment.js.map

/***/ })

});
//# sourceMappingURL=30.js.map