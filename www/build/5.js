webpackJsonp([5],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveLeavePageModule", function() { return ApproveLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_leave_model__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_datepicker__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approve_leave__ = __webpack_require__(816);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__approve_leave__["a" /* ApproveLeavePage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_0__models_leave_model__["a" /* LeaveModel */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__approve_leave__["a" /* ApproveLeavePage */]),
            ],
        })
    ], ApproveLeavePageModule);
    return ApproveLeavePageModule;
}());

//# sourceMappingURL=approve-leave.module.js.map

/***/ }),

/***/ 739:
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

/***/ 740:
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

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_leave_model__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_datepicker__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(63);
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
    function ApproveLeavePage(modalCtrl, userLeave, datepicker, alertCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.userLeave = userLeave;
        this.datepicker = datepicker;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.leaveCount = {};
        this.months = this.datepicker.getMonths();
        this.userLeaveDetails = this.navParams.get('userDetails');
        this.userRemainingLeaves(this.userLeaveDetails.userId);
        this.leaveRecords = this.userLeave.getPastLeaves(this.userLeaveDetails.userId);
    }
    ApproveLeavePage.prototype.datePicker = function (pickMode) {
        var _this = this;
        var defaultScrollTo = new Date();
        var from = new Date('2/1/2018');
        var options = this.datepicker.datePickerOptions(pickMode, defaultScrollTo, from);
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options,
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date) {
            var from = date['from'].string.split('-');
            var to = date['to'].string.split('-');
            _this.from = date['from'].time;
            _this.to = date['to'].time;
            _this.dateRange = from[2] + "-" + from[1] + "-" + from[0] + " to " + to[2] + "-" + to[1] + "-" + to[0];
        });
    }; // end of datepicker function
    ApproveLeavePage.prototype.userRemainingLeaves = function (userId) {
        var _this = this;
        {
            this.userLeave.getRemainingLeaves(userId).then(function (item) {
                _this.leaveCount.sickRemaining = item[0].sick;
                _this.leaveCount.casualRemaining = item[0].casual;
                _this.leaveCount.currentMonthLeave = item[0].currentMonthLeave;
            });
        }
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
                        _this.userLeave.saveLeaveStatus(data, _this.leaveCount, status);
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
                        _this.userLeave.saveLeaveStatus(data, _this.leaveCount, status, reject.reason);
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
    ApproveLeavePage.prototype.leaveHistory = function () {
        if (this.userLeaveDetails.userId === null)
            alert("Select and Employee");
        else {
            this.leaveRecords = this.userLeave.getPastLeaves(this.userLeaveDetails.userId, this.from, this.to);
            console.log(this.leaveRecords);
        }
    };
    ApproveLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-approve-leave',template:/*ion-inline-start:"D:\IdeaElan\src\pages\approve-leave\approve-leave.html"*/'<ion-header no-border>\n\n    <ion-toolbar color="blue" >\n\n      <button ion-button  menuToggle="left" start>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      \n\n      <ion-title text-center>Approve Leaves</ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button >\n\n          <ion-icon name="notifications"></ion-icon> \n\n        </button> \n\n      </ion-buttons>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/companylogo.png">\n\n          </ion-avatar>\n\n          <h2>{{userLeaveDetails.name}}</h2>\n\n          <p>Leave Type:{{userLeaveDetails.leaveType}}</p>\n\n          <p>Date: [ {{userLeaveDetails.date}}]</p>\n\n        </ion-item>\n\n        <ion-row>\n\n            <ion-col col-6>This month leaves</ion-col>\n\n            <ion-col col-6>Remaining Leaves</ion-col>\n\n         </ion-row>\n\n         \n\n        <ion-row >\n\n           <ion-col col-6>{{leaveCount.currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{leaveCount.casualRemaining}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{leaveCount.sickRemaining}}</ion-col>\n\n         </ion-row>\n\n \n\n         <ion-row>\n\n           <ion-col col-6><button ion-button color="secondary" (click)="showConfirm(userLeaveDetails,\'approved\')"  >Approve</button></ion-col>\n\n           <ion-col col-6><button ion-button color="danger" (click)="rejectConfirm(userLeaveDetails,\'rejected\')" >Reject</button></ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n\n\n    \n\n    \n\n      \n\n  <ion-card>\n\n      <ion-list>\n\n        <h6 text-center class="title section-title">Past Leaves</h6>\n\n        <ion-item col-12>\n\n          <ion-label floating>Select Date</ion-label>\n\n          <ion-input type="text" [(ngModel)]="dateRange" (click)="datePicker(\'range\')" readonly></ion-input>\n\n          <ion-icon name="calendar" item-right></ion-icon>\n\n        </ion-item>\n\n\n\n        <ion-item center>\n\n          <button ion-button (click)="leaveHistory()" color="blue" >Show</button>\n\n        </ion-item>\n\n\n\n        <ion-card *ngFor="let x of leaveRecords " class="col-text row-bottom-border" >\n\n          <ion-card-header>\n\n          {{x.leaveType}} Leave<br/> \n\n          \n\n          </ion-card-header>\n\n          \n\n          <ion-card-content  [ngClass]=\'x.status\'>\n\n              {{x.date}} <br/>\n\n              {{x.status}} \n\n              <div *ngIf="(x.reason!=null)">\n\n              Comments: {{x.reason}}\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        \n\n        \n\n        <!--<ion-item>\n\n              <ion-row class="table-title" >\n\n                <ion-col col-3 >Leave Type</ion-col>\n\n                <ion-col col-7 >Date</ion-col>\n\n                <ion-col col-2 >Status</ion-col>\n\n                <ion-col hidden col-2>View</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-row *ngFor="let x of leaveRecords" class="col-text row-bottom-border" [ngClass]=\'x.status\'>\n\n                  <ion-col col-3>{{x.leaveType}}</ion-col><ion-col col-7 text-wrap>{{x.date}}</ion-col><ion-col col-2>{{x.status}}</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n          -->\n\n        </ion-list>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IdeaElan\src\pages\approve-leave\approve-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__models_leave_model__["a" /* LeaveModel */], __WEBPACK_IMPORTED_MODULE_1__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], ApproveLeavePage);
    return ApproveLeavePage;
}());

//# sourceMappingURL=approve-leave.js.map

/***/ })

});
//# sourceMappingURL=5.js.map