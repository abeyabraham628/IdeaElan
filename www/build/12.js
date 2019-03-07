webpackJsonp([12],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewDetailsPageModule", function() { return InterviewDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interview_details__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterviewDetailsPageModule = /** @class */ (function () {
    function InterviewDetailsPageModule() {
    }
    InterviewDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interview_details__["a" /* InterviewDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__interview_details__["a" /* InterviewDetailsPage */]),
            ],
        })
    ], InterviewDetailsPageModule);
    return InterviewDetailsPageModule;
}());

//# sourceMappingURL=interview-details.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(462);
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
        this.eventDate = navParams.get('date');
        this.eventKey = navParams.get('key');
        this.loadApplicants(this.eventKey);
    }
    InterviewDetailsPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
    };
    InterviewDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InterviewDetailsPage.prototype.loadApplicants = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var result, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.applicantsData = [];
                        result = [];
                        /*this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(date).on("value",function(snapshot) {
                            x=Object.keys(snapshot.val())[0];
                        });//end of Schedules reference*/
                        return [4 /*yield*/, this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(key).once("value", function (snapshot) {
                                snapshot.forEach(function (childSnapshot) {
                                    result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                                    return false;
                                });
                            })];
                    case 1:
                        /*this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(date).on("value",function(snapshot) {
                            x=Object.keys(snapshot.val())[0];
                        });//end of Schedules reference*/
                        _a.sent(); //end of Applicants reference
                        this.applicantsData = result;
                        return [2 /*return*/];
                }
            });
        });
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
                _this.loadApplicants(_this.eventKey);
            }
        });
        statusAlert.setTitle(data.fName + " " + data.lName);
        statusAlert.addButton('Cancel');
        statusAlert.present();
    };
    InterviewDetailsPage.prototype.interviewSummary = function (eventDate) {
        var summaryModal = this.modalCtrl.create('InterviewSummaryPage', { eventDate: eventDate });
        summaryModal.present();
    };
    InterviewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interview-details',template:/*ion-inline-start:"D:\IdeaElan\src\pages\interview-details\interview-details.html"*/'\n\n<ion-header no-border>\n\n  <page-header pageTitle="RECRUITMENTS"></page-header>\n\n</ion-header>\n\n\n\n<ion-content  >\n\n <ion-list >\n\n       {{eventDate}}  <button item-right ion-button (click)="goBack()">Back</button>\n\n       <button item-right ion-button (click)="interviewSummary(eventKey)">Summary</button>\n\n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n        \n\n                <ion-row no-margin class="table-title row-bottom-border"> \n\n                   \n\n                   <ion-col col-4>Applicant Name</ion-col>\n\n                    <ion-col col-3>Phone</ion-col>\n\n                    <ion-col col-3>Status</ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row no-margin class="table-title row-bottom-border" *ngFor="let x of applicantsData"> \n\n                   \n\n                  <ion-col col-4>{{x.fName}} {{x.lName}}</ion-col>\n\n                   <ion-col col-3>{{x.mobile}}</ion-col>\n\n                   <ion-col col-3>{{x.interviewStatus}}</ion-col>\n\n                   <ion-col col-2 (click)="changeStatus(x)">Change</ion-col>\n\n               </ion-row>\n\n\n\n                \n\n        </ion-list>\n\n      \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IdeaElan\src\pages\interview-details\interview-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], InterviewDetailsPage);
    return InterviewDetailsPage;
}());

//# sourceMappingURL=interview-details.js.map

/***/ })

});
//# sourceMappingURL=12.js.map