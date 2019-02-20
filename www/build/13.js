webpackJsonp([13],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(754);
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

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(458);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, navCtrl, navParams, afAuth, firebase, loadingCtrl) {
        this.modalCtrl = modalCtrl;
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
        this.messages = [];
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
    HomePage.prototype.presentModal = function (page) {
        var modal = this.modalCtrl.create(page);
        modal.present();
    };
    HomePage.prototype.getMessages = function () {
        var _this = this;
        this.firebase.list('messages').snapshotChanges().subscribe(function (snap) {
            _this.messages = snap.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    HomePage.prototype.viewMessages = function (x) {
        var modal = this.modalCtrl.create({
            title: x.subject,
        });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic-app\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color="blue" hideBackButton="true">\n      <button ion-button  menuToggle="left" start>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      \n      <ion-title text-center>Home</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button >\n          <ion-icon name="notifications"></ion-icon> \n        </button> \n      </ion-buttons>\n      \n  </ion-toolbar>\n  \n  </ion-header>\n\n\n<ion-content>\n\n  <div class="box-events">\n    <ion-scroll scrollY="true" >\n      <ion-card *ngFor="let x of messages">\n          <ion-card-header (click)="viewMessage(x)">\n          <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/companylogo.png">\n              </ion-avatar>\n              <h4>{{x.subject}}</h4>\n              <p>{{x.postedBy}}</p>\n              <p>{{x.date}} {{x.time}}</p>\n            </ion-item>\n          </ion-card-header>\n         \n          </ion-card>\n        </ion-scroll>\n  </div>\n  <div class="box-controllers">\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'NewuserPage\')" [hidden]=users>Users</button>\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'SystemsPage\')" [hidden]=systems>System</button>\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'RecruitmentPage\')" [hidden]=recruitment>Recruitment</button>\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'HomePage\')" [hidden]=uploadPaySlip>Upload Payslip</button>\n     \n      \n      <button ion-button color="blue" class="home-buttons"  (click)="presentModal(\'LeavesAdminPage\')" [hidden]=leaveRequest>Leave Requests\n          <ion-badge color="danger">2</ion-badge>\n          \n      </button>\n      <button ion-button color="blue" class="home-buttons" (click)="goto(\'UploadEventsPage\')" [hidden]=uploadEvent>Upload Events</button>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map