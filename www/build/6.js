webpackJsonp([6],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeavePageModule", function() { return ApplyLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apply_leave__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_datepicker__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_leave_model__ = __webpack_require__(768);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__apply_leave__["a" /* ApplyLeavePage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_5__models_leave_model__["a" /* LeaveModel */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__apply_leave__["a" /* ApplyLeavePage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ApplyLeavePageModule);
    return ApplyLeavePageModule;
}());

//# sourceMappingURL=apply-leave.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
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
        this.t = 5;
    }
    CustomDatePicker.prototype.datePickerOptions = function (pickMode, defaultScrollTo, from, dateLimitTo, disableWeeks) {
        var options = {
            pickMode: pickMode,
            showAdjacentMonthDay: false,
            disableWeeks: disableWeeks,
            from: from,
            to: dateLimitTo,
            defaultScrollTo: defaultScrollTo,
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

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
    function LeaveModel(loadingCtrl, afauth, firebase, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.afauth = afauth;
        this.firebase = firebase;
        this.alertCtrl = alertCtrl;
        this.leave = {};
        this.leaveCount = {};
        this.pastLeaves = [];
    }
    LeaveModel.prototype.arrangeDates = function (date) {
        var _this = this;
        var selectedDates = [];
        var date1 = [];
        var date2 = [];
        this.monthNumber = [];
        date.forEach(function (values) {
            selectedDates.push(__WEBPACK_IMPORTED_MODULE_4_moment__(values.time).format('D-MMM-YYYY')); // Converting the time property returned from date pikcer to  dates .
            //selectedDates.push(new Date(values.time).toLocaleDateString())// Converting the time property returned from date pikcer to  dates .
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
                if (__WEBPACK_IMPORTED_MODULE_4_moment__(date).format('M') === _this.monthNumber[0].toString())
                    date1.push(date);
                if (__WEBPACK_IMPORTED_MODULE_4_moment__(date).format('M') === _this.monthNumber[1].toString())
                    date2.push(date);
            });
        }
        return ({ date1: date1, date2: date2 });
    };
    LeaveModel.prototype.submitLeaveRequest = function (leaveInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var userName, leaveExists, leaveExistDate, canTakeCasual, canTakeSick, alert_1, alert_2, alert_3, alert_4, x, alert_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = this.loadingCtrl.create({
                            spinner: 'dots',
                            content: 'Loading',
                            dismissOnPageChange: true
                        });
                        this.loader.present();
                        leaveExists = false;
                        leaveExistDate = [];
                        canTakeCasual = 0;
                        canTakeSick = 0;
                        return [4 /*yield*/, this.firebase.database.ref("AvailableLeaves/" + __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY') + "/" + leaveInfo.userId).once('value', function (snap) {
                                canTakeCasual = snap.child('casual').val();
                                canTakeSick = snap.child('sick').val();
                            })];
                    case 1:
                        _a.sent();
                        if (!(leaveInfo.leaveType == "sick" && canTakeSick < 1)) return [3 /*break*/, 2];
                        alert_1 = this.alertCtrl.create({
                            title: "Error",
                            subTitle: "Could not process your request. You do not have any available sick leaves.",
                            buttons: ['OK']
                        });
                        alert_1.present();
                        this.loader.dismiss();
                        return [2 /*return*/];
                    case 2:
                        if (!(leaveInfo.leaveType == "casual" && canTakeCasual < 1)) return [3 /*break*/, 3];
                        alert_2 = this.alertCtrl.create({
                            title: "Error",
                            subTitle: "Could not process your request. You do not have any available casual leaves.",
                            buttons: ['OK']
                        });
                        alert_2.present();
                        this.loader.dismiss();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.firebase.database.ref("EmployeeLeaves").orderByChild("userId").equalTo("" + leaveInfo.userId).once('value', function (snap) {
                            snap.forEach(function (child) {
                                child.child('date').val().forEach(function (val) {
                                    if (leaveInfo.date2) {
                                        if ((leaveInfo.date.find(function (date) { return date == val; }) || leaveInfo.date2.find(function (date) { return date == val; })) && !leaveExists) {
                                            leaveExists = true;
                                            leaveExistDate.push(val);
                                        }
                                    }
                                    else {
                                        if (leaveInfo.date.find(function (date) { return date == val; }) && !leaveExists) {
                                            leaveExists = true;
                                            leaveExistDate.push(val);
                                        }
                                    }
                                });
                            });
                        })];
                    case 4:
                        _a.sent();
                        if (!leaveExists) return [3 /*break*/, 5];
                        alert_3 = this.alertCtrl.create({
                            title: "Error",
                            subTitle: "Could not process your request. Leave record already exists on " + leaveExistDate + ".",
                            buttons: ['OK']
                        });
                        alert_3.present();
                        this.loader.dismiss();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.firebase.database.ref("users/" + leaveInfo.userId).once('value', function (snap) {
                            userName = snap.child('fname').val() + " " + snap.child('lname').val();
                        })
                        //this.leave.status="pending";
                    ];
                    case 6:
                        _a.sent();
                        //this.leave.status="pending";
                        if (__WEBPACK_IMPORTED_MODULE_4_moment__().hour() >= 9 && leaveInfo.date.find(function (date) { return date === __WEBPACK_IMPORTED_MODULE_4_moment__().format('D-MMM-YYYY'); })) {
                            alert_4 = this.alertCtrl.create({
                                title: 'Restricted',
                                subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
                                buttons: ['OK']
                            });
                            alert_4.present();
                            this.loader.dismiss();
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
                                    var alert = _this.alertCtrl.create({
                                        title: "Success",
                                        subTitle: "Leave applied successfully ",
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                    _this.loader.dismiss();
                                }) //inserting the details of leaves
                                ;
                            }
                            else {
                                this.firebase.list("EmployeeLeaves").push({
                                    'name': userName,
                                    'leaveType': leaveInfo.leaveType,
                                    'date': leaveInfo.date,
                                    'status': leaveInfo.status,
                                    'userId': leaveInfo.userId
                                });
                                alert_5 = this.alertCtrl.create({
                                    title: "Success",
                                    subTitle: "Leave applied successfully ",
                                    buttons: ['OK']
                                });
                                alert_5.present();
                                this.loader.dismiss();
                            }
                        } //end of if else 
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    }; //end os submit leave request function
    LeaveModel.prototype.getPastLeaves = function (userId, dateFrom, dateTo) {
        this.loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
        });
        this.loader.present();
        var pastLeaves = [];
        var flag = false;
        this.firebase.database.ref("EmployeeLeaves").orderByChild("userId").equalTo("" + userId).once('value', function (snap) {
            if (dateFrom != null && dateTo != null) {
                dateFrom = __WEBPACK_IMPORTED_MODULE_4_moment__(dateFrom).format('x');
                dateTo = __WEBPACK_IMPORTED_MODULE_4_moment__(dateTo).format('x');
                snap.forEach(function (child) {
                    if (child.child('date').val().length > 1) {
                        child.child('date').forEach(function (data) {
                            if (new Date(data.val()).getTime() >= dateFrom && new Date(data.val()).getTime() <= dateTo)
                                flag = true;
                            else
                                flag = false;
                        });
                        if (flag)
                            pastLeaves.push(__assign({ $recKey: child.key }, child.val()));
                    }
                    else {
                        if (new Date(child.child('date').val()).getTime() >= dateFrom && new Date(child.child('date').val()).getTime() <= dateTo)
                            pastLeaves.push(__assign({ $recKey: child.key }, child.val()));
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
                            pastLeaves.push(__assign({ $recKey: child.key }, child.val()));
                    }
                    else {
                        if (new Date(child.child('date').val()).getMonth() + 1 === new Date().getMonth() + 1 && new Date(child.child('date').val()).getFullYear() === new Date().getFullYear())
                            pastLeaves.push(__assign({ $recKey: child.key }, child.val()));
                    }
                });
            }
        }); //end of database ref
        this.loader.dismiss();
        return this.pastLeaves = pastLeaves.reverse();
    }; //end of function
    LeaveModel.prototype.getRemainingLeaves = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var remaininingLeaves, count, casual, sick;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader1 = this.loadingCtrl.create({
                            spinner: 'dots',
                            content: 'Loading',
                        });
                        this.loader1.present();
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
                        this.loader1.dismiss();
                        return [2 /*return*/, (remaininingLeaves)];
                }
            });
        });
    };
    LeaveModel.prototype.viewLeaveRequest = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
            dismissOnPageChange: true
        });
        this.loader.present();
        var leaveRequests = [];
        this.firebase.database.ref("EmployeeLeaves").orderByChild('status').equalTo('pending').on("value", function (snap) {
            snap.forEach(function (child) {
                leaveRequests.push(__assign({ $key: child.key }, child.val()));
            });
        });
        this.loader.dismiss();
        return leaveRequests.reverse();
    };
    LeaveModel.prototype.saveLeaveStatus = function (data, leaveCount, status, reason) {
        var _this = this;
        if (status == "approved") {
            var count_1;
            if (data.leaveType == "casual")
                count_1 = leaveCount.casualRemaining - data.date.length;
            else
                count_1 = leaveCount.sickRemaining - data.date.length;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]])
    ], LeaveModel);
    return LeaveModel;
}()); // end of class

