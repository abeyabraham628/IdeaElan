webpackJsonp([5],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeavePageModule", function() { return ApplyLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_leave__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_datepicker__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_leave_model__ = __webpack_require__(740);
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
            providers: [__WEBPACK_IMPORTED_MODULE_3__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_4__models_leave_model__["a" /* LeaveModel */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_leave__["a" /* ApplyLeavePage */]),
            ],
        })
    ], ApplyLeavePageModule);
    return ApplyLeavePageModule;
}());

//# sourceMappingURL=apply-leave.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
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




var LeaveModel = /** @class */ (function () {
    function LeaveModel(afauth, firebase, alert) {
        this.afauth = afauth;
        this.firebase = firebase;
        this.alert = alert;
        this.monthNumber = [];
        this.leave = {};
        this.leaveCount = {};
        this.pastLeaves = [];
    }
    LeaveModel.prototype.arrangeDates = function (date) {
        var _this = this;
        var selectedDates = [];
        var date1 = [];
        var date2 = [];
        date.forEach(function (values) {
            selectedDates.push(new Date(values.time).toLocaleDateString()); // Converting the time property returned from date pikcer to  dates .
            _this.monthNumber.push(values.months); //Taking the month number which user has selected for  leave
        });
        this.monthNumber = this.monthNumber.filter(function (elem, i, arr) {
            if (arr.indexOf(elem) === i) {
                return elem;
            }
        });
        if (this.monthNumber.length === 1) {
            selectedDates.forEach(function (date) {
                date1.push(date);
            });
        }
        else if (this.monthNumber.length === 2) {
            selectedDates.forEach(function (date) {
                if ((new Date(date).getMonth() + 1).toString() === _this.monthNumber[0].toString())
                    date1.push(date);
                if ((new Date(date).getMonth() + 1).toString() == _this.monthNumber[1].toString())
                    date2.push(date);
            });
        }
        return ({ date1: date1, date2: date2 });
    };
    LeaveModel.prototype.submitLeaveRequest = function (leaveInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var userName, alert_1, x;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebase.database.ref("users/" + leaveInfo.userId).once('value', function (snap) {
                            userName = snap.child('fname').val() + " " + snap.child('lname').val();
                        })];
                    case 1:
                        _a.sent();
                        this.leave.status = "pending";
                        if (new Date().getHours() < 9) {
                            alert_1 = this.alert.create({
                                title: 'Restricted',
                                subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        else {
                            if (leaveInfo.date2) {
                                x = this.firebase.list("EmployeeLeaves").push({
                                    'name': userName,
                                    'leaveType': leaveInfo.leaveType,
                                    'date': leaveInfo.date,
                                    'status': leaveInfo.status,
                                    'userId': leaveInfo.userId
                                    //'count':this.leave.count
                                }).then(function () {
                                    var y = _this.firebase.list("EmployeeLeaves").push({
                                        'name': userName,
                                        'leaveType': leaveInfo.leaveType,
                                        'date': leaveInfo.date2,
                                        'status': leaveInfo.status,
                                        'userId': leaveInfo.userId
                                    });
                                }) //inserting the details of leaves
                                ;
                            }
                            else
                                this.firebase.list("EmployeeLeaves").push({
                                    'name': userName,
                                    'leaveType': leaveInfo.leaveType,
                                    'date': leaveInfo.date,
                                    'status': leaveInfo.status,
                                    'userId': leaveInfo.userId
                                });
                        } //end of if else 
                        return [2 /*return*/];
                }
            });
        });
    }; //end os submit leave request function
    LeaveModel.prototype.getPastLeaves = function (userId, dateFrom, dateTo) {
        var pastLeaves = [];
        var flag = false;
        this.firebase.database.ref("EmployeeLeaves").orderByChild("userId").equalTo("" + userId).once('value', function (snap) {
            if (dateFrom != null && dateTo != null) {
                snap.forEach(function (child) {
                    if (child.child('date').val().length > 1) {
                        child.child('date').forEach(function (data) {
                            if (new Date(data.val()).getTime() >= dateFrom && new Date(data.val()).getTime() <= dateTo)
                                flag = true;
                            else
                                flag = false;
                        });
                        if (flag)
                            pastLeaves.push(child.val());
                    }
                    else {
                        if (new Date(child.child('date').val()).getTime() >= dateFrom && new Date(child.child('date').val()).getTime() <= dateTo)
                            pastLeaves.push(child.val());
                    }
                });
            }
            else {
                snap.forEach(function (child) {
                    if (child.child('date').val().length > 1) {
                        child.child('date').forEach(function (data) {
                            if (new Date(data.val()).getMonth() + 1 === new Date().getMonth() + 1 && new Date(data.val()).getFullYear() === new Date().getFullYear())
                                flag = true;
                            else
                                flag = false;
                        });
                        if (flag)
                            pastLeaves.push(child.val());
                    }
                    else {
                        if (new Date(child.child('date').val()).getMonth() + 1 === new Date().getMonth() + 1 && new Date(child.child('date').val()).getFullYear() === new Date().getFullYear())
                            pastLeaves.push(child.val());
                    }
                });
            }
        }); //end of database ref
        return this.pastLeaves = pastLeaves.reverse();
    }; //end of function
    LeaveModel.prototype.getRemainingLeaves = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var remaininingLeaves, count, casual, sick;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remaininingLeaves = [];
                        count = 0;
                        return [4 /*yield*/, this.firebase.database.ref("AvailableLeaves/" + new Date().getFullYear() + "/" + userId).once('value', function (snapshot) {
                                casual = snapshot.child('casual').val();
                                sick = snapshot.child('sick').val();
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.firebase.database.ref("EmployeeLeaves").orderByChild("userId").equalTo("" + userId).once('value', function (snap) {
                                snap.forEach(function (child) {
                                    if (child.child('status').val() === "approved")
                                        if (child.child('date').val().length > 1) {
                                            child.child('date').forEach(function (data) {
                                                if (new Date(data.val()).getMonth() + 1 === new Date().getMonth() + 1 && new Date(data.val()).getFullYear() === new Date().getFullYear())
                                                    count += 1;
                                            });
                                        }
                                        else {
                                            if (new Date(child.child('date').val()).getMonth() + 1 === new Date().getMonth() + 1 && new Date(child.child('date').val()).getFullYear() === new Date().getFullYear())
                                                count += 1;
                                        }
                                }); // ed of for each
                                remaininingLeaves.push({ 'casual': casual, 'sick': sick, 'currentMonthLeave': count });
                            })
                            //})//end of then
                        ]; //end of snap
                    case 2:
                        _a.sent(); //end of snap
                        //})//end of then
                        return [2 /*return*/, (remaininingLeaves)];
                }
            });
        });
    };
    LeaveModel.prototype.viewLeaveRequest = function () {
        var leaveRequests = [];
        this.firebase.database.ref("EmployeeLeaves").orderByChild('status').equalTo('pending').on("value", function (snap) {
            snap.forEach(function (child) {
                leaveRequests.push(__assign({ $key: child.key }, child.val()));
            });
        });
        return leaveRequests.reverse();
    };
    LeaveModel.prototype.saveLeaveStatus = function (data, leaveCount, status, reason) {
        var _this = this;
        if (status == "approved") {
            var count_1;
            if (data.leaveType == "casual")
                count_1 = leaveCount.casualRemaining - data.date.length;
            else
                count_1 = leaveCount - data.date.length;
            this.firebase.database.ref("EmployeeLeaves/" + data.$key + "/status").set("" + status).then(function () {
                _this.firebase.database.ref("AvailableLeaves/" + new Date().getFullYear() + "/" + data.userId + "/" + data.leaveType).set(count_1);
            });
        }
        else {
            this.firebase.database.ref("EmployeeLeaves/" + data.$key).update({ 'status': "" + status, 'reason': "" + reason });
        }
    };
    LeaveModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]])
    ], LeaveModel);
    return LeaveModel;
}()); // end of class

