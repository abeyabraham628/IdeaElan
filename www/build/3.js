webpackJsonp([3],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentPageModule", function() { return RecruitmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recruitment__ = __webpack_require__(821);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recruitment__["a" /* RecruitmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recruitment__["a" /* RecruitmentPage */]),
            ],
        })
    ], RecruitmentPageModule);
    return RecruitmentPageModule;
}());

//# sourceMappingURL=recruitment.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(323);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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



/**
 * Generated class for the InterviewSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterviewSummaryPage = /** @class */ (function () {
    function InterviewSummaryPage(navCtrl, navParams, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.selectedList = [];
        this.total_Count = 0;
        this.attended_Count = 0;
        this.selected_Count = 0;
        this.eventDate = navParams.get('eventDate');
        this.interviewSummary(this.eventDate);
    }
    InterviewSummaryPage.prototype.ionViewDidLoad = function () {
        //console.log('tony');
    };
    InterviewSummaryPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InterviewSummaryPage.prototype.interviewSummary = function (eventDate) {
        var _this = this;
        var result = [];
        var key;
        this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(eventDate).on("value", function (snapshot) {
            key = Object.keys(snapshot.val())[0];
        }); //end of Schedules reference
        this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(key).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                return false;
            });
        }); //end of Applicants reference
        this.total_Count = result.length;
        result.forEach(function (element) {
            if (element.interviewStatus == "selected") {
                _this.selectedList.push(element);
                _this.attended_Count += 1;
            }
            else if (element.interviewStatus == "reported")
                _this.attended_Count += 1;
        });
        //this.applcantsData=result
    }; //end of function
    InterviewSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interview-summary',template:/*ion-inline-start:"F:\ionic-app\src\pages\interview-summary\interview-summary.html"*/'<!--\n  Generated template for the InterviewSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content style="margin-top:55px;" >\n  <ion-card>\n    <ion-card-header>\n     <ion-row> Interview Summary</ion-row>\n     \n     <ion-row>26/05/2019</ion-row>\n     <ion-row><ion-col col-6>Total Candidates:{{total_Count}}</ion-col><ion-col col-6 ><ion-icon  name="arrow-back" (click)="goBack()"></ion-icon></ion-col></ion-row>\n     <ion-row> Attended:{{attended_Count}}</ion-row>\n     <ion-row> Selected:{{selectedList.length}}</ion-row>\n    </ion-card-header>\n  </ion-card>\n  \n      <ion-list >\n    <h6 class="title section-title">Selected Candidates</h6>\n    <ion-item>\n      <ion-row class="table-title">\n        <ion-col col-4 >Name</ion-col>\n      </ion-row>\n    </ion-item>\n    <div *ngFor="let x of selectedList">\n    <ion-item no-lines  >\n      <ion-row  class="col-text" >\n          <ion-col col-6  style="color: #66887F;">\n           {{x.fName}} {{x.lName}}\n          </ion-col>\n          <ion-col col-4  style="color:#2679B0;" >\n           Notice Period:{{x.noticePeriod}}\n          </ion-col><br/>\n        \n       \n          <ion-col col-6  style="color: #66887F;">\n           {{x.employer}}\n          </ion-col>\n          <ion-col col-6  style="color:#2679B0;" >\n           Current CTC:{{x.currentctc}}\n          </ion-col><br/>\n        \n          <ion-col col-6  style="color: #66887F;">\n           {{x.mobile}}\n          </ion-col>\n          <ion-col col-6  style="color:#2679B0;" >\n           Expected CTC:{{x.expectedctc}}\n          </ion-col><br/>\n        <ion-col col-12  class="row-bottom-border" style="color: #66887F;">\n          {{x.email}}\n          </ion-col>\n         </ion-row >\n     </ion-item>\n    </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\interview-summary\interview-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], InterviewSummaryPage);
    return InterviewSummaryPage;
}());

//# sourceMappingURL=interview-summary.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interview_summary_interview_summary__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(323);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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

//import { Firebase } from '@ionic-native/firebase';



