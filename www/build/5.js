webpackJsonp([5],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEventsPageModule", function() { return UploadEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_events__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadEventsPageModule = /** @class */ (function () {
    function UploadEventsPageModule() {
    }
    UploadEventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload_events__["a" /* UploadEventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_events__["a" /* UploadEventsPage */]),
            ],
        })
    ], UploadEventsPageModule);
    return UploadEventsPageModule;
}());

//# sourceMappingURL=upload-events.module.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(459);
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
 * Generated class for the UploadEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadEventsPage = /** @class */ (function () {
    function UploadEventsPage(navCtrl, navParams, firebase, afauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afauth = afauth;
        this.PublishMessageForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            subject: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)]),
            message: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)]),
            postedBy: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.afauth.auth.currentUser.uid),
            time: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
        });
    }
    UploadEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadEventsPage');
    };
    UploadEventsPage.prototype.publishMessage = function () {
        this.PublishMessageForm.controls['date'].setValue(new Date().toLocaleDateString());
        this.PublishMessageForm.controls['time'].setValue(new Date().toLocaleTimeString());
        this.firebase.list('messages').push(this.PublishMessageForm.value);
    };
    UploadEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-upload-events',template:/*ion-inline-start:"F:\ionic-app\src\pages\upload-events\upload-events.html"*/'<!--\n  Generated template for the UploadEventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color="blue" hideBackButton="true">\n      <button ion-button  menuToggle="left" start>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      \n      <ion-title text-center>Events</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button >\n          <ion-icon name="notifications"></ion-icon> \n        </button> \n      </ion-buttons>\n      \n  </ion-toolbar>\n  \n  </ion-header>\n\n<ion-content>\n    <form [formGroup]="PublishMessageForm" (ngSubmit)="publishMessage()">\n    <ion-item>\n      <ion-label floating>Subject</ion-label>\n        <ion-input type="text" formControlName="subject"></ion-input>\n    </ion-item>\n    <ion-item  no-lines *ngIf=" PublishMessageForm.get(\'subject\').hasError(\'required\')  && PublishMessageForm.get(\'subject\').touched">\n        <ion-label stacked  color="danger">\n          Subject Is Required\n        </ion-label>\n      </ion-item>\n    <ion-item>\n        <ion-label floating>Message</ion-label>\n          <ion-textarea rows="15" formControlName="message"></ion-textarea>\n      </ion-item>\n      <ion-item  no-lines *ngIf=" PublishMessageForm.get(\'message\').hasError(\'required\')  && PublishMessageForm.get(\'message\').touched">\n          <ion-label stacked  color="danger">\n            Message Is Required\n          </ion-label>\n        </ion-item>\n\n      <ion-item>\n            <button type="submit"  [disabled]="PublishMessageForm.invalid" color="blue" full ion-button>Send Message</button>\n         </ion-item>\n         </form>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\upload-events\upload-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], UploadEventsPage);
    return UploadEventsPage;
}());

//# sourceMappingURL=upload-events.js.map

/***/ })

});
//# sourceMappingURL=5.js.map