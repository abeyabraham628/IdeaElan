webpackJsonp([32],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesAdminPageModule", function() { return LeavesAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_employee_model__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaves_admin__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_leave_model__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_datepicker__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LeavesAdminPageModule = /** @class */ (function () {
    function LeavesAdminPageModule() {
    }
    LeavesAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__leaves_admin__["a" /* LeavesAdminPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__models_leave_model__["a" /* LeaveModel */], __WEBPACK_IMPORTED_MODULE_6__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_1__models_employee_model__["a" /* Employee */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__leaves_admin__["a" /* LeavesAdminPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LeavesAdminPageModule);
    return LeavesAdminPageModule;
}());

//# sourceMappingURL=leaves-admin.module.js.map

/***/ }),

/***/ 763:
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

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(112);
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

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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



var Employee = /** @class */ (function () {
    function Employee(afauth, firebase) {
        this.afauth = afauth;
        this.firebase = firebase;
    }
    Employee.prototype.getEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employeeDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        employeeDetails = [];
                        return [4 /*yield*/, this.firebase.database.ref("users").once('value', function (snap) {
                                snap.forEach(function (child) {
                                    employeeDetails.push(__assign({ $key: child.key }, child.val()));
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, employeeDetails];
                }
            });
        });
    };
    Employee = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], Employee);
    return Employee;
}());

