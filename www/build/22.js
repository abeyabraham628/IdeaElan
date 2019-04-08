webpackJsonp([22],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(468);
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
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_strings__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Author Abey Abraham







var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(toastCtrl, navCtrl, navParams, afauth, storage, firebase) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afauth = afauth;
        this.storage = storage;
        this.firebase = firebase;
        this.passwordResetForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
        });
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('emailId').then(function (email) { return _this.passwordResetForm.controls['email'].setValue(email); });
    };
    ForgotpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        var navCtrl = this.navCtrl;
        var auth = this.afauth.auth;
        var emailAddress = this.passwordResetForm.controls['email'].value;
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Password reset link has been sent to your mail.',
                duration: 4000
            });
            toast.present();
            setTimeout(function () {
                navCtrl.setRoot('LoginPage');
            }, 4500);
        }).catch(function (error) {
            var errMsg = __WEBPACK_IMPORTED_MODULE_5__providers_strings__["a" /* AppConst */].FirebaseError.find(function (e) { return e.code == error.code; });
            var toast = _this.toastCtrl.create({
                message: errMsg.error,
                duration: 3000
            });
            toast.present();
        });
    };
    ForgotpasswordPage.prototype.goBack = function () {
        this.navCtrl.popToRoot();
    };
    var _a, _b, _c, _d, _e, _f;
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"F:\ionic-app\src\pages\forgotpassword\forgotpassword.html"*/'<!--Authour Abey Abraham-->\n\n<ion-header no-border>\n\n  <navbar pageTitle="RESET PASSWORD"></navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding >\n\n    \n\n        <form [formGroup]="passwordResetForm" (ngSubmit)="resetPassword()">\n\n       \n\n\n\n          <ion-item no-lines>\n\n            <h3 style="font-size:20px"> Forgot Password?</h3>\n\n            <p style="font-size:12px">Enter your email address to reset your password</p>\n\n            </ion-item>\n\n           <ion-item no-lines>\n\n            <ion-input type="email" style="border:1px solid #f6a253" full  formControlName="email" ></ion-input>\n\n          </ion-item>\n\n          <ion-item  no-lines *ngIf="(passwordResetForm.get(\'email\').hasError(\'minlength\') || passwordResetForm.get(\'email\').hasError(\'required\') || passwordResetForm.get(\'email\').hasError(\'pattern\') ) && passwordResetForm.get(\'email\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(passwordResetForm.get(\'email\').hasError(\'minlength\') || passwordResetForm.get(\'email\').hasError(\'required\') || passwordResetForm.get(\'email\').hasError(\'pattern\') ) && passwordResetForm.get(\'email\').touched" >\n\n                Invalid Email ID\n\n              </ion-label>\n\n            </ion-item>\n\n       \n\n         <ion-row>\n\n           <ion-item col-6 no-lines>\n\n             <button ion-button color="blue" style="height:40px;" type="submit"  [disabled]="passwordResetForm.invalid">Reset Password</button>\n\n           </ion-item>\n\n           <ion-item col-6 no-lines>\n\n              <button type="reset" ion-button color="light" style="height:40px;" (click)="goBack()">Cancel</button>\n\n            </ion-item>\n\n         </ion-row>\n\n        \n\n      </form>\n\n        <hr/>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ToastController"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _f : Object])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ })

});
//# sourceMappingURL=22.js.map