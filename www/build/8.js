webpackJsonp([8],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(462);
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

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
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


/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = /** @class */ (function () {
    function SupportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.support = "newIssue";
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"F:\ionic-app\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <navbar pageTitle="Support"></navbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]="support" color="white" >\n    <ion-segment-button value="newIssue">\n       New Issue\n    </ion-segment-button>\n    <ion-segment-button value="pastIssues" (click)="resetFields()">\n      History\n    </ion-segment-button>\n </ion-segment>\n\n <div [ngSwitch]="support">\n    <div *ngSwitchCase="\'newIssue\'">\n        <ion-item>\n            <ion-label stacked>Send To</ion-label>\n              <ion-select [(ngModel)]="recipient">\n                <ion-option value="HR">HR</ion-option>\n                <ion-option value="admin">Admin</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item  no-lines [hidden]="recpErr">\n            <ion-label color="danger" stacked>Recipient cannot be blank</ion-label>\n          </ion-item>\n     \n      <ion-item>\n        <ion-label stacked>I need Help With</ion-label>\n          <ion-select [(ngModel)]="subject">\n            <ion-option value="Internet Connectivity">Internet Connectivity</ion-option>\n            <ion-option value="Computer Related">Computer Related</ion-option>\n            <ion-option value="Other">Other</ion-option>\n          </ion-select>\n      </ion-item>\n      <ion-item no-lines [hidden]="subjectErr">\n          <ion-label color="danger" stacked>Subject cannot be blank</ion-label>\n        </ion-item>\n      <ion-item>\n        <ion-label stacked>Please enter you concern</ion-label>\n        <ion-textarea rows=5 [(ngModel)]="matter"></ion-textarea>\n      </ion-item>\n      <ion-item  no-lines [hidden]="commentErr">\n          <ion-label color="danger" stacked>Comments cannot be blank</ion-label>\n        </ion-item>\n\n      <ion-row>\n        <ion-col col-6><button ion-button  type="button" color="blue" full (click)="contactSupport()">Send</button></ion-col>\n        <ion-col col-6><button ion-button  type="reset" color="blue" full (click)="resetFields()">Cancel</button></ion-col>\n       \n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase="\'pastIssues\'">\n        <ion-item>\n            <ion-row class="table-title">\n              <ion-col col-3 >Date</ion-col>\n              <ion-col col-2 >Send To</ion-col>\n               <ion-col col-5 >Subject</ion-col>\n              <ion-col col-2 >Status</ion-col>\n             \n            </ion-row>\n          </ion-item>\n          <ion-item *ngFor=\'let r of myRequests\'>\n              <ion-row class="col-text table-bottom-border"  >\n                  <ion-col col-3>{{r.date}}</ion-col><ion-col col-2>{{r.recipient}}</ion-col><ion-col col-5>{{r.subject}}</ion-col><ion-col col-2>{{r.status}}</ion-col>\n              </ion-row>\n            </ion-item>\n    </div>\n </div>\n\n \n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=8.js.map