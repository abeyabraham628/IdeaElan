webpackJsonp([0],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(601);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(604);
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
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
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Headername="users";
        this.tab1Root = 'NewuserPage';
        this.tab2Root = 'SystemsPage';
        this.tab3Root = 'RecruitmentPage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\ionic-app\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n\n\n \n\n\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root"   tabTitle="User" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab2Root"  tabTitle="Systems" tabIcon="desktop"></ion-tab>\n\n  <ion-tab [root]="tab3Root"  tabTitle="Recruitment" tabIcon="people"></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_it_add_it__ = __webpack_require__(605);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.run = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_it_add_it__["a" /* AddItPage */]);
    };
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            // loader.dismiss();
            loader.onDidDismiss(function () {
                console.log('Dismissed loading');
            });
            _this.http.post('http://192.168.0.5:8080/project/fetch_data.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"F:\ionic-app\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-item *ngFor="let item of items" >\n  <h2>Welcome {{item.username}}</h2>\n  <h3>Your profile information is as follows:</h3>\n  <ion-row>\n    <ion-col col-4>\n     Password\n    </ion-col>\n    <ion-col col-8>\n  {{item.password}}\n    </ion-col>\n \n</ion-row>\n<ion-row>\n    <ion-col col-4>\n      Telephone\n    </ion-col>\n    <ion-col col-8>\n  {{item.telephone}}\n    </ion-col>\n \n</ion-row>\n<ion-row>\n    <ion-col col-4>\n    Email \n    </ion-col>\n    <ion-col col-8>\n  {{item.email}}\n    </ion-col>\n \n</ion-row>\n<div padding>\n  <button ion-button  round outline block (click)="run()"> ADD ITEM </button>\n  </div>\n </ion-item>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(17);
var map_1 = __webpack_require__(333);
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * \
 * import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
 *
 *
 *
 *
 *
 *
 * Generated class for the AddItPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItPage = /** @class */ (function () {
    function AddItPage(navCtrl, alertCtrl, navParams, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
    }
    //, private barcodeScanner: BarcodeScanner
    AddItPage.prototype.additem = function () {
        var _this = this;
        if (this.SystemSerialNumber.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "SystemSerialNumberfield is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.CPUSerialNumber.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "CPUSerialNumber field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.RAMSize.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "RAMSize field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.Harddisksize.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Harddisksize field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else if (this.KeyboardSerialNumber.value == "") {
            var alert_5 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "KeyboardSerialNumber field is empty",
                buttons: ['OK']
            });
            alert_5.present();
        }
        else if (this.mouseSerialNumber.value == "") {
            var alert_6 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "mouseSerialNumber field is empty",
                buttons: ['OK']
            });
            alert_6.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                SystemSerialNumber: this.SystemSerialNumber.value,
                CPUSerialNumber: this.CPUSerialNumber.value,
                RAMSize: this.RAMSize.value,
                Harddisksize: this.Harddisksize.value,
                KeyboardSerialNumber: this.KeyboardSerialNumber.value,
                mouseSerialNumber: this.mouseSerialNumber.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://192.168.0.5:8080/project/addIT.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "System details added  successfull") {
                        var alert_7 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_7.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                    else {
                        var alert_8 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_8.present();
                    }
                });
            });
        }
    };
    AddItPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddItPage');
    };
    AddItPage.prototype.item = function () {
        //this.barcodeScanner.scan().then(barcodeData => {
        // console.log('Barcode data', barcodeData);
        //}).catch(err => {
        //   console.log('Error', err);
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("SystemSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "SystemSerialNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("CPUSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "CPUSerialNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("RAMSize"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "RAMSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Harddisksize"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "Harddisksize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("KeyboardSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "KeyboardSerialNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mouseSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "mouseSerialNumber", void 0);
    AddItPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-it',template:/*ion-inline-start:"F:\ionic-app\src\pages\add-it\add-it.html"*/'<!--\n  Generated template for the AddItPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Add IT infrastructure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="System Serial Number" name="SystemSerialNumber" #SystemSerialNumber></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="CPUSerialNumber" name="CPUSerialNumber" #CPUSerialNumber></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="RAMSize" name="RAMSize" #RAMSize></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Harddisksize" name="Harddisksize" #Harddisksize></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="KeyboardSerialNumber" name="KeyboardSerialNumber" #KeyboardSerialNumber></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="mouseSerialNumber" name="mouseSerialNumber" #mouseSerialNumber></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="additem()"> ADD ITEM </button>\n  </div>\n  <button  (click)="item()"> read ITEM </button>\n  </ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\add-it\add-it.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddItPage);
    return AddItPage;
}());

//# sourceMappingURL=add-it.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    HomePage.prototype.signUp = function () {
        // this.navCtrl.push(RegisterPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.password.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                password: this.password.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://192.168.0.5:8080/project/login.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Your Login success") {
                        //loader.dismiss()
                        var alert_3 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], data_1);
                    }
                    else {
                        var alert_4 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Login Username or Password is invalid",
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic-app\src\pages\home\home.html"*/'\n<ion-content>\n    <img src="assets/imgs/companylogo.png" class="logo">\n \n  <ion-list >\n    <ion-item  > \n      <ion-input type="text" placeholder="Username" name="username" #username class="inp"></ion-input>\n      <ion-icon name="person" item-left></ion-icon>\n    </ion-item>\n    \n    <ion-item>\n    <ion-input type="password" placeholder="Password" name="password" #password class="inp"></ion-input> <ion-icon name="ios-eye" item-left></ion-icon>\n  </ion-item>\n  <div class="click_down">\n    <button ion-button round block (click)="signIn()">Sign In</button>\n    <p>\n   <a href="https://www.christuniversity.in/" class="fp">Forgot password?</a></p>\n   <button ion-button round outline block (click)="signUp()">Register</button> \n  </div>\n  </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map