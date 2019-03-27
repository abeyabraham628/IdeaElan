webpackJsonp([20],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InboxPageModule = /** @class */ (function () {
    function InboxPageModule() {
    }
    InboxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__inbox__["a" /* InboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__inbox__["a" /* InboxPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], InboxPageModule);
    return InboxPageModule;
}());

//# sourceMappingURL=inbox.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
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




/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InboxPage = /** @class */ (function () {
    function InboxPage(loadingCtrl, afauth, alertCtrl, navCtrl, navParams, firebase, modalCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.modalCtrl = modalCtrl;
        this.messages = [];
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        this.getMessages();
    };
    InboxPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
    };
    InboxPage.prototype.getMessages = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
            dismissOnPageChange: true
        });
        this.loader.present();
        this.firebase.list("messages/" + this.afauth.auth.currentUser.uid).snapshotChanges().subscribe(function (snap) {
            _this.messages = snap.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            }).reverse();
        });
        this.loader.dismiss();
    };
    InboxPage.prototype.viewMessage = function (x) {
        var _this = this;
        console.log(x.$key);
        var alert = this.alertCtrl.create({
            title: x.subject,
            message: x.message,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        _this.firebase.object("messages/" + _this.afauth.auth.currentUser.uid + "/" + x.$key).update({
                            status: 'read'
                        });
                    }
                }]
        });
        alert.present();
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-inbox',template:/*ion-inline-start:"F:\ionic-app\src\pages\inbox\inbox.html"*/'<!--\n\n  Generated template for the InboxPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <page-header pageTitle="INBOX"></page-header>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <ion-card *ngFor="let x of messages" >\n\n      <ion-card-header (click)="viewMessage(x)" class={{x.status}}>\n\n      <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/companylogo.png">\n\n          </ion-avatar>\n\n          <h4 style="text-transform:capitalize">From: {{x.postedBy}}</h4>\n\n          <p >Subject: {{x.subject | titlecase}}</p>\n\n          <p>{{x.date}} {{x.time}}</p>\n\n        </ion-item>\n\n      </ion-card-header>\n\n     \n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\inbox\inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ })

});
//# sourceMappingURL=20.js.map