//# sourceMappingURL=employee.model.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_date_picker__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_datepicker__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_leave_model__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_employee_model__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
 * Generated class for the LeavesAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavesAdminPage = /** @class */ (function () {
    function LeavesAdminPage(nativeDatePicker, navCtrl, userLeave, modalCtrl, navParams, empDetails, customDatePicker) {
        this.nativeDatePicker = nativeDatePicker;
        this.navCtrl = navCtrl;
        this.userLeave = userLeave;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.empDetails = empDetails;
        this.customDatePicker = customDatePicker;
        this.dateRange = "Select Date";
        this.leaveRecords = [];
        this.waitForPop = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"](true);
        this.leaves = 'viewLeaveRequests';
        this.viewLeaveRequests();
    }
    LeavesAdminPage.prototype.viewLeaveRequests = function () {
        this.resetFields();
        this.leaveRequests = this.userLeave.viewLeaveRequest();
    };
    LeavesAdminPage.prototype.resetFields = function () {
        this.leaveRecords = [];
        this.dateRange = "";
        this.employeeKey = "";
    };
    LeavesAdminPage.prototype.clearDatePicker = function () {
        this.dateRange = "";
    };
    LeavesAdminPage.prototype.datePicker = function (pickMode) {
        var _this = this;
        var defaultScrollTo = new Date();
        var from = __WEBPACK_IMPORTED_MODULE_8_moment__('1/2/2018', 'D/M/YYYY');
        var options = this.customDatePicker.datePickerOptions(pickMode, defaultScrollTo, from);
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModal"], {
            options: options,
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date) {
            if (date != null && _this.employeeKey != "") {
                var from_1 = __WEBPACK_IMPORTED_MODULE_8_moment__(date['from'].string).format('D/MMM/YYYY');
                var to = __WEBPACK_IMPORTED_MODULE_8_moment__(date['to'].string).format('D/MMM/YYYY');
                _this.dateRange = from_1 + " to " + to;
                _this.leaveHistory(date['from'].time, date['to'].time);
            }
        });
    }; // end of datepicker function
    LeavesAdminPage.prototype.dispDate = function (type) {
        var _this = this;
        this.nativeDatePicker.show({
            date: __WEBPACK_IMPORTED_MODULE_8_moment__().toDate(),
            mode: 'date',
            androidTheme: 5,
        }).then(function (date) {
            if (type === "from") {
                _this.dateFrom = __WEBPACK_IMPORTED_MODULE_8_moment__(date).format('D-MMM-YYYY');
            }
            else {
                _this.dateTo = __WEBPACK_IMPORTED_MODULE_8_moment__(date).format('D-MMM-YYYY');
                _this.dateRange = _this.dateFrom + " to " + _this.dateTo;
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    LeavesAdminPage.prototype.goto = function (page, data) {
        this.waitForPop.next(false);
        this.navCtrl.push(page, { "userDetails": data });
    };
    LeavesAdminPage.prototype.ionViewDidLeave = function () {
        var _this = this;
        this.waitForPop.subscribe(function (ok) {
            if (ok) {
                _this.navCtrl.popToRoot();
            }
        });
    };
    LeavesAdminPage.prototype.getEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.employeeName = [];
                this.empDetails.getEmployee().then(function (item) {
                    item.forEach(function (value) {
                        _this.employeeName.push(value);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    LeavesAdminPage.prototype.leaveHistory = function (from, to) {
        if (this.employeeKey != "")
            this.leaveRecords = this.userLeave.getPastLeaves(this.employeeKey, from, to);
    };
    LeavesAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-leaves-admin',template:/*ion-inline-start:"D:\IdeaElan\src\pages\leaves-admin\leaves-admin.html"*/'<!--Tony Manuel-->\n\n<ion-header no-border>\n\n  <navbar pageTitle="LEAVE REQUESTS"></navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content>\n\n\n\n      <ion-segment [(ngModel)]="leaves" color="white" >\n\n         <ion-segment-button value="viewLeaveRequests" (click)="viewLeaveRequests()">\n\n            Leave Requests\n\n         </ion-segment-button>\n\n         <ion-segment-button value="leaveHistory" (click)="getEmployee()" >\n\n          History\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="leaves">\n\n    <div *ngSwitchCase="\'viewLeaveRequests\'">\n\n    \n\n        \n\n        <div *ngIf="(leaveRequests.length==0)" style="text-align:center">No Leave Requests</div>\n\n      <ion-card (click)="goto(\'ApproveLeavePage\',user)" *ngFor="let user of leaveRequests">\n\n         \n\n        <ion-item>\n\n          <!-- <ion-avatar item-start>\n\n              <img src="https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/{{user.userId}}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b" onerror="this.src=\'assets/imgs/companylogo.png\'"> \n\n           <img src="assets/imgs/companylogo.png">\n\n          </ion-avatar>-->\n\n          <h2>{{user.name |  titlecase}}</h2>\n\n          <p>{{user.leaveType | titlecase}}</p>\n\n          <p *ngFor="let x of user.date">{{x}}</p>\n\n        </ion-item>\n\n        \n\n        \n\n      </ion-card>\n\n    \n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n\n       \n\n      <ion-item>\n\n          <ion-label>Employee Name</ion-label>\n\n        <ion-select [(ngModel)]="employeeKey" (ionChange)="clearDatePicker()">\n\n                 <ion-option *ngFor="let emp of employeeName" value="{{emp.$key}}">{{emp.fname | titlecase}} {{emp.lname | titlecase}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-row>\n\n        <ion-item col-6>\n\n               <ion-label floating>From Date</ion-label>\n\n               <ion-input readonly (tap)="dispDate(\'from\')" [(ngModel)]="dateFrom" full color="blue"></ion-input>\n\n               <ion-icon name="calendar" item-right></ion-icon>\n\n             </ion-item>\n\n             <ion-item col-6>\n\n               <ion-label floating>To Date</ion-label>\n\n               <ion-input readonly (tap)="dispDate(\'to\')" [(ngModel)]="dateTo" full color="blue"></ion-input>\n\n               <ion-icon name="calendar" item-right></ion-icon>\n\n             </ion-item>\n\n         </ion-row>\n\n         <ion-item>\n\n           <button ion-button (click)="leaveHistory(dateFrom,dateTo)" color="blue">Show</button>\n\n         </ion-item>\n\n              \n\n           \n\n      \n\n\n\n      \n\n      <ion-list>\n\n        \n\n          <h6 text-center class="title section-title">{{dateRange}}</h6>\n\n          <div *ngIf="(leaveRecords.length==0)" style="text-align:center">No record found</div>\n\n          <ion-list >\n\n            <ion-item *ngFor="let x of leaveRecords" style="background-color:honeydew">\n\n              <h3>{{x.leaveType | titlecase}} Leave</h3>\n\n              <h5 *ngFor="let date of x.date" > {{date}}</h5>\n\n              <h5 [ngClass]=\'x.status\'>{{x.status}}</h5>\n\n              <div *ngIf="x.reason!=null && x.reason!=\'\' ">\n\n                  Comments: {{x.reason}}\n\n                </div>\n\n                \n\n            </ion-item>\n\n          </ion-list>\n\n  \n\n             \n\n          </ion-list>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"D:\IdeaElan\src\pages\leaves-admin\leaves-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__models_leave_model__["a" /* LeaveModel */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__models_employee_model__["a" /* Employee */], __WEBPACK_IMPORTED_MODULE_1__models_datepicker__["a" /* CustomDatePicker */]])
    ], LeavesAdminPage);
    return LeavesAdminPage;
}());

//# sourceMappingURL=leaves-admin.js.map

/***/ })

});
//# sourceMappingURL=32.js.map