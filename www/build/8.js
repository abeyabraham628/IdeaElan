webpackJsonp([8],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SupportPageModule);
    return SupportPageModule;
}());

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = /** @class */ (function () {
    function SupportPage(toastCtrl, navCtrl, navParams, firebase, afAuth) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afAuth = afAuth;
        this.subjectErr = true;
        this.commentErr = true;
        this.recpErr = true;
        this.myRequests = [];
        this.support = "newIssue";
        this.getMyRequests();
    }
    SupportPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
    };
    SupportPage.prototype.contactSupport = function () {
        var _this = this;
        this.subject == null ? this.subjectErr = false : this.subjectErr = true;
        this.matter == null ? this.commentErr = false : this.commentErr = true;
        this.recipient == null ? this.recpErr = false : this.recpErr = true;
        if (this.subjectErr && this.commentErr && this.recpErr) {
            this.firebase.list("support/" + this.recipient).push({
                subject: this.subject,
                matter: this.matter,
                recipient: this.recipient,
                userId: this.afAuth.auth.currentUser.uid,
                date: __WEBPACK_IMPORTED_MODULE_4_moment__().format('D-MMM-YYYY'),
                time: __WEBPACK_IMPORTED_MODULE_4_moment__().format('h:mm a'),
                status: 'Pending'
            }).then(function () {
                var toast = _this.toastCtrl.create({
                    message: "Issue submitted successfully",
                    duration: 3000
                });
                toast.present();
                _this.resetFields();
            });
        }
    };
    SupportPage.prototype.resetFields = function () {
        this.subject = this.recipient = this.matter = null;
        this.recpErr = this.subjectErr = this.commentErr = true;
    };
    SupportPage.prototype.getMyRequests = function () {
        var _this = this;
        this.firebase.database.ref("support").on('value', function (snap) {
            snap.forEach(function (child) {
                child.forEach(function (item) {
                    if (item.child('userId').val() === _this.afAuth.auth.currentUser.uid) {
                        _this.myRequests.push(item.val());
                    }
                });
            });
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"F:\ionic-app\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <navbar pageTitle="Support"></navbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]="support" color="white" >\n    <ion-segment-button value="newIssue">\n       New Issue\n    </ion-segment-button>\n    <ion-segment-button value="pastIssues" (click)="resetFields()">\n      History\n    </ion-segment-button>\n </ion-segment>\n\n <div [ngSwitch]="support">\n    <div *ngSwitchCase="\'newIssue\'">\n        <ion-item>\n            <ion-label stacked>Send To</ion-label>\n              <ion-select [(ngModel)]="recipient">\n                <ion-option value="hr">HR</ion-option>\n                <ion-option value="admin">Admin</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item  no-lines [hidden]="recpErr">\n            <ion-label color="danger" stacked>Recipient cannot be blank</ion-label>\n          </ion-item>\n     \n      <ion-item>\n        <ion-label stacked>I need Help With</ion-label>\n          <ion-select [(ngModel)]="subject">\n            <ion-option value="Internet Connectivity">Internet Connectivity</ion-option>\n            <ion-option value="Computer Related">Computer Related</ion-option>\n            <ion-option value="Other">Other</ion-option>\n          </ion-select>\n      </ion-item>\n      <ion-item no-lines [hidden]="subjectErr">\n          <ion-label color="danger" stacked>Subject cannot be blank</ion-label>\n        </ion-item>\n      <ion-item>\n        <ion-label stacked>Please enter you concern</ion-label>\n        <ion-textarea rows=5 [(ngModel)]="matter"></ion-textarea>\n      </ion-item>\n      <ion-item  no-lines [hidden]="commentErr">\n          <ion-label color="danger" stacked>Comments cannot be blank</ion-label>\n        </ion-item>\n\n      <ion-row>\n        <ion-col col-6><button ion-button  type="button" color="blue" full (click)="contactSupport()">Send</button></ion-col>\n        <ion-col col-6><button ion-button  type="reset" color="blue" full (click)="resetFields()">Cancel</button></ion-col>\n       \n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase="\'pastIssues\'">\n        <ion-item>\n            <ion-row class="table-title">\n              <ion-col col-3 >Date</ion-col>\n              <ion-col col-2 >Send To</ion-col>\n               <ion-col col-5 >Subject</ion-col>\n              <ion-col col-2 >Status</ion-col>\n             \n            </ion-row>\n          </ion-item>\n          <ion-item *ngFor=\'let r of myRequests\'>\n              <ion-row class="col-text table-bottom-border"  >\n                  <ion-col col-3>{{r.date}}</ion-col><ion-col col-2>{{r.recipient}}</ion-col><ion-col col-5>{{r.subject}}</ion-col><ion-col col-2>{{r.status}}</ion-col>\n              </ion-row>\n            </ion-item>\n    </div>\n </div>\n\n \n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=8.js.map