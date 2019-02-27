webpackJsonp([15],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(818);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(toast, navCtrl, navParams, afauth) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.paswordResetForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
        });
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.resetPassword = function () {
        var toastCtrl = this.toast;
        var navCtrl = this.navCtrl;
        var auth = this.afauth.auth;
        var emailAddress = this.paswordResetForm.controls['email'].value;
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            var toast = toastCtrl.create({
                message: 'Password reset link has been sent to your mail.',
                duration: 5000
            });
            toast.present();
            navCtrl.setRoot('LoginPage');
        }).catch(function (error) {
            var toast = toastCtrl.create({
                message: error,
                duration: 3000
            });
            toast.present();
        });
    };
    ForgotpasswordPage.prototype.goBack = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"D:\IdeaElan\src\pages\forgotpassword\forgotpassword.html"*/'<!--\n\n  Generated template for the ForgotpasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>Password Reset</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n    \n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n    \n\n        <form [formGroup]="paswordResetForm" (ngSubmit)="resetPassword()">\n\n       <ion-list>\n\n\n\n          <ion-item no-lines>\n\n            <h3 style="font-size:20px"> Forgot Password?</h3>\n\n            <p style="font-size:12px">Enter your email address to reset your password</p>\n\n            </ion-item>\n\n           <ion-item no-lines>\n\n            <ion-input type="email" style="border:1px solid #f6a253" formControlName="email" ></ion-input>\n\n          </ion-item>\n\n          <ion-item  no-lines *ngIf="(paswordResetForm.get(\'email\').hasError(\'minlength\') || paswordResetForm.get(\'email\').hasError(\'required\') || paswordResetForm.get(\'email\').hasError(\'pattern\') ) && paswordResetForm.get(\'email\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(paswordResetForm.get(\'email\').hasError(\'minlength\') || paswordResetForm.get(\'email\').hasError(\'required\') || paswordResetForm.get(\'email\').hasError(\'pattern\') ) && paswordResetForm.get(\'email\').touched" >\n\n                Invalid Email ID\n\n              </ion-label>\n\n            </ion-item>\n\n          <hr/>\n\n         <ion-row>\n\n           <ion-item col-6 no-lines>\n\n             <button ion-button color="blue" style="height:40px;" type="submit"  [disabled]="paswordResetForm.invalid">Reset Password</button>\n\n           </ion-item>\n\n           <ion-item col-6 no-lines>\n\n              <button type="reset" ion-button color="light" style="height:40px;" (click)="goBack()">Cancel</button>\n\n            </ion-item>\n\n         </ion-row>\n\n        </ion-list>\n\n      </form>\n\n        <hr/>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IdeaElan\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ })

});
//# sourceMappingURL=15.js.map