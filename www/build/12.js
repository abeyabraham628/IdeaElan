webpackJsonp([12],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeavePageModule", function() { return ApplyLeavePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_leave__ = __webpack_require__(676);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_leave__["a" /* ApplyLeavePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_leave__["a" /* ApplyLeavePage */]),
            ],
        })
    ], ApplyLeavePageModule);
    return ApplyLeavePageModule;
}());

//# sourceMappingURL=apply-leave.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(329);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function ApplyLeavePage(navCtrl, navParams, datePicker, firebase, datepipe, afauth, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.datepipe = datepipe;
        this.afauth = afauth;
        this.alert = alert;
        this.leave = {};
    }
    ApplyLeavePage.prototype.ionViewDidLoad = function () {
        this.getRamainingLeaves();
    };
    ApplyLeavePage.prototype.dispdate = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type === "from") {
                _this.leave.dateFrom = new Date(date).toLocaleDateString();
            }
            else {
                _this.leave.dateTo = new Date(date).toLocaleDateString();
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    }; //end of date function
    ApplyLeavePage.prototype.submitLeaveRequest = function () {
        var uid = this.afauth.auth.currentUser.uid;
        this.leave.status = "pending";
        if (new Date().getHours() > 9) {
            var alert = this.alert.create({
                title: 'Restricted',
                subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            var result = [];
            var firebase = this.firebase;
            firebase.database.ref("EmployeeLeaves/" + uid + "/AvailableLeaves").once("value", function (snapshot) {
                if (snapshot.val() == null) {
                    firebase.database.ref("Leaves").on("value", function (snapshot) {
                        firebase.object("EmployeeLeaves/" + uid + "/AvailableLeaves").set(snapshot.val());
                    });
                }
                snapshot.forEach(function (childSnapshot) {
                    result = __assign({ $key: childSnapshot.key }, childSnapshot.val());
                    return false;
                }); //end of snap for each
            }); //end of database.ref
            firebase.list("EmployeeLeaves/" + uid + "/Leaves").push(this.leave);
        } //end of if else 
    }; //end os submit leave request function
    ApplyLeavePage.prototype.getPastLeaves = function () {
        var _this = this;
        this.firebase.list("EmployeeLeaves/" + this.afauth.auth.currentUser.uid + "/Leaves").snapshotChanges().subscribe(function (list) {
            _this.pastLeaves = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    }; //end of function
    ApplyLeavePage.prototype.getRamainingLeaves = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebase.database.ref("EmployeeLeaves/" + this.afauth.auth.currentUser.uid + "/AvailableLeaves").on('value', function (snapshot) {
                            _this.sickRemaining = snapshot.child('sick').val();
                            _this.casualRemaining = snapshot.child('casual').val();
                        })]; //end of database ref
                    case 1:
                        _a.sent(); //end of database ref
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplyLeavePage.prototype.find = function () {
        var parts = '29/12/2018'.split('/');
        console.log(new Date());
        var mydate = new Date(parts[1], parts[0], parts[2]).getDate();
        console.log(mydate);
    };
    ApplyLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apply-leave',template:/*ion-inline-start:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/'<!--\n  Generated template for the ApplyLeavePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color="blue" hideBackButton="true">\n    <button ion-button  menuToggle="left" start>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title text-center>Leaves</ion-title>\n\n    <ion-buttons end>\n      <button ion-button >\n        <ion-icon name="notifications"></ion-icon> \n      </button> \n    </ion-buttons>\n    \n</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <button ion-button (click)="find()">DD</button>\n    <ion-segment [(ngModel)]="leaves" color="white" >\n        <ion-segment-button value="applyLeave">\n           Apply Leave\n        </ion-segment-button>\n        <ion-segment-button value="leaveHistory" (click)="getPastLeaves()">\n          History\n        </ion-segment-button>\n     </ion-segment>\n\n<div [ngSwitch]="leaves">\n  <div *ngSwitchCase="\'applyLeave\'">\n  \n    <ion-card>\n      <ion-card-content>\n         <ion-row>\n            <ion-col col-6>This month leaves</ion-col>\n            <ion-col col-6>Remaining Leaves</ion-col>\n         </ion-row>\n         \n        <ion-row >\n           <ion-col col-6>5</ion-col><ion-col col-4>Casual</ion-col><ion-col col-2>{{casualRemaining}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>5</ion-col><ion-col col-4>Sick</ion-col><ion-col col-2>{{sickRemaining}}</ion-col>\n         </ion-row>\n      </ion-card-content>\n  </ion-card>\n  <h6 text-center class="title section-title">Leave Details</h6>\n    <ion-list radio-group [(ngModel)]="leave.leaveType">\n      <ion-row>\n        <ion-item col-6>\n            <ion-label>Casual Leave</ion-label>\n            <ion-radio  value="casual"></ion-radio>\n        </ion-item>\n        \n        <ion-item col-6>\n          <ion-label>Sick Leave</ion-label>\n          <ion-radio value="sick"></ion-radio>\n        </ion-item>\n      </ion-row>\n    \n  <ion-row>\n    <ion-item col-6>\n      <ion-label stacked>From</ion-label>\n      <ion-input  type="text" (click)="dispdate(\'from\')" [(ngModel)]="leave.dateFrom" (ionFocus)="dispdate(\'from\')" ></ion-input>\n    </ion-item>\n    <ion-item col-6>\n      <ion-label stacked>To</ion-label>\n      <ion-input  type="text" (click)="dispdate(\'to\')" [(ngModel)]="leave.dateTo" (ionFocus)="dispdate(\'to\')" ></ion-input>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    <button ion-button full color="blue" (click)="submitLeaveRequest()">Submit</button>\n  </ion-row>\n</ion-list>\n\n</div>\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n        <ion-list>\n        <h6 text-center class="title section-title">Recent Request</h6>\n          <ion-item>\n              <ion-row class="table-title" >\n                <ion-col col-3 >Leave Type</ion-col>\n                <ion-col col-3 >From</ion-col>\n                <ion-col col-3 >To</ion-col>\n                <ion-col col-2 >Status</ion-col>\n                <ion-col hidden col-2>View</ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item >\n              <ion-row *ngFor="let x of pastLeaves" class="col-text row-bottom-border" [ngClass]=\'x.status\'>\n                  <ion-col col-3>{{x.leaveType}}</ion-col><ion-col col-3>{{x.dateFrom}}</ion-col><ion-col col-3>{{x.dateTo}}</ion-col><ion-col col-2>{{x.status}}</ion-col>\n              </ion-row>\n            </ion-item>\n        </ion-list>\n    </div>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\apply-leave\apply-leave.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], ApplyLeavePage);
    return ApplyLeavePage;
    var _a, _b, _c, _d, _e, _f, _g;
}()); // end of class

//# sourceMappingURL=apply-leave.js.map

/***/ })

});
//# sourceMappingURL=12.js.map