/**
 * Generated class for the InterviewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterviewDetailsPage = /** @class */ (function () {
    function InterviewDetailsPage(navCtrl, navParams, firebase, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.applcantsData = [];
        this.eventDate = navParams.get('date');
        this.loadApplicants(this.eventDate);
    }
    InterviewDetailsPage.prototype.ionViewDidLoad = function () {
    };
    InterviewDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InterviewDetailsPage.prototype.loadApplicants = function (date) {
        var result = [];
        var x;
        this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(date).on("value", function (snapshot) {
            x = Object.keys(snapshot.val())[0];
        }); //end of Schedules reference
        this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(x).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                return false;
            });
        }); //end of Applicants reference
        this.applcantsData = [];
        this.applcantsData = result;
    }; //end of function
    InterviewDetailsPage.prototype.changeStatus = function (data) {
        var _this = this;
        var statusAlert = this.alertCtrl.create();
        statusAlert.addInput({
            type: 'radio',
            label: 'Reported',
            value: 'reported',
            checked: false
        });
        statusAlert.addInput({
            type: 'radio',
            label: 'Selected',
            value: 'selected',
            checked: false
        });
        statusAlert.addButton({
            text: 'OK',
            handler: function (status) {
                _this.firebase.list('Applicants').update(data.$key, { interviewStatus: status });
            }
        });
        statusAlert.setTitle(data.fName + " " + data.lName);
        statusAlert.addButton('Cancel');
        statusAlert.present();
    };
    InterviewDetailsPage.prototype.interviewSummary = function (eventDate) {
        var summaryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__interview_summary_interview_summary__["a" /* InterviewSummaryPage */], { eventDate: eventDate });
        summaryModal.present();
    };
    InterviewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-interview-details',template:/*ion-inline-start:"F:\ionic-app\src\pages\interview-details\interview-details.html"*/'\n<ion-header no-border>\n  <ion-toolbar color="blue" hideBackButton="true">\n    <button ion-button  menuToggle="left" start>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title text-center>Recruitments</ion-title>\n\n    <ion-buttons end>\n      <button ion-button >\n        <ion-icon name="notifications"></ion-icon> \n      </button> \n    </ion-buttons>\n    \n</ion-toolbar>\n\n</ion-header>\n\n<ion-content  >\n <ion-list >\n       {{eventDate}}  <button item-right ion-button (click)="goBack()">Back</button>\n       <button item-right ion-button (click)="interviewSummary(eventDate)">Summary</button>\n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n        \n                <ion-row no-margin class="table-title row-bottom-border"> \n                   \n                   <ion-col col-4>Applicant Name</ion-col>\n                    <ion-col col-3>Phone</ion-col>\n                    <ion-col col-3>Status</ion-col>\n                </ion-row>\n\n                <ion-row no-margin class="table-title row-bottom-border" *ngFor="let x of applcantsData"> \n                   \n                  <ion-col col-4>{{x.fName}} {{x.lName}}</ion-col>\n                   <ion-col col-3>{{x.mobile}}</ion-col>\n                   <ion-col col-3>{{x.interviewStatus}}</ion-col>\n                   <ion-col col-2 (click)="changeStatus(x)">Change</ion-col>\n               </ion-row>\n\n                \n        </ion-list>\n      \n\n\n</ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\interview-details\interview-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], InterviewDetailsPage);
    return InterviewDetailsPage;
}());

//# sourceMappingURL=interview-details.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interview_details_interview_details__ = __webpack_require__(752);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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