//# sourceMappingURL=leave.model.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomDatePicker = /** @class */ (function () {
    function CustomDatePicker(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CustomDatePicker.prototype.datePickerOptions = function (pickMode, defaultScrollTo, from, dateLimitTo, disableWeeks) {
        var options = {
            pickMode: pickMode,
            showAdjacentMonthDay: false,
            disableWeeks: disableWeeks,
            from: from,
            to: dateLimitTo,
            defaultScrollTo: defaultScrollTo,
            showMonthPicker: true,
            showToggleButtons: true
        };
        return options;
    };
    CustomDatePicker.prototype.getMonths = function () {
        return [{ 'monthName': 'January', 'value': '01' },
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
    };
    CustomDatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CustomDatePicker);
    return CustomDatePicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_leave_model__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_datepicker__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(459);
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
 * Generated class for the ApplyLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyLeavePage = /** @class */ (function () {
    function ApplyLeavePage(afauth, navCtrl, navParams, modalCtrl, customDatePicker, userLeave) {
        this.afauth = afauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.customDatePicker = customDatePicker;
        this.userLeave = userLeave;
        this.leaveCount = {};
        this.leaveInfo = {};
        this.dateRange = "This Month Leave";
        this.months = this.customDatePicker.getMonths();
        this.ionSegmentDefaultValue = "applyLeave";
        this.viewRemainingLeaves();
    }
    ApplyLeavePage.prototype.ionViewDidLoad = function () {
    };
    ApplyLeavePage.prototype.datePicker = function (pickMode) {
        var _this = this;
        var dateLimit = new Date().setDate(new Date().getDate() + 45); // Display  45 days from today
        var defaultScrollTo = new Date();
        var disableWeek = [0, 6]; // disable Sunday-0 and Saturday-6
        if (pickMode == 'multi') {
            var from = new Date();
            var options = this.customDatePicker.datePickerOptions(pickMode, defaultScrollTo, from, dateLimit, disableWeek);
        }
        else {
            var from = new Date('2/1/2018');
            var options = this.customDatePicker.datePickerOptions(pickMode, defaultScrollTo, from);
        }
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options,
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date) {
            if (date != null) {
                if (pickMode === 'multi') {
                    date.sort(function (a, b) {
                        return a.time - b.time;
                    });
                    var selectedDates = _this.userLeave.arrangeDates(date);
                    _this.leaveDates = selectedDates.date1 + "," + selectedDates.date2;
                    _this.leaveInfo.date = selectedDates.date1;
                    if (selectedDates.date2.length > 0)
                        _this.leaveInfo.date2 = selectedDates.date2;
                }
                else {
                    var from = date['from'].string.split('-');
                    var to = date['to'].string.split('-');
                    _this.dateRange = from[2] + "-" + from[1] + "-" + from[0] + " to " + to[2] + "-" + to[1] + "-" + to[0];
                    _this.leaveHistory(date['from'].time, date['to'].time);
                }
            }
        }); //end of displayCalendar function
    }; // end of datepicker function
    ApplyLeavePage.prototype.applyForLeave = function (leaveInfo) {
        leaveInfo.userId = this.afauth.auth.currentUser.uid;
        leaveInfo.status = "pending";
        this.userLeave.submitLeaveRequest(leaveInfo);
    };
    ApplyLeavePage.prototype.leaveHistory = function (from, to) {
        this.leaveRecords = this.userLeave.getPastLeaves(this.afauth.auth.currentUser.uid, from, to);
    };
    ApplyLeavePage.prototype.viewRemainingLeaves = function () {
        var _this = this;
        this.userLeave.getRemainingLeaves(this.afauth.auth.currentUser.uid).then(function (item) {
            _this.leaveCount.sickRemaining = item[0].sick;
            _this.leaveCount.casualRemaining = item[0].casual;
            _this.leaveCount.currentMonthLeave = item[0].currentMonthLeave;
        });
    };
    ApplyLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-leave',template:/*ion-inline-start:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/'<!--\n\n  Generated template for the ApplyLeavePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>Leaves</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n    \n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  \n\n  \n\n    <ion-segment [(ngModel)]="ionSegmentDefaultValue" color="white" >\n\n        <ion-segment-button value="applyLeave">\n\n           Apply Leave\n\n        </ion-segment-button>\n\n        <ion-segment-button value="leaveHistory" (click)="leaveHistory()" >\n\n          History\n\n        </ion-segment-button>\n\n     </ion-segment>\n\n\n\n\n\n<div [ngSwitch]="ionSegmentDefaultValue">\n\n  <div *ngSwitchCase="\'applyLeave\'">\n\n    \n\n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n         <ion-row (click)="remaining()">\n\n            <ion-col col-6>This month leaves</ion-col>\n\n            <ion-col col-6>Remaining Leaves</ion-col>\n\n         </ion-row>\n\n         \n\n        <ion-row >\n\n           <ion-col col-6>{{leaveCount.currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{leaveCount.casualRemaining}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{leaveCount.sickRemaining}}</ion-col>\n\n         </ion-row>\n\n         \n\n      </ion-card-content>\n\n  </ion-card>\n\n\n\n \n\n  <h6 text-center class="title section-title">Leave Details</h6>\n\n    <ion-list radio-group [(ngModel)]="leaveInfo.leaveType">\n\n      <ion-row>\n\n        <ion-item col-6>\n\n            <ion-label>Casual Leave</ion-label>\n\n            <ion-radio  value="casual"></ion-radio>\n\n        </ion-item>\n\n        \n\n        <ion-item col-6>\n\n          <ion-label>Sick Leave</ion-label>\n\n          <ion-radio value="sick"></ion-radio>\n\n        </ion-item>\n\n      </ion-row>\n\n    \n\n  <ion-row>\n\n    <ion-item col-12>\n\n      <ion-label stacked>Select Dates</ion-label>\n\n      <ion-input  type="readonly" (click)="datePicker(\'multi\') " [(ngModel)]="leaveDates" readonly  ></ion-input>\n\n    </ion-item>\n\n    \n\n  </ion-row>\n\n  <ion-row>\n\n      <ion-col col-6>\n\n    <button ion-button full color="blue" (click)="applyForLeave(leaveInfo)">Submit</button>\n\n  </ion-col>\n\n    <ion-col col-6>\n\n        <button ion-button type="button"  icon-end full color=blue (click)="resetForm()"   >\n\n          Cancel\n\n        </button>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n</ion-list>\n\n\n\n</div>\n\n\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n\n      \n\n      <ion-row>\n\n       <ion-item col-12>\n\n              <button ion-button (click)="datePicker(\'range\')" full color="blue">Open calendar</button>\n\n            </ion-item>\n\n        </ion-row>\n\n    \n\n  \n\n     \n\n  \n\n  \n\n  \n\n      <ion-list>\n\n        <h6 text-center class="title section-title">{{dateRange}}</h6>\n\n         \n\n        <ion-card *ngFor="let x of leaveRecords " class="col-text row-bottom-border" >\n\n                  <ion-card-header>\n\n                  {{x.leaveType}} Leave<br/> \n\n                  \n\n                  </ion-card-header>\n\n                  \n\n                  <ion-card-content  [ngClass]=\'x.status\'>\n\n                      {{x.date}} <br/>\n\n                      {{x.status}} \n\n                      <div *ngIf="(x.reason!=null)">\n\n                      Comments: {{x.reason}}\n\n                    </div>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n\n\n           \n\n        </ion-list>\n\n        \n\n    </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_3__models_leave_model__["a" /* LeaveModel */]])
    ], ApplyLeavePage);
    return ApplyLeavePage;
}()); // end of class

//# sourceMappingURL=apply-leave.js.map

/***/ })

});
//# sourceMappingURL=5.js.map