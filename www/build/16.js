webpackJsonp([16],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeavePageModule", function() { return ApplyLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_leave__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyLeavePageModule = /** @class */ (function () {
    function ApplyLeavePageModule() {
    }
    ApplyLeavePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_leave__["a" /* ApplyLeavePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_leave__["a" /* ApplyLeavePage */]),
            ],
        })
    ], ApplyLeavePageModule);
    return ApplyLeavePageModule;
}());

//# sourceMappingURL=apply-leave.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the ApplyLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyLeavePage = /** @class */ (function () {
    function ApplyLeavePage(navCtrl, navParams, datePicker, firebase, datepipe, afauth, alert, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.datepipe = datepipe;
        this.afauth = afauth;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.leave = {};
        this.months = {};
        this.currentMonthLeave = 0;
        this.multiKey = false;
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
        this.pastLeaves = [];
        this.showYear = true;
        this.leaves = "applyLeave";
    }
    ApplyLeavePage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: 'multi',
            showAdjacentMonthDay: false,
            disableWeeks: [0, 6],
            from: new Date(),
            to: new Date().setDate(new Date().getDate() + 45)
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModal"], {
            options: options,
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            date.sort(function (a, b) {
                return a.time - b.time;
            });
            _this.leave = _this.tony(date);
        }); //end of calendar dismiss
    }; //end of open calendar function
    ApplyLeavePage.prototype.ionViewDidLoad = function () {
        this.getRamainingLeaves();
    };
    ApplyLeavePage.prototype.submitLeaveRequest = function () {
        var _this = this;
        var uid = this.afauth.auth.currentUser.uid;
        this.leave.status = "pending";
        if (new Date().getHours() < 9) {
            var alert_1 = this.alert.create({
                title: 'Restricted',
                subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.multiKey) {
                this.firebase.list("EmployeeLeaves/" + uid + "/" + this.$key1).push({
                    'leaveType': this.leave.leaveType,
                    'date': this.leave.date,
                    'status': this.leave.status,
                    'count': this.leave.count
                }).then(function () {
                    _this.firebase.list("EmployeeLeaves/" + uid + "/" + _this.$key2).push({
                        'leaveType': _this.leave.leaveType,
                        'date': _this.leave.date2,
                        'status': _this.leave.status,
                        'count': _this.leave.count2
                    }); //inserting the details of leaves
                });
            }
            else
                this.firebase.list("EmployeeLeaves/" + uid + "/" + this.$key1).push(this.leave); //inserting the details of leaves
            //this.firebase.list(`EmployeeLeaves/${uid}/MonthlyLeaves/${this.$key1}`).push(dayCounter)
        } //end of if else 
    }; //end os submit leave request function
    ApplyLeavePage.prototype.getPastLeaves = function (month, year) {
        var _this = this;
        var $month;
        if (month != null && year != null) {
            $month = month + "" + year;
        }
        else {
            var $month;
            if (new Date().getMonth() + 1 < 10)
                $month = "0" + (new Date().getMonth() + 1) + "" + new Date().getFullYear();
            else
                $month = (new Date().getMonth() + 1) + "" + new Date().getFullYear();
        }
        this.firebase.list("EmployeeLeaves/" + this.afauth.auth.currentUser.uid + "/" + $month).snapshotChanges().subscribe(function (list) {
            _this.pastLeaves = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    }; //end of function
    ApplyLeavePage.prototype.getRamainingLeaves = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firebase, date, year;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firebase = this.firebase;
                        year = new Date().getFullYear();
                        if (new Date().getMonth() + 1 < 10) {
                            date = "0" + (new Date().getMonth() + 1) + "" + new Date().getFullYear();
                        }
                        else {
                            date = new Date().getMonth() + 1 + "" + new Date().getFullYear();
                        }
                        return [4 /*yield*/, firebase.database.ref("EmployeeLeaves/FcXUquFxnfalG9DzoNi4X0CnRoG2/AvailableLeaves/" + year).on('value', function (snapshot) {
                                _this.sickRemaining = snapshot.child('sick').val();
                                _this.casualRemaining = snapshot.child('casual').val();
                                firebase.database.ref("EmployeeLeaves/FcXUquFxnfalG9DzoNi4X0CnRoG2/MonthlyLeaves/" + date).on('value', function (snapshot) {
                                    _this.currentMonthLeave = snapshot.val();
                                });
                            })]; //end of database ref*/
                    case 1:
                        _a.sent(); //end of database ref*/
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplyLeavePage.prototype.tony = function (data) {
        var _this = this;
        this.months.month = [];
        this.months.day = [];
        this.months.year = [];
        this.leave.date = [];
        this.leave.date2 = [];
        var selectedDates = [];
        data.forEach(function (values) {
            selectedDates.push(new Date(values.time).toLocaleDateString());
            _this.months.month.push(values.months);
            _this.months.year.push(values.years);
        });
        this.months.month = this.months.month.filter(function (elem, i, arr) {
            if (arr.indexOf(elem) === i) {
                return elem;
            }
        });
        this.months.year = this.months.year.filter(function (elem, i, arr) {
            if (arr.indexOf(elem) === i) {
                return elem;
            }
        });
        if (this.months.month.length === 1 && this.months.year.length === 1) {
            this.$key1 = "0" + this.months.month[0] + "" + this.months.year[0];
            for (var i = 0; i < selectedDates.length; i++) {
                this.leave.date.push(selectedDates[i]);
            }
            this.leave.count = this.leave.date.length;
        }
        else if (this.months.month.length === 2 && this.months.year.length === 1) {
            this.multiKey = true;
            this.$key1 = "0" + this.months.month[0] + "" + this.months.year[0];
            this.$key2 = "0" + this.months.month[1] + "" + this.months.year[0];
            for (var i = 0; i < selectedDates.length; i++) {
                if ((new Date(selectedDates[i]).getMonth() + 1).toString() === this.months.month[0].toString())
                    this.leave.date.push(selectedDates[i]);
                if ((new Date(selectedDates[i]).getMonth() + 1).toString() === this.months.month[1].toString())
                    this.leave.date2.push(selectedDates[i]);
            }
            this.leave.count = this.leave.date.length;
            this.leave.count2 = this.leave.date2.length;
        }
        else if (this.months.month.length === 2 && this.months.year.length === 2) {
            this.multiKey = true;
            this.$key1 = "0" + this.months.month[0] + "" + this.months.year[0];
            this.$key2 = "0" + this.months.month[1] + "" + this.months.year[1];
            for (var i = 0; i < selectedDates.length; i++) {
                if ((new Date(selectedDates[i]).getMonth() + 1).toString() === this.months.month[0].toString())
                    this.leave.date.push(selectedDates[i]);
                if ((new Date(selectedDates[i]).getMonth() + 1).toString() === this.months.month[1].toString())
                    this.leave.date2.push(selectedDates[i]);
            }
            this.leave.count = this.leave.date.length;
            this.leave.count2 = this.leave.date2.length;
        }
        return this.leave;
    };
    ApplyLeavePage.prototype.enableYear = function () {
        this.months.year = null;
        this.showYear = false;
        console.log("fasd");
    };
    ApplyLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-leave',template:/*ion-inline-start:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/'<!--\n  Generated template for the ApplyLeavePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color="blue" hideBackButton="true">\n    <button ion-button  menuToggle="left" start>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title text-center>Leaves</ion-title>\n\n    <ion-buttons end>\n      <button ion-button >\n        <ion-icon name="notifications"></ion-icon> \n      </button> \n    </ion-buttons>\n    \n</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  \n  \n    <ion-segment [(ngModel)]="leaves" color="white" >\n        <ion-segment-button value="applyLeave">\n           Apply Leave\n        </ion-segment-button>\n        <ion-segment-button value="leaveHistory" (click)="getPastLeaves()">\n          History\n        </ion-segment-button>\n     </ion-segment>\n\n\n<div [ngSwitch]="leaves">\n  <div *ngSwitchCase="\'applyLeave\'">\n    \n   \n\n\n\n\n\n\n    <ion-card>\n      <ion-card-content>\n         <ion-row>\n            <ion-col col-6>This month leaves</ion-col>\n            <ion-col col-6>Remaining Leaves</ion-col>\n         </ion-row>\n         \n        <ion-row >\n           <ion-col col-6>{{currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{casualRemaining}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{sickRemaining}}</ion-col>\n         </ion-row>\n         \n      </ion-card-content>\n  </ion-card>\n\n  <ion-card hidden>\n      <ion-card-header>\n          Recent Requests\n        </ion-card-header>\n    <ion-card-content>\n      \n      <ion-row >\n         <ion-col col-4>Date</ion-col><ion-col col-4>Leave Type</ion-col><ion-col col-4>Status</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-4>25/05/2018</ion-col><ion-col col-4>Sick</ion-col><ion-col col-4>Pending</ion-col>\n       </ion-row>\n       \n    </ion-card-content>\n</ion-card>\n  <h6 text-center class="title section-title">Leave Details</h6>\n    <ion-list radio-group [(ngModel)]="leave.leaveType">\n      <ion-row>\n        <ion-item col-6>\n            <ion-label>Casual Leave</ion-label>\n            <ion-radio  value="casual"></ion-radio>\n        </ion-item>\n        \n        <ion-item col-6>\n          <ion-label>Sick Leave</ion-label>\n          <ion-radio value="sick"></ion-radio>\n        </ion-item>\n      </ion-row>\n    \n  <ion-row>\n    <ion-item col-12>\n      <ion-label stacked>Select Dates</ion-label>\n      <ion-input  type="text" (click)="openCalendar() " [(ngModel)]="leave.date"  ></ion-input>\n    </ion-item>\n    \n  </ion-row>\n  <ion-row>\n    <button ion-button full color="blue" (click)="submitLeaveRequest()">Submit</button>\n  </ion-row>\n</ion-list>\n\n</div>\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n      <ion-item>\n          <ion-label>Calendar</ion-label>\n      <ion-select [(ngModel)]="months.month" (ionChange)="enableYear()">\n    \n    <ion-option *ngFor="let x of monthName" value="{{x.value}}">{{x.monthName}}</ion-option>\n    </ion-select>\n    <ion-select [(ngModel)]="months.year" [hidden]=showYear (ionChange)="getPastLeaves(months.month,months.year)">\n        \n        <ion-option value="2019">2019</ion-option>\n     </ion-select>\n\n     \n  </ion-item>\n  \n      <ion-list>\n        <h6 text-center class="title section-title">Recent Request</h6>\n         \n        \n        <ion-item>\n              <ion-row class="table-title" >\n                <ion-col col-3 >Leave Type</ion-col>\n                <ion-col col-7 >Date</ion-col>\n                <ion-col col-2 >Status</ion-col>\n                <ion-col hidden col-2>View</ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item>\n              <ion-row *ngFor="let x of pastLeaves" class="col-text row-bottom-border" [ngClass]=\'x.status\'>\n                  <ion-col col-3>{{x.leaveType}}</ion-col><ion-col col-7 text-wrap>{{x.date}}</ion-col><ion-col col-2>{{x.status}}</ion-col>\n              </ion-row>\n            </ion-item>\n        </ion-list>\n    </div>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ApplyLeavePage);
    return ApplyLeavePage;
}()); // end of class

//# sourceMappingURL=apply-leave.js.map

/***/ })

});
//# sourceMappingURL=16.js.map