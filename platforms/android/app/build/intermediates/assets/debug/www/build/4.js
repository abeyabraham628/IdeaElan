webpackJsonp([4],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(459);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        /* tab1Root = 'NewuserPage';
         tab2Root = 'SystemsPage' ;
         tab3Root = 'RecruitmentPage';*/
        this.tab0Root = 'HomePage';
        this.tab1Root = 'ApplyLeavePage';
        this.tab2Root = 'PayslipPage';
        this.tab3Root = 'InboxPage';
        this.tab0Params = this.navParams.data;
    }
    TabsPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () { return _this.navCtrl.setRoot('LoginPage'); });
    };
    TabsPage.prototype.changepassword = function () {
        this.navCtrl.push('ChangepasswordPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\ionic-app\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-menu [content]="mycontent" persistent="true">\n\n  <ion-content>\n\n     <ion-list>\n\n      <ion-item style="text-align:center;">\n\n          <ion-thumbnail style="border:1px solid black; height:100px;width:100px;border-radius:50%;margin: auto">\n\n          </ion-thumbnail>\n\n          <h2>Tony Manuel</h2>\n\n          <h6>Intern</h6>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-icon name="images" item-end></ion-icon>\n\n          Change Image\n\n      </ion-item>\n\n     \n\n      <ion-item (click)="changepassword()">\n\n          <ion-icon name="lock" item-end></ion-icon>\n\n          Change Password\n\n      </ion-item>\n\n      \n\n      <ion-item (click)="logout()">\n\n          <ion-icon name="power" item-end></ion-icon>\n\n           Logout\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n \n\n\n\n<ion-tabs>\n\n  <ion-tab [root]="tab0Root"   tabTitle="Home" tabIcon="home" [rootParams]="tab0Params"></ion-tab>\n\n  <ion-tab [root]="tab1Root"   tabTitle="Leave" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab2Root"  tabTitle="Payslip" tabIcon="document"></ion-tab>\n\n  <ion-tab [root]="tab3Root"  tabTitle="Inbox" tabIcon="chatboxes"></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=4.js.map