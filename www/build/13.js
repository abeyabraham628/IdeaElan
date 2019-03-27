webpackJsonp([13],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function() { return MyprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyprofilePageModule = /** @class */ (function () {
    function MyprofilePageModule() {
    }
    MyprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myprofile__["a" /* MyprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__myprofile__["a" /* MyprofilePage */]),
            ],
        })
    ], MyprofilePageModule);
    return MyprofilePageModule;
}());

//# sourceMappingURL=myprofile.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_form_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(data, cache, myModal, toastCtrl, navCtrl, navParams, firebase, afauth) {
        var _this = this;
        this.data = data;
        this.cache = cache;
        this.myModal = myModal;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afauth = afauth;
        this.retrieveProfile();
        //.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5${new Date().toLocaleTimeString()}`
        this.data.currentUri.subscribe(function (item) { return _this.uri = item; });
    }
    MyprofilePage.prototype.retrieveProfile = function () {
        var _this = this;
        this.firebase.database.ref("users/" + this.afauth.auth.currentUser.uid).once('value', function (snap) {
            _this.$key = snap.key;
            _this.fName = snap.child('fname').val();
            _this.lName = snap.child('lname').val();
            _this.email = snap.child('email').val();
            _this.mobile = snap.child('mobile').val();
            _this.doj = snap.child('doj').val();
            _this.dob = snap.child('dob').val();
            _this.jobTitle = snap.child('position').val();
        });
    };
    MyprofilePage.prototype.updateProfile = function () {
        var _this = this;
        if (this.$key != "")
            this.firebase.list('users').update(this.$key, {
                fname: this.fName,
                lname: this.lName,
                mobile: this.mobile
            }).then(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Profile updated successfully',
                    duration: 3000
                });
                toast.present();
            });
    };
    MyprofilePage.prototype.clearCache = function () {
        this.cache.clear();
        localStorage.clear();
    };
    MyprofilePage.prototype.showmodal = function () {
        var _this = this;
        console.log("hiiii");
        var mydata = {
            uri: "" + this.uri
        };
        var modal = this.myModal.create('ModalPage', { mydata: mydata });
        modal.onDidDismiss(function () {
            _this.clearCache();
            _this.clearCache;
            _this.uri.clearCache;
            _this.uri = "https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/" + _this.afauth.auth.currentUser.uid + ".jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5" + new Date().toLocaleTimeString();
        });
        modal.present();
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"F:\ionic-app\src\pages\myprofile\myprofile.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>\n      My Profile\n    </ion-title>\n    <ion-buttons end >\n        <button ion-button icon-only (click)="updateProfile()"> <ion-icon item-left name="checkmark"></ion-icon>Save</button>\n        \n    </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n    \n   \n        \n      <ion-item  style="text-align:center;" (click)="showmodal()">\n            \n            <img src="{{uri}}" onerror="this.src=\'assets/imgs/companylogo.png\'" style="height:100px;width:100px;border-radius:30%;margin: auto"> \n          \n        <h4 >{{this.fName | titlecase }} {{this.lName | titlecase }}</h4>\n        <h6>{{this.jobTitle | titlecase }} </h6>\n        <h6>{{this.email}}</h6>\n        \n        \n      </ion-item>\n            \n          <ion-row>\n              <ion-item col-6>\n                <ion-input hidden [(ngModel)]="$key"></ion-input>\n                \n                <ion-label stacked>First Name</ion-label>\n                <ion-input type="text" [(ngModel)]="fName" ></ion-input>\n              </ion-item>\n              <ion-item col-6>\n                  <ion-label stacked>Last Name</ion-label>\n                  <ion-input type="text"[(ngModel)]="lName"  ></ion-input>\n                </ion-item>\n          </ion-row> \n            \n          <ion-item>\n              <ion-label stacked>Mobile Number</ion-label>\n              <ion-input type="number" [(ngModel)]="mobile" ></ion-input>\n            </ion-item>  \n            \n            <ion-item>\n              <ion-label stacked>Date Of Birth</ion-label>\n              <ion-input disabled type="text" [(ngModel)]="dob" ></ion-input>\n            </ion-item>  \n            <ion-item>\n              <ion-label stacked>Date Of Join</ion-label>\n              <ion-input disabled type="text" [(ngModel)]="doj"></ion-input>\n            </ion-item>  \n            \n\n          \n          </ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_form_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ })

});
//# sourceMappingURL=13.js.map