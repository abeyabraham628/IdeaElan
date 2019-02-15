webpackJsonp([12],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(458);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, afAuth, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.companyLogo = "assets/imgs/26053.png";
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.updatePassword = function () {
        var user = this.afAuth.auth.currentUser;
        var newPassword = this.password;
        var firebase = this.firebase;
        var navCtrl = this.navCtrl;
        user.updatePassword(newPassword).then(function () {
            firebase.object("TempLogin/" + user.uid).set({
                status: "Set",
            }).then(function () {
                navCtrl.popToRoot();
                navCtrl.setRoot('TabsPage');
            }); // end of push
        }).catch(function (error) {
            console.error(error);
        });
    };
    ChangepasswordPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"F:\ionic-app\src\pages\changepassword\changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n    <ion-toolbar color="blue">\n     <ion-title text-center>IdeaElan</ion-title>\n   </ion-toolbar>\n  </ion-header>\n\n<ion-content padding class="top-botton-border" style="margin-top:auto;margin-bottom:auto">\n   \n       \n      \n      \n  <ion-card>\n    <ion-card-header text-center>\n        <ion-thumbnail >\n            <img [src]="companyLogo" class="logo1" />\n          </ion-thumbnail>\n          <br/>CHANGE PASSWORD\n    </ion-card-header>\n    <ion-card-content>\n      \n        \n        <ion-list>\n            <ion-item>\n              <ion-label floating>New Password</ion-label>\n              <ion-input type="password" [(ngModel)]="password" ></ion-input>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-label floating>Confirm Password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          \n          </ion-list>\n          \n\n    </ion-card-content>\n    <ion-row class="cardfooter">\n        <ion-col col-6>\n            <button ion-button full  color="blue" (click)="updatePassword()">Save</button>\n           \n        </ion-col>\n        <ion-col col-6>\n        \n            <button ion-button full  color="blue" (click)="cancel()">Cancel</button>\n        </ion-col>\n      </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=12.js.map