//# sourceMappingURL=leave.model.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_date_picker__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_leave_model__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_datepicker__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ApplyLeavePage = /** @class */ (function () {
    function ApplyLeavePage(nativeDatePicker, alertCtrl, formBuilder, afauth, navCtrl, navParams, modalCtrl, customDatePicker, userLeave, firebase) {
        //this.getRemainingLeave()
        this.nativeDatePicker = nativeDatePicker;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.afauth = afauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.customDatePicker = customDatePicker;
        this.userLeave = userLeave;
        this.firebase = firebase;
        this.leaveCount = {};
        this.leaveInfo = {};
        this.dateRange = "This Month Leave";
        this.months = this.customDatePicker.getMonths();
        this.leaveForm = this.formBuilder.group({
            leaveType: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].requiredTrue],
            date: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required],
        });
        this.leaveErr = true;
        this.dateErr = true;
    }
    ApplyLeavePage.prototype.ionViewDidEnter = function () {
        this.ionSegmentDefaultValue = "applyLeave";
        //this.getRemainingLeave()
        this.viewRemainingLeaves();
    };
    ApplyLeavePage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
        this.resetForm();
    };
    /*getRemainingLeave(){
      
      
      this.viewRemainingLeaves()

    }*/
    ApplyLeavePage.prototype.resetForm = function () {
        this.leaveForm.reset();
        this.leaveErr = true;
        this.dateErr = true;
    };
    ApplyLeavePage.prototype.datePicker = function (pickMode) {
        var _this = this;
        var dateLimit = __WEBPACK_IMPORTED_MODULE_9_moment__().add(45, 'days'); // Display  45 days from today
        var defaultScrollTo = __WEBPACK_IMPORTED_MODULE_9_moment__(); // scroll to curren date
        var disableWeek = [0, 6]; // disable Sunday-0 and Saturday-6
        if (pickMode == 'multi') { // Select multiple dates fron date picker
            var from = __WEBPACK_IMPORTED_MODULE_9_moment__(); // current date selected in date picker
            var options = this.customDatePicker.datePickerOptions(pickMode, defaultScrollTo, from, dateLimit, disableWeek);
        }
        else { // for selecting range of dates
            var from = __WEBPACK_IMPORTED_MODULE_9_moment__('1/2/2018', 'D/M/YYYY'); // default starting date is set to Feb 2018
            var options = this.customDatePicker.datePickerOptions(pickMode, defaultScrollTo, from);
        }
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModal"], {
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
                    _this.leaveDates = selectedDates.date1 + "," + selectedDates.date2; // header display
                    _this.leaveInfo.date = selectedDates.date1;
                    if (selectedDates.date2.length > 0)
                        _this.leaveInfo.date2 = selectedDates.date2;
                }
                else {
                    var from = __WEBPACK_IMPORTED_MODULE_9_moment__(date['from'].string).format('D/MMM/YYYY');
                    var to = __WEBPACK_IMPORTED_MODULE_9_moment__(date['to'].string).format('D/MMM/YYYY');
                    _this.dateRange = from + " to " + to;
                    _this.leaveHistory(date['from'].time, date['to'].time);
                }
            }
        }); //end of displayCalendar function
    }; // end of datepicker function
    ApplyLeavePage.prototype.dispDate = function (type) {
        var _this = this;
        this.nativeDatePicker.show({
            date: __WEBPACK_IMPORTED_MODULE_9_moment__().toDate(),
            mode: 'date',
            androidTheme: 5,
        }).then(function (date) {
            if (type === "from") {
                _this.dateFrom = __WEBPACK_IMPORTED_MODULE_9_moment__(date).format('D-MMM-YYYY');
            }
            else {
                _this.dateTo = __WEBPACK_IMPORTED_MODULE_9_moment__(date).format('D-MMM-YYYY');
                _this.dateRange = _this.dateFrom + " to " + _this.dateTo;
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    ApplyLeavePage.prototype.applyForLeave = function (leaveInfo) {
        var _this = this;
        leaveInfo.leaveType == null ? this.leaveErr = false : this.leaveErr = true;
        leaveInfo.date == null ? this.dateErr = false : this.dateErr = true;
        if (this.leaveErr && this.dateErr) {
            leaveInfo.userId = this.afauth.auth.currentUser.uid;
            leaveInfo.status = "pending";
            this.userLeave.submitLeaveRequest(leaveInfo).then(function () {
                _this.leaveForm.reset();
            });
        }
    }; //end of apply for leave
    ApplyLeavePage.prototype.getMyLeaves = function () {
        if (this.dateFrom != '' && this.dateTo != '')
            this.leaveHistory(this.dateFrom, this.dateTo);
    };
    ApplyLeavePage.prototype.leaveHistory = function (from, to) {
        this.leaveForm.reset();
        this.leaveRecords = [];
        this.leaveRecords = this.userLeave.getPastLeaves(this.afauth.auth.currentUser.uid, from, to);
    };
    ApplyLeavePage.prototype.viewRemainingLeaves = function () {
        var _this = this;
        this.dateRange = "This Month Leave";
        this.dateFrom = "";
        this.dateTo = "";
        this.leaveRecords = [];
        this.leaveDates = "";
        this.userLeave.getRemainingLeaves(this.afauth.auth.currentUser.uid).then(function (item) {
            _this.leaveCount.sickRemaining = item[0].sick;
            _this.leaveCount.casualRemaining = item[0].casual;
            _this.leaveCount.currentMonthLeave = item[0].currentMonthLeave;
        });
    };
    ApplyLeavePage.prototype.deleteLeave = function ($key) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to cancel this leave request',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebase.database.ref("EmployeeLeaves").child("" + $key).remove();
                        _this.leaveHistory();
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
    ApplyLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-apply-leave',template:/*ion-inline-start:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/'<ion-header no-border>\n\n  <page-header pageTitle="APPLY LEAVE"></page-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  \n\n  \n\n    <ion-segment [(ngModel)]="ionSegmentDefaultValue" color="white" >\n\n        <ion-segment-button value="applyLeave" (click)="viewRemainingLeaves()">\n\n           Apply Leave\n\n        </ion-segment-button>\n\n        <ion-segment-button value="leaveHistory" (click)="leaveHistory()" >\n\n          My Leaves\n\n        </ion-segment-button>\n\n     </ion-segment>\n\n\n\n\n\n<div [ngSwitch]="ionSegmentDefaultValue">\n\n  <div *ngSwitchCase="\'applyLeave\'">\n\n    \n\n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n         <ion-row (click)="remaining()">\n\n            <ion-col col-6>This month leaves</ion-col>\n\n            <ion-col col-6>Remaining Leaves</ion-col>\n\n         </ion-row>\n\n         \n\n        <ion-row >\n\n           <ion-col col-6>{{leaveCount.currentMonthLeave}}</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{leaveCount.casualRemaining}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6></ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{leaveCount.sickRemaining}}</ion-col>\n\n         </ion-row>\n\n         \n\n      </ion-card-content>\n\n  </ion-card>\n\n\n\n  <form [formGroup]="leaveForm"   (ngSubmit)="applyForLeave(leaveInfo)">\n\n  <h6 text-center class="title section-title">Leave Request</h6>\n\n    <ion-list>\n\n      \n\n      <div radio-group [(ngModel)]="leaveInfo.leaveType"  formControlName="leaveType">\n\n          <ion-row>\n\n              <ion-item col-6>\n\n                  <ion-radio  value="casual"></ion-radio>\n\n                  <ion-label>Casual Leave</ion-label>\n\n              </ion-item>\n\n              \n\n              <ion-item col-6>\n\n                  <ion-radio value="sick"></ion-radio>\n\n                <ion-label>Sick Leave</ion-label>\n\n              </ion-item>\n\n\n\n              <ion-item no-lines [hidden]="leaveErr">\n\n                  <ion-label stacked  color="danger" >\n\n                   Leave type is required\n\n                </ion-label>\n\n                </ion-item>\n\n            </ion-row>\n\n       </div>\n\n    \n\n    \n\n  \n\n    <ion-item col-12>\n\n      <ion-label stacked>Select Dates</ion-label>\n\n      <ion-input  type="readonly" (tap)="datePicker(\'multi\') " [(ngModel)]="leaveDates" readonly formControlName="date"  ></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines [hidden]="dateErr">\n\n        <ion-label stacked  color="danger" >\n\n         Leave date is required\n\n      </ion-label>\n\n      </ion-item>\n\n    \n\n  \n\n  <ion-row>\n\n      <ion-col col-6>\n\n    <button ion-button full color="blue" type="submit" >Submit</button>\n\n  </ion-col>\n\n    <ion-col col-6>\n\n        <button ion-button type="reset"  icon-end full color=blue (click)="resetForm()" >\n\n          Cancel\n\n        </button>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n</ion-list>\n\n</form>\n\n</div>\n\n\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n\n      \n\n      <ion-row>\n\n       <ion-item col-6>\n\n              <ion-label floating>From Date</ion-label>\n\n              <ion-input readonly (tap)="dispDate(\'from\')" [(ngModel)]="dateFrom" full color="blue"></ion-input>\n\n              <ion-icon name="calendar" item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item col-6>\n\n              <ion-label floating>To Date</ion-label>\n\n              <ion-input readonly (tap)="dispDate(\'to\')" [(ngModel)]="dateTo" full color="blue"></ion-input>\n\n              <ion-icon name="calendar" item-right></ion-icon>\n\n            </ion-item>\n\n        </ion-row>\n\n        <ion-item>\n\n          <button ion-button (click)="getMyLeaves()" color="blue">Show</button>\n\n        </ion-item>\n\n    \n\n  <ion-list>\n\n        <h6 text-center class="title section-title">{{dateRange}}</h6>\n\n        \n\n        <ion-list >\n\n            <div *ngIf="(leaveRecords.length==0)">No Record Found</div>\n\n          <ion-item *ngFor="let x of leaveRecords" style="background-color:honeydew">\n\n            <h3>{{x.leaveType | titlecase}} Leave</h3>\n\n            <h5 *ngFor="let date of x.date" > {{date}}</h5>\n\n            <h5 [ngClass]=\'x.status\'>{{x.status}}</h5>\n\n            <div *ngIf="x.reason!=null && x.reason!=\'\' ">\n\n                Comments: {{x.reason}}\n\n              </div>\n\n              \n\n              <button *ngIf="(x.status==\'pending\')" ion-button item-right color="blue" (click)="deleteLeave(x.$recKey)">Cancel</button>\n\n                \n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        \n\n\n\n           \n\n        </ion-list>\n\n        \n\n    </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_5__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_4__models_leave_model__["a" /* LeaveModel */], __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ApplyLeavePage);
    return ApplyLeavePage;
}()); // end of class

//# sourceMappingURL=apply-leave.js.map

/***/ })

});
//# sourceMappingURL=6.js.map