/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecruitmentPage = /** @class */ (function () {
    function RecruitmentPage(firebase, datePicker, navCtrl, ref) {
        this.firebase = firebase;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.checked = false;
        this.applicantDetails = []; // for storing the applciants retrieved from db
        //Initialising new applicant form
        this.newApplicantForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            $key: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null),
            fName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            lName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            employer: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            noticePeriod: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            currentctc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            experience: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            expectedctc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('')
        });
        //Initialising schedule form
        this.scheduleForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            scheduleDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            scheduleTime: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            contactPerson: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            contactPersonNum: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('')
        });
        // Function for selecting multiple applincants before assigning a interview schedule
        this.applicantKeys = [];
        // function for retrieving the history of schedules
        this.interviewDate = [];
        this.recruitment = "newApplicant";
        this.getApplicants();
    }
    RecruitmentPage.prototype.getApplicants = function () {
        this.applicantList = this.firebase.list('Applicants');
        return this.applicantList.snapshotChanges();
    };
    ;
    //
    RecruitmentPage.prototype.getSchedules = function () {
        this.scheduleList = this.firebase.list('Schedules');
        return this.scheduleList.snapshotChanges();
    };
    ;
    RecruitmentPage.prototype.showApplicants = function () {
        var _this = this;
        this.getApplicants().subscribe(function (res) {
            _this.applicantDetails = res.map(function (item) {
                if (!item.payload.hasChild('interviewDate')) //  retrieve the applicants who are not scheduled for an interview
                    return __assign({ $key: item.key }, item.payload.val());
                else
                    return null;
            }).filter(Boolean); //end of map
        }); //end of subscribe
    }; //end of show applicant function
    //Function for saving a new applicant to the database
    RecruitmentPage.prototype.saveApplicant = function (applicantDetails) {
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
        });
    }; //end of function
    RecruitmentPage.prototype.onSubmit = function () {
        if (this.newApplicantForm.controls.$key.value == null) {
            this.saveApplicant(this.newApplicantForm.value); // function for saving the form data to the database
            this.newApplicantForm.reset(); // reset applicant form after saving
        }
    };
    RecruitmentPage.prototype.dispdate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.scheduleForm.controls.scheduleDate.setValue(date.toLocaleDateString());
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    }; //end of function
    //Funtion for saving interview schedules for the respective applicants
    RecruitmentPage.prototype.saveSchedule = function () {
        var _this = this;
        var schedule = {
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
                    interviewDate: snap.key
                });
        });
    }; //end of save schedule function
    // fucntion for toggling check all or uncheck all applicants
    RecruitmentPage.prototype.selectAll = function () {
        this.checked = !this.checked;
    };
    RecruitmentPage.prototype.clickSelectBox = function (itemKey) {
        var foundAt = this.applicantKeys.indexOf(itemKey);
        if (foundAt >= 0)
            this.applicantKeys.splice(foundAt, 1);
        else
            this.applicantKeys.push(itemKey);
    };
    RecruitmentPage.prototype.viewInterviewDates = function () {
        var _this = this;
        this.getSchedules().subscribe(function (res) {
            _this.interviewDate = res.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            }); //end of map
        }); //end of subscribe
    }; //end of function
    RecruitmentPage.prototype.otherPage = function (interviewDate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__interview_details_interview_details__["a" /* InterviewDetailsPage */], { date: interviewDate });
    };
    RecruitmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recruitment',template:/*ion-inline-start:"F:\ionic-app\src\pages\recruitment\recruitment.html"*/'<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>RECRUITMENT</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="recruitment" color="white" >\n\n      <ion-segment-button  value="newApplicant" >\n\n         New Applicant\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="schedules" (click)="showApplicants()">\n\n         Schedules\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="interviews" (click)="viewInterviewDates()">\n\n          Interviews\n\n      </ion-segment-button>\n\n  </ion-segment>\n\n   \n\n    <div [ngSwitch]="recruitment">\n\n\n\n        <div *ngSwitchCase="\'newApplicant\'">\n\n          <form [formGroup]="newApplicantForm" (ngSubmit)="onSubmit()">\n\n          <ion-list >\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n           <ion-row>\n\n                  <ion-col  col-6 > \n\n                    <ion-item   >\n\n                      <ion-label stacked>First Name</ion-label>\n\n                      <ion-input formControlName="fName" ></ion-input>\n\n                    </ion-item> \n\n                    </ion-col>\n\n                    <ion-col col-6  > \n\n                      <ion-item  >\n\n                        <ion-label stacked>Last Name</ion-label>\n\n                        <ion-input formControlName="lName" ></ion-input>\n\n                      </ion-item>\n\n                      </ion-col>\n\n             </ion-row>\n\n               \n\n                    <ion-item  > \n\n                        <ion-label stacked>Mobile</ion-label>\n\n                        <ion-input formControlName="mobile"></ion-input>\n\n                    </ion-item> \n\n                \n\n                      \n\n                  \n\n                    <ion-item> \n\n                       <ion-label stacked>Email</ion-label>\n\n                       <ion-input type="email" formControlName="email" ></ion-input>\n\n                     </ion-item>\n\n                   \n\n\n\n                   <h6 class="title section-title ">Employer And Salary</h6>\n\n                 \n\n                     <ion-item > \n\n                        <ion-label stacked>Current Employer</ion-label>\n\n                        <ion-input formControlName="employer" ></ion-input>\n\n                      </ion-item>\n\n                   \n\n                    \n\n                    <ion-row>\n\n                      <ion-col col-6>\n\n                          <ion-item > \n\n                              <ion-label stacked>Notice Period</ion-label>\n\n                              <ion-input formControlName="noticePeriod"></ion-input>\n\n                            </ion-item>\n\n                      </ion-col>\n\n                    \n\n                   \n\n                       <ion-col col-6>\n\n                         <ion-item>\n\n                          <ion-label stacked>Current CTC</ion-label>\n\n                          <ion-input formControlName="currentctc"></ion-input>\n\n                        </ion-item>\n\n                        </ion-col>\n\n                     </ion-row> \n\n                    \n\n                    <h6 class="title section-title">Experience Details</h6>\n\n                   <ion-row >\n\n                     <ion-item col-6>\n\n                            <ion-label stacked>Total Experience</ion-label>\n\n                            <ion-select  formControlName="experience">\n\n                              <ion-option value="Below 1 Year">Below 1 Year</ion-option>\n\n                              <ion-option value="1 - 2 Years">1 - 2 Years</ion-option>\n\n                              <ion-option value="2 - 3 Years">2 - 3 Years</ion-option>\n\n                              <ion-option value="3 - 4 Years">3 - 4 Years</ion-option>\n\n                              <ion-option value="4 - 5 Years">4 - 5 Years</ion-option>\n\n                              <ion-option value="Above 5 Years">Above 5 Years</ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                     \n\n                    <ion-col col-6>\n\n                        <ion-item >\n\n                          <ion-label stacked>Expected CTC</ion-label>\n\n                          <ion-input formControlName="expectedctc"> </ion-input>\n\n                        </ion-item>\n\n                      </ion-col>\n\n                  </ion-row>\n\n                       \n\n                      <ion-row>\n\n                        <button ion-button type="submit" ion-button  icon-end  full color=blue >\n\n                           Save\n\n                         </button>\n\n                      </ion-row> \n\n                       \n\n            </ion-list>\n\n          </form>\n\n        </div>\n\n          \n\n     <div *ngSwitchCase="\'schedules\'">\n\n        \n\n      <ion-list >\n\n        \n\n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n        \n\n                <ion-row no-margin class="table-title row-bottom-border">\n\n                   <ion-col col-1 > \n\n                     <ion-checkbox (ionChange)=\'selectAll()\'></ion-checkbox>\n\n                   </ion-col>\n\n                   <ion-col col-4>Name</ion-col>\n\n                    <ion-col col-4>Experience</ion-col>\n\n                    <ion-col col-3>Interview Date</ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor="let x of applicantDetails " >\n\n                    <ion-col col-1 > \n\n                        <ion-checkbox [checked]="checked"  (ionChange)="clickSelectBox(x.$key)"></ion-checkbox>\n\n                      </ion-col>\n\n                      <ion-col col-4>{{x.fName}} {{x.lName}}</ion-col>\n\n                       <ion-col col-4 >{{x.experience}}</ion-col>\n\n                       <ion-col col-3>Not Set</ion-col>\n\n                </ion-row>\n\n                <form [formGroup]="scheduleForm" (ngSubmit)="saveSchedule()">\n\n                <h6 class="title section-title">Schedule Details</h6>\n\n                <ion-row>\n\n                    <ion-item col-6>\n\n                      \n\n                      <ion-label stacked>Interview Date</ion-label>\n\n                      \n\n                      <ion-input type="text"  (click)="dispdate()" (ionFocus)="dispdate()" formControlName="scheduleDate"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item col-6>\n\n                        <ion-label stacked>Interview Time</ion-label>\n\n                        <ion-datetime pickerFormat="h:mm A" formControlName="scheduleTime"></ion-datetime>\n\n                    </ion-item>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-item col-12>\n\n                        <ion-label stacked>Contact Person</ion-label>\n\n                        <ion-input formControlName="contactPerson" ></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item col-12>\n\n                          <ion-label stacked>Contact Number</ion-label>\n\n                          <ion-input formControlName="contactPersonNum" ></ion-input>\n\n                        </ion-item>\n\n                    \n\n                        <button ion-button type="submit" ion-button  icon-end  full color=blue >\n\n                           Send Call Letter\n\n                         </button>\n\n                      </ion-row> \n\n                    </form>\n\n        </ion-list>\n\n      \n\n\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'interviews\'" >\n\n        \n\n      <ion-list >\n\n        \n\n       <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n        \n\n                <ion-row no-margin class="table-title row-bottom-border">\n\n                <ion-col col-4>Interview Date</ion-col>\n\n                    <ion-col col-5>Contact Person</ion-col>\n\n                    <ion-col col-3>Action</ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor="let x of interviewDate" >\n\n                    \n\n                      <ion-col col-4>{{x.interviewDate}} </ion-col>\n\n                       <ion-col col-5 >{{x.interviewDetails.contactPerson}}</ion-col>\n\n                       <ion-col col-3 (click)="otherPage(x.interviewDate)">View Details</ion-col>\n\n                </ion-row>\n\n                \n\n        </ion-list>\n\n      \n\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\recruitment\recruitment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], RecruitmentPage);
    return RecruitmentPage;
}());

//# sourceMappingURL=recruitment.js.map

/***/ })

});
//# sourceMappingURL=3.js.map