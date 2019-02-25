webpackJsonp([8],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewSummaryPageModule", function() { return InterviewSummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interview_summary__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterviewSummaryPageModule = /** @class */ (function () {
    function InterviewSummaryPageModule() {
    }
    InterviewSummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interview_summary__["a" /* InterviewSummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__interview_summary__["a" /* InterviewSummaryPage */]),
            ],
        })
    ], InterviewSummaryPageModule);
    return InterviewSummaryPageModule;
}());

//# sourceMappingURL=interview-summary.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(469);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interview-summary',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\interview-summary\interview-summary.html"*/'<!--\n\n  Generated template for the InterviewSummaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content style="margin-top:55px;" >\n\n  <ion-card>\n\n    <ion-card-header>\n\n     <ion-row> Interview Summary</ion-row>\n\n     \n\n     <ion-row>26/05/2019</ion-row>\n\n     <ion-row><ion-col col-6>Total Candidates:{{total_Count}}</ion-col><ion-col col-6 ><ion-icon  name="arrow-back" (click)="goBack()"></ion-icon></ion-col></ion-row>\n\n     <ion-row> Attended:{{attended_Count}}</ion-row>\n\n     <ion-row> Selected:{{selectedList.length}}</ion-row>\n\n    </ion-card-header>\n\n  </ion-card>\n\n  \n\n      <ion-list >\n\n    <h6 class="title section-title">Selected Candidates</h6>\n\n    <ion-item>\n\n      <ion-row class="table-title">\n\n        <ion-col col-4 >Name</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <div *ngFor="let x of selectedList">\n\n    <ion-item no-lines  >\n\n      <ion-row  class="col-text" >\n\n          <ion-col col-6  style="color: #66887F;">\n\n           {{x.fName}} {{x.lName}}\n\n          </ion-col>\n\n          <ion-col col-4  style="color:#2679B0;" >\n\n           Notice Period:{{x.noticePeriod}}\n\n          </ion-col><br/>\n\n        \n\n       \n\n          <ion-col col-6  style="color: #66887F;">\n\n           {{x.employer}}\n\n          </ion-col>\n\n          <ion-col col-6  style="color:#2679B0;" >\n\n           Current CTC:{{x.currentctc}}\n\n          </ion-col><br/>\n\n        \n\n          <ion-col col-6  style="color: #66887F;">\n\n           {{x.mobile}}\n\n          </ion-col>\n\n          <ion-col col-6  style="color:#2679B0;" >\n\n           Expected CTC:{{x.expectedctc}}\n\n          </ion-col><br/>\n\n        <ion-col col-12  class="row-bottom-border" style="color: #66887F;">\n\n          {{x.email}}\n\n          </ion-col>\n\n         </ion-row >\n\n     </ion-item>\n\n    </div>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\interview-summary\interview-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], InterviewSummaryPage);
    return InterviewSummaryPage;
}());

//# sourceMappingURL=interview-summary.js.map

/***/ })

});
//# sourceMappingURL=8.js.map