webpackJsonp([10],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(470);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, navParams, afAuth, firebase, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.loadingCtrl = loadingCtrl;
        this.users = true;
        this.recruitment = true;
        this.systems = true;
        this.uploadPaySlip = true;
        this.leaveRequest = true;
        this.uploadEvent = true;
        this.roles = navParams.get('roles');
        if (this.roles[0] != "null") {
            this.users = false;
            this.recruitment = false;
            this.systems = false;
            this.uploadPaySlip = false;
            this.leaveRequest = false;
            this.uploadEvent = false;
        }
        if (this.roles[1] != "null")
            this.leaveRequest = false;
        // if(this.roles[2]!=null)
        //this.leaveRequest=false
        if (this.roles[3] != "null")
            this.uploadPaySlip = false;
        if (this.roles[4] != "null")
            this.recruitment = false;
        if (this.roles[5] != "null")
            this.systems = false;
        if (this.roles[6] != "null")
            this.users = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goto = function (page) {
        this.navCtrl.push(page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-toolbar color="blue" hideBackButton="true">\n\n      <button ion-button  menuToggle="left" start>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      \n\n      <ion-title text-center>Home</ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button >\n\n          <ion-icon name="notifications"></ion-icon> \n\n        </button> \n\n      </ion-buttons>\n\n      \n\n  </ion-toolbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="box-events">\n\nHello\n\n  </div>\n\n  <div class="box-controllers">\n\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'NewuserPage\')" [hidden]=users>Users</button>\n\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'SystemsPage\')" [hidden]=systems>System</button>\n\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'RecruitmentPage\')" [hidden]=recruitment>Recruitment</button>\n\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'HomePage\')" [hidden]=uploadPaySlip>Upload Payslip</button>\n\n      <button ion-button color="blue" class="home-buttons"  (click)="goto(\'HomePage\')" [hidden]=leaveRequest>Leave Requests</button>\n\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'HomePage\')" [hidden]=uploadEvent>Upload Events</button>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map