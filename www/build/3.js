webpackJsonp([3],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeavePageModule", function() { return ApplyLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_leave__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_datepicker__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_leave_model__ = __webpack_require__(769);
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

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(62);
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
        this.leave.date = [];
        this.leave.date2 = [];
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
                _this.leave.date.push(date);
            });
        }
        else if (this.monthNumber.length === 2) {
            selectedDates.forEach(function (date) {
                if ((new Date(date).getMonth() + 1).toString() === _this.monthNumber[0].toString())
                    _this.leave.date.push(date);
                if ((new Date(date).getMonth() + 1).toString() == _this.monthNumber[1].toString())
                    _this.leave.date2.push(date);
            });
        }
        return this.leave;
    };
    LeaveModel.prototype.submitLeaveRequest = function (leaveInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, userName, alert, x;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.afauth.auth.currentUser.uid;
                        return [4 /*yield*/, this.firebase.database.ref("users/" + userId).once('value', function (snap) {
                                console.log(snap.val());
                                userName = snap.child('fname').val() + " " + snap.child('lname').val();
                            })];
                    case 1:
                        _a.sent();
                        this.leave.status = "pending";
                        if (new Date().getHours() < 9) {
                            alert = this.alert.create({
                                title: 'Restricted',
                                subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
                                buttons: ['OK']
                            });
                            alert.present();
                        }
                        else {
                            if (leaveInfo.date2) {
                                x = this.firebase.list("EmployeeLeaves").push({
                                    'name': userName,
                                    'leaveType': leaveInfo.leaveType,
                                    'date': leaveInfo.date,
                                    'status': leaveInfo.status,
                                    'userId': userId
                                    //'count':this.leave.count
                                }).then(function () {
                                    var y = _this.firebase.list("EmployeeLeaves").push({
                                        'name': userName,
                                        'leaveType': leaveInfo.leaveType,
                                        'date': leaveInfo.date2,
                                        'status': leaveInfo.status,
                                        'userId': userId
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
                                    'userId': userId
                                });
                        } //end of if else 
                        return [2 /*return*/];
                }
            });
        });
    }; //end os submit leave request function
    LeaveModel.prototype.getPastLeaves = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            var pastLeaves;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pastLeaves = [];
                        return [4 /*yield*/, this.firebase.database.ref("EmployeeLeaves").orderByChild("userId").equalTo("" + this.afauth.auth.currentUser.uid).once('value', function (snap) {
                                snap.forEach(function (child) {
                                    pastLeaves.push(__assign({ $key: child.key }, child.val()));
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.pastLeaves = pastLeaves.reverse();
                        return [2 /*return*/];
                }
            });
        });
    }; //end of function
    LeaveModel.prototype.getRemainingLeaves = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var remaininingLeaves, count;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remaininingLeaves = [];
                        count = 0;
                        return [4 /*yield*/, this.firebase.database.ref("AvailableLeaves/" + new Date().getFullYear() + "/" + userId).once('value', function (snapshot) {
                                remaininingLeaves.push({ 'casual': snapshot.child('casual').val(),
                                    'sick': snapshot.child('sick').val(), });
                            }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.firebase.database.ref("EmployeeLeaves").orderByChild("userId").equalTo("" + this.afauth.auth.currentUser.uid).once('value', function (snap) {
                                                snap.forEach(function (child) {
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
                                                });
                                                remaininingLeaves.push({ 'currentMonthLeave': count });
                                            })];
                                        case 1:
                                            _a.sent();
                                            console.log(remaininingLeaves);
                                            return [2 /*return*/, Promise.resolve(remaininingLeaves)];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c;
    LeaveModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]) === "function" && _c || Object])
    ], LeaveModel);
    return LeaveModel;
}()); // end of class

//# sourceMappingURL=leave.model.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
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
    CustomDatePicker.prototype.datePickerOptions = function (dateLimitTo, disableWeeks) {
        var options = {
            pickMode: 'multi',
            showAdjacentMonthDay: false,
            disableWeeks: disableWeeks,
            from: new Date(),
            to: dateLimitTo
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

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_leave_model__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_datepicker__ = __webpack_require__(770);
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
    function ApplyLeavePage(afauth, navCtrl, navParams, modalCtrl, customDatePicker, userLeave) {
        this.afauth = afauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.customDatePicker = customDatePicker;
        this.userLeave = userLeave;
        this.leaveCount = {};
        this.months = this.customDatePicker.getMonths();
        this.leaveDates = [];
        this.ionSegmentDefaultValue = "applyLeave";
        this.remaining();
    }
    ApplyLeavePage.prototype.ionViewDidLoad = function () {
    };
    ApplyLeavePage.prototype.datePicker = function () {
        var _this = this;
        var dateLimit = new Date().setDate(new Date().getDate() + 45); // Display  45 days from today
        var disableWeek = [0, 6]; // disable Sunday-0 and Saturday-6
        var options = this.customDatePicker.datePickerOptions(dateLimit, disableWeek);
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options,
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date) {
            date.sort(function (a, b) {
                return a.time - b.time;
            });
            _this.userLeave.arrangeDates(date);
        }); //end of displayCalendar function
    }; // end of datepicker function
    ApplyLeavePage.prototype.applyForLeave = function (leaveDates) {
        this.userLeave.submitLeaveRequest(leaveDates);
    };
    ApplyLeavePage.prototype.pastLeave = function () {
        this.userLeave.getPastLeaves();
    };
    ApplyLeavePage.prototype.remaining = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userLeave.getRemainingLeaves(this.afauth.auth.currentUser.uid).then(function (x) { return console.log(x); })];
                    case 1:
                        x = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c, _d, _e, _f;
    ApplyLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-leave',template:/*ion-inline-start:"D:\IdeaElan\src\pages\apply-leave\apply-leave.html"*/'<!--\n\n  Generated template for the ApplyLeavePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>Leaves</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n    \n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  \n\n  \n\n    <ion-segment [(ngModel)]="ionSegmentDefaultValue" color="white" >\n\n        <ion-segment-button value="applyLeave">\n\n           Apply Leave\n\n        </ion-segment-button>\n\n        <ion-segment-button value="leaveHistory" >\n\n          History\n\n        </ion-segment-button>\n\n     </ion-segment>\n\n\n\n\n\n<div [ngSwitch]="ionSegmentDefaultValue">\n\n  <div *ngSwitchCase="\'applyLeave\'">\n\n    \n\n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n         <ion-row (click)="remaining()">\n\n            <ion-col col-6>This month leaves</ion-col>\n\n            <ion-col col-6>Remaining Leaves</ion-col>\n\n         </ion-row>\n\n         \n\n        <ion-row >\n\n           <ion-col col-6>{{leaveCount.currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{leaveCount.casualRemaining}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{leaveCount.sickRemaining}}</ion-col>\n\n         </ion-row>\n\n         \n\n      </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card hidden>\n\n      <ion-card-header>\n\n          Recent Requests\n\n        </ion-card-header>\n\n    <ion-card-content>\n\n      \n\n      <ion-row >\n\n         <ion-col col-4>Date</ion-col><ion-col col-4>Leave Type</ion-col><ion-col col-4>Status</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-4>25/05/2018</ion-col><ion-col col-4>Sick</ion-col><ion-col col-4>Pending</ion-col>\n\n       </ion-row>\n\n       \n\n    </ion-card-content>\n\n</ion-card>\n\n <!-- <h6 text-center class="title section-title">Leave Details</h6>\n\n    <ion-list radio-group [(ngModel)]="leave.leaveType">\n\n      <ion-row>\n\n        <ion-item col-6>\n\n            <ion-label>Casual Leave</ion-label>\n\n            <ion-radio  value="casual"></ion-radio>\n\n        </ion-item>\n\n        \n\n        <ion-item col-6>\n\n          <ion-label>Sick Leave</ion-label>\n\n          <ion-radio value="sick"></ion-radio>\n\n        </ion-item>\n\n      </ion-row>\n\n    \n\n  <ion-row>\n\n    <ion-item col-12>\n\n      <ion-label stacked>Select Dates</ion-label>\n\n      <ion-input  type="text" (click)="datePicker() " [(ngModel)]="userLeave.leave.date"  ></ion-input>\n\n    </ion-item>\n\n    \n\n  </ion-row>\n\n  <ion-row>\n\n    <button ion-button full color="blue" (click)="applyForLeave()">Submit</button>\n\n  </ion-row>\n\n</ion-list>\n\n\n\n</div>\n\n\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n\n      \n\n      <ion-item>\n\n          <ion-label>Calendar</ion-label>\n\n      <ion-select [(ngModel)]="tony">\n\n    \n\n    <ion-option *ngFor="let x of months" value="{{x.value}}">{{x.monthName}}</ion-option>\n\n    </ion-select>\n\n    <ion-select [(ngModel)]="months.year" [hidden]=showYear (ionChange)="getPastLeaves(months.month,months.year)">\n\n        \n\n        <ion-option value="2019">2019</ion-option>\n\n     </ion-select>\n\n\n\n     \n\n  </ion-item>\n\n  \n\n  \n\n      <ion-list>\n\n        <h6 text-center class="title section-title">Recent Request</h6>\n\n         \n\n        \n\n        <ion-item>\n\n              <ion-row class="table-title" >\n\n                <ion-col col-3 >Leave Type</ion-col>\n\n                <ion-col col-7 >Date</ion-col>\n\n                <ion-col col-2 >Status</ion-col>\n\n                <ion-col hidden col-2>View</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-row *ngFor="let x of pastLeaves" class="col-text row-bottom-border" [ngClass]=\'x.status\'>\n\n                  <ion-col col-3>{{x.leaveType}}</ion-col><ion-col col-7 text-wrap>{{x.date}}</ion-col><ion-col col-2>{{x.status}}</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n        </ion-list>\n\n        -->\n\n    </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IdeaElan\src\pages\apply-leave\apply-leave.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__models_datepicker__["a" /* CustomDatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_datepicker__["a" /* CustomDatePicker */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__models_leave_model__["a" /* LeaveModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_leave_model__["a" /* LeaveModel */]) === "function" && _f || Object])
    ], ApplyLeavePage);
    return ApplyLeavePage;
}()); // end of class

//# sourceMappingURL=apply-leave.js.map

/***/ })

});
//# sourceMappingURL=3.js.map