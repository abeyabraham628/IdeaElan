webpackJsonp([5],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_it_add_it__ = __webpack_require__(246);
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
            selector: 'page-profile',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item *ngFor="let item of items" >\n\n  <h2>Welcome {{item.username}}</h2>\n\n  <h3>Your profile information is as follows:</h3>\n\n  <ion-row>\n\n    <ion-col col-4>\n\n     Password\n\n    </ion-col>\n\n    <ion-col col-8>\n\n  {{item.password}}\n\n    </ion-col>\n\n \n\n</ion-row>\n\n<ion-row>\n\n    <ion-col col-4>\n\n      Telephone\n\n    </ion-col>\n\n    <ion-col col-8>\n\n  {{item.telephone}}\n\n    </ion-col>\n\n \n\n</ion-row>\n\n<ion-row>\n\n    <ion-col col-4>\n\n    Email \n\n    </ion-col>\n\n    <ion-col col-8>\n\n  {{item.email}}\n\n    </ion-col>\n\n \n\n</ion-row>\n\n<div padding>\n\n  <button ion-button  round outline block (click)="run()"> ADD ITEM </button>\n\n  </div>\n\n </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recruitment_recruitment__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems_systems__ = __webpack_require__(141);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__["a" /* NewuserPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__systems_systems__["a" /* SystemsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__recruitment_recruitment__["a" /* RecruitmentPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__systems_systems__["a" /* SystemsPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title toolbar-ios-title-text-align="center"> USERS</ion-title>\n\n  </ion-navbar>\n\ntabsPlacement = "top"\n\n</ion-header>\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{Headername}} </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-tabs  >\n\n        <ion-tab [root]="tab1Root"  class="clr" tabTitle="USER" tabIcon="ios-contact"> USER</ion-tab>\n\n        <ion-tab [root]="tab2Root" tabTitle="SYSTEM" tabIcon="ios-people">ALL USERS</ion-tab>\n\n        <ion-tab [root]="tab3Root" tabTitle="RECRUITMENTS" tabIcon="ios-people">ALL USERS</ion-tab>\n\n        \n\n        \n\n        \n\n       \n\n      </ion-tabs>\n\n    </ion-content>\n\n   \n\n\n\n\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecruitmentPage = /** @class */ (function () {
    function RecruitmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page = 0;
        this.icons = "0";
        this.icons = "0";
    }
    RecruitmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecruitmentPage');
        this.slides.lockSwipes(true);
    };
    RecruitmentPage.prototype.selectedTab = function (ind) {
        this.slides.lockSwipes(false);
        this.slider.slideTo(ind);
        this.slides.lockSwipes(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], RecruitmentPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], RecruitmentPage.prototype, "slides", void 0);
    RecruitmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recruitment',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\recruitment\recruitment.html"*/'<!--\n\n  Generated template for the RecruitmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n--><!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Recruitment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n  <ion-content>\n\n \n\n      <ion-segment [(ngModel)]="icons" color="primary">\n\n        <ion-segment-button value="0" placeholder="system"(click)="selectedTab(0)">\n\n         <!-- <ion-icon name="camera"></ion-icon>-->\n\n         New Applicant\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n\n          <!--   <ion-icon name="ios-people"></ion-icon>-->\n\n          Schedules\n\n        </ion-segment-button>\n\n        <ion-segment-button value="2" (click)="selectedTab(2)">\n\n          <!--   <ion-icon name="ios-people"></ion-icon>-->\n\n          Interviews\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n      \n\n  \n\n    <ion-slides #slider>\n\n      <ion-slide  >\n\n          \n\n          <ion-list style="margin-top: 90px;overflow: hidden;">\n\n            <ion-item>\n\n              <ion-label>Applicant Information </ion-label>\n\n            \n\n            </ion-item>\n\n            \n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="First Name " name="username" #username class="inp"></ion-input>\n\n                \n\n             \n\n                <ion-input type="text" placeholder="Last Name " name="username" #username class="inp"></ion-input>\n\n                \n\n             \n\n              </ion-item>\n\n             <ion-item style = "overflow: hidden;"> \n\n              <ion-input  placeholder="Mobile" name="password" #password class="inp"></ion-input> \n\n           \n\n            </ion-item>\n\n            <ion-item style = "overflow: hidden;"> \n\n                <ion-input type="text" placeholder="E-mail" name="username" #username class="inp"></ion-input>\n\n               \n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label>Employer and Salary  </ion-label>\n\n              \n\n              </ion-item>\n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Current Employer " name="username" #username class="inp"></ion-input>\n\n                \n\n             \n\n              </ion-item>\n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Notice Period  " name="username" #username class="inp"></ion-input>\n\n                \n\n             \n\n              \n\n              <ion-input  placeholder="Current CTC" name="Current CTC" #password class="inp"></ion-input> \n\n           \n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Experience Details </ion-label>\n\n            \n\n            </ion-item>\n\n              <ion-item style = "overflow: hidden;" > \n\n                  <ion-input type="text" placeholder="Total Experience " name="username" #username class="inp"></ion-input>\n\n                  \n\n              </ion-item>\n\n              <ion-item style = "overflow: hidden;" > \n\n                 \n\n                  <ion-input type="text" placeholder="years " name="username" #username class="inp"></ion-input>\n\n                 \n\n                \n\n                  <ion-input type="text" placeholder="months" name="username" #username class="inp"></ion-input>\n\n            \n\n               \n\n              <ion-input type="text" placeholder="Expected CTC" name="username" #username class="inp"></ion-input>\n\n        \n\n           \n\n          </ion-item>\n\n        \n\n            \n\n          <ion-item style = "overflow: hidden;" > \n\n                 \n\n                  <button ion-button  round> SAVE</button>\n\n            </ion-item>\n\n          </ion-list>\n\n          \n\n          \n\n          \n\n         \n\n          \n\n      </ion-slide>\n\n      <ion-slide>\n\n          \n\n          <ion-list >\n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Search Candidates" name="username" #username class="inp"></ion-input>\n\n                <ion-icon name="ios-search" item-right></ion-icon>\n\n              </ion-item>\n\n             <ion-item>\n\n             \n\n             \n\n              <ion-grid >\n\n                <ion-row  >\n\n                  <ion-col col-2 >\n\n                      <ion-item no-padding no-margin>\n\n                           \n\n                          <ion-checkbox [(ngModel)]="mu"></ion-checkbox>\n\n                        </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-2 >\n\n                    Name\n\n                  </ion-col>\n\n                  <ion-col col-2 offset-2>\n\n                   Experience \n\n                  </ion-col>\n\n                  <ion-col col-2 offset-1>\n\n                    Interview Date\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-grid>\n\n                <ion-row>\n\n                    <ion-col  col-2  > \n\n                     \n\n                        <ion-item no-padding no-margin>\n\n                           \n\n                            <ion-checkbox [(ngModel)]="mup"></ion-checkbox>\n\n                          </ion-item>\n\n                       \n\n                          \n\n                        \n\n                        \n\n                        \n\n\n\n                      </ion-col>\n\n                  <ion-col style="color:green;"  col-2 >\n\n                    Abey Abraham\n\n                  </ion-col>\n\n                  <ion-col style="color:lightseagreen;"  col-2 offset-2>\n\n                    2 years\n\n                  </ion-col>\n\n                  <ion-col  col-2 offset-1 >\n\n                  Not Set \n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-2 > \n\n                     \n\n                        <ion-item no-padding no-margin>\n\n                           \n\n                            <ion-checkbox [(ngModel)]="mups"></ion-checkbox>\n\n                          </ion-item>\n\n     \n\n\n\n                      </ion-col>\n\n                  <ion-col style="color:green;"  col-2>\n\n                    Tony Manuel\n\n                  </ion-col>\n\n                  <ion-col style="color:lightseagreen;"   col-2 offset-2>\n\n                    2 years\n\n                  </ion-col>\n\n                  <ion-col  col-2 offset-1>\n\n                 Not set \n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-label>Schedule Details</ion-label>\n\n            \n\n            </ion-item>\n\n\n\n              <!-- <ion-item>\n\n                <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n              </ion-item> -->\n\n             \n\n            \n\n          </ion-list>\n\n          <ion-item style = "overflow: hidden;" > \n\n                 \n\n            <ion-input type="text" placeholder="Interview Date " name="username" #username class="inp"></ion-input>\n\n           \n\n          \n\n            <ion-input type="text" placeholder="Time" name="username" #username class="inp"></ion-input>\n\n      \n\n          </ion-item>\n\n          <ion-item>\n\n        <ion-input type="text" placeholder="Contact Person " name="username" #username class="inp"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n        <ion-input type="text" placeholder="Contact Number" name="username" #username class="inp"></ion-input>\n\n  \n\n     \n\n    </ion-item>\n\n          \n\n           \n\n      </ion-slide>\n\n      <ion-slide>\n\n          \n\n          <ion-list style="margin-top: 90px;">\n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="SYSTEM ID" name="username" #username class="inp"></ion-input>\n\n                <ion-icon name="ios-laptop-outline" item-left></ion-icon>\n\n             \n\n              </ion-item>\n\n             <ion-item>\n\n              <ion-input  placeholder="CPU" name="password" #password class="inp"></ion-input> \n\n              <ion-icon name="md-cog" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="RAM" name="username" #username class="inp"></ion-input>\n\n                <ion-icon name="md-easel" item-left></ion-icon>\n\n              </ion-item>\n\n              <ion-item class="iont" > \n\n                  <ion-input type="text" placeholder="HARD DISK" name="username" #username class="inp"></ion-input>\n\n                  <ion-icon name="ios-analytics-outline" item-left></ion-icon>\n\n              </ion-item>\n\n              <ion-item class="iont" > \n\n                 \n\n                  <ion-input type="text" placeholder="KEY BOARD" name="username" #username class="inp"></ion-input>\n\n                  <ion-icon name="ios-calculator" item-left></ion-icon>\n\n                </ion-item>\n\n                <ion-item class="iont" > \n\n                  <ion-input type="text" placeholder="MOUSE" name="username" #username class="inp"></ion-input>\n\n                  <ion-icon name="logo-octocat" item-left></ion-icon>\n\n               \n\n              </ion-item>\n\n            \n\n              <div Class="ALI" >\n\n                 \n\n                  <button ion-button  round> SAVE</button>\n\n              </div>\n\n          </ion-list>\n\n          <ion-list>\n\n\n\n            <ion-item>\n\n              <ion-label>Pepperoni</ion-label>\n\n              <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>Sausage</ion-label>\n\n              <ion-checkbox [(ngModel)]="sausage" disabled="true"></ion-checkbox>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>Mushrooms</ion-label>\n\n              <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n\n            </ion-item>\n\n          \n\n          </ion-list>\n\n          \n\n          \n\n          \n\n         \n\n          \n\n      </ion-slide>\n\n      \n\n    </ion-slides>\n\n\n\n    \n\n  </ion-content>\n\n  \n\n  '/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\recruitment\recruitment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RecruitmentPage);
    return RecruitmentPage;
}());

//# sourceMappingURL=recruitment.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SystemsPage = /** @class */ (function () {
    function SystemsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page = 0;
        this.icons = "0";
        this.icons = "0";
    }
    SystemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecruitmentPage');
        this.slides.lockSwipes(true);
        // let  Headername="hello";
    };
    SystemsPage.prototype.selectedTab = function (ind) {
        this.slides.lockSwipes(false);
        this.slider.slideTo(ind);
        this.slides.lockSwipes(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], SystemsPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], SystemsPage.prototype, "slides", void 0);
    SystemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-systems',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\systems\systems.html"*/'<!--\n\n  Generated template for the SystemsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n  Generated template for the NewuserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>newuser</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n -->\n\n <!--\n\n <ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>{{Headername}}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  -->\n\n\n\n  \n\n\n\n\n\n\n\n  <ion-content>\n\n \n\n      <ion-segment [(ngModel)]="icons" color="primary">\n\n        <ion-segment-button value="0" placeholder="system"(click)="selectedTab(0)">\n\n         <!-- <ion-icon name="camera"></ion-icon>-->\n\n         New System\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n\n          <!--   <ion-icon name="ios-people"></ion-icon>-->\n\n          All Systems\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n  \n\n    <ion-slides #slider>\n\n      <ion-slide>\n\n          \n\n          <ion-list style="margin-top: 90px;">\n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="SYSTEM ID" name="username" #username class="inp"></ion-input>\n\n                <ion-icon name="ios-laptop-outline" item-left></ion-icon>\n\n             \n\n              </ion-item>\n\n             <ion-item>\n\n              <ion-input  placeholder="CPU" name="password" #password class="inp"></ion-input> \n\n              <ion-icon name="md-cog" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="RAM" name="username" #username class="inp"></ion-input>\n\n                <ion-icon name="md-easel" item-left></ion-icon>\n\n              </ion-item>\n\n              <ion-item class="iont" > \n\n                  <ion-input type="text" placeholder="HARD DISK" name="username" #username class="inp"></ion-input>\n\n                  <ion-icon name="ios-analytics-outline" item-left></ion-icon>\n\n              </ion-item>\n\n              <ion-item class="iont" > \n\n                 \n\n                  <ion-input type="text" placeholder="KEY BOARD" name="username" #username class="inp"></ion-input>\n\n                  <ion-icon name="ios-calculator" item-left></ion-icon>\n\n                </ion-item>\n\n                <ion-item class="iont" > \n\n                  <ion-input type="text" placeholder="MOUSE" name="username" #username class="inp"></ion-input>\n\n                  <ion-icon name="logo-octocat" item-left></ion-icon>\n\n               \n\n              </ion-item>\n\n            \n\n              <div Class="ALI" >\n\n                 \n\n                  <button ion-button  round> SAVE</button>\n\n              </div>\n\n          </ion-list>\n\n          \n\n          \n\n          \n\n         \n\n          \n\n      </ion-slide>\n\n      <ion-slide>\n\n          \n\n          <ion-list >\n\n              <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Search User" name="username" #username class="inp"></ion-input>\n\n                <ion-icon name="ios-search" item-right></ion-icon>\n\n              </ion-item>\n\n             <ion-item>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    Name\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    Position\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    Action\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col style="color:green;">\n\n                    Abey Abraham\n\n                  </ion-col>\n\n                  <ion-col style="color:lightseagreen;" >\n\n                    Intern\n\n                  </ion-col>\n\n                  <ion-col >\n\n                  <button ion-button round block >Edit</button>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n             </ion-item>\n\n             <ion-item>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col style="color:green;">\n\n                    Tony Manuel\n\n                  </ion-col>\n\n                  <ion-col style="color:lightseagreen;" >\n\n                    Intern\n\n                  </ion-col>\n\n                  <ion-col >\n\n                  <button ion-button round block  (click)="selectedTab(0)" >Edit</button>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n             </ion-item>\n\n              <!-- <ion-item>\n\n                <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n              </ion-item> -->\n\n             \n\n            \n\n          </ion-list>\n\n          \n\n           \n\n      </ion-slide>\n\n      \n\n    </ion-slides>\n\n  </ion-content>\n\n  \n\n  \n\n  \n\n  \n\n   <!-- \n\n  \n\n  \n\n  \n\n  \n\n  <ion-content padding>\n\n  <ion-list style="margin-top: 90px;">\n\n      <ion-item class="iont" > \n\n        <ion-input type="text" placeholder="First Name" name="username" #username class="inp"></ion-input>\n\n        <ion-icon name="person" item-left></ion-icon>\n\n     \n\n     <ion-item>\n\n        <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n      </ion-item> \n\n     \n\n      <ion-input  placeholder="Last Name" name="password" #password class="inp"></ion-input> \n\n    </ion-item>\n\n    <ion-item class="iont" > \n\n        <ion-input type="text" placeholder="Date of Birth" name="username" #username class="inp"></ion-input>\n\n        <ion-icon name="calendar" item-left></ion-icon>\n\n      </ion-item>\n\n      <ion-item class="iont" > \n\n          <ion-input type="text" placeholder="Mobile Number" name="username" #username class="inp"></ion-input>\n\n          <ion-icon name="ios-phone-portrait" item-left></ion-icon>\n\n      </ion-item>\n\n      <ion-item class="iont" > \n\n          <ion-input type="text" placeholder="Email ID" name="username" #username class="inp"></ion-input>\n\n          <ion-icon name="ios-mail-outline" item-left></ion-icon>\n\n      </ion-item>\n\n      <ion-item class="iont" > \n\n          <ion-input type="text" placeholder="Date of Join" name="username" #username class="inp"></ion-input>\n\n          <ion-icon name="calendar" item-left></ion-icon>\n\n      </ion-item>\n\n      <div Class="ALI" >\n\n         \n\n          <button ion-button  round> SAVE</button>\n\n      </div>\n\n  </ion-list>\n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  -->'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SystemsPage);
    return SystemsPage;
}());

//# sourceMappingURL=systems.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/newuser/newuser.module": [
		466,
		4
	],
	"../pages/profile/profile.module": [
		467,
		3
	],
	"../pages/recruitment/recruitment.module": [
		468,
		2
	],
	"../pages/systems/systems.module": [
		469,
		1
	],
	"../pages/tabs/tabs.module": [
		470,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(75);
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
            selector: 'page-add-it',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\add-it\add-it.html"*/'<!--\n\n  Generated template for the AddItPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title> Add IT infrastructure</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list no-line>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="System Serial Number" name="SystemSerialNumber" #SystemSerialNumber></ion-input>\n\n    </ion-item>\n\n  \n\n      <ion-item>\n\n      <ion-input type="email" placeholder="CPUSerialNumber" name="CPUSerialNumber" #CPUSerialNumber></ion-input>\n\n    </ion-item>\n\n  \n\n      <ion-item>\n\n      <ion-input type="number" placeholder="RAMSize" name="RAMSize" #RAMSize></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Harddisksize" name="Harddisksize" #Harddisksize></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="KeyboardSerialNumber" name="KeyboardSerialNumber" #KeyboardSerialNumber></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="mouseSerialNumber" name="mouseSerialNumber" #mouseSerialNumber></ion-input>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n \n\n  <div padding>\n\n  <button ion-button  round outline block (click)="additem()"> ADD ITEM </button>\n\n  </div>\n\n  <button  (click)="item()"> read ITEM </button>\n\n  </ion-content>'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\add-it\add-it.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddItPage);
    return AddItPage;
}());

//# sourceMappingURL=add-it.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_it_add_it__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_newuser_newuser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_botabs_botabs__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_systems_systems__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recruitment_recruitment__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var config = {
    apiKey: "AIzaSyCRDymxcDEMORc4U1TjW5_SKiB22G45buM",
    authDomain: "sopaa-b37c1.firebaseapp.com",
    databaseURL: "https://sopaa-b37c1.firebaseio.com",
    projectId: "sopaa-b37c1",
    storageBucket: "",
    messagingSenderId: "500138839182"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_it_add_it__["a" /* AddItPage */], __WEBPACK_IMPORTED_MODULE_17__pages_recruitment_recruitment__["a" /* RecruitmentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_newuser_newuser__["a" /* NewuserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_botabs_botabs__["a" /* BotabsPage */], __WEBPACK_IMPORTED_MODULE_16__pages_systems_systems__["a" /* SystemsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_it_add_it__["a" /* AddItPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_newuser_newuser__["a" /* NewuserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_botabs_botabs__["a" /* BotabsPage */], __WEBPACK_IMPORTED_MODULE_16__pages_systems_systems__["a" /* SystemsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_recruitment_recruitment__["a" /* RecruitmentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    RegisterPage.prototype.Register = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.email.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Email field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.mobile.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Mobile number field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.password.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://192.168.0.13:8080/project/register.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert_5 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_5.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list no-line>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Username" name="fullname" #username></ion-input>\n\n    </ion-item>\n\n  \n\n      <ion-item>\n\n      <ion-input type="email" placeholder="Email" name="email" #email></ion-input>\n\n    </ion-item>\n\n  \n\n      <ion-item>\n\n      <ion-input type="number" placeholder="Mobile Number" name="mobile" #mobile></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n \n\n  <div padding>\n\n  <button ion-button  round outline block (click)="Register()">Register</button>\n\n  </div>\n\n  \n\n  </ion-content>\n\n\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__ = __webpack_require__(80);
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
 * Generated class for the BotabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BotabsPage = /** @class */ (function () {
    function BotabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__["a" /* NewuserPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__["a" /* NewuserPage */];
    }
    BotabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BotabsPage');
    };
    BotabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-botabs',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\botabs\botabs.html"*/'<!--\n\n  Generated template for the BotabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="icons" color="secondary">\n\n      <ion-segment-button value="camera">\n\n        <ion-icon name="camera"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bookmark">\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Segment in content -->\n\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n\n    <ion-segment-button value="friends">\n\n      Friends\n\n    </ion-segment-button>\n\n    <ion-segment-button value="enemies">\n\n      Enemies\n\n    </ion-segment-button>\n\n    \n\n  </ion-segment>\n\n \n\n   Segment in a form \n\n  <form [formGroup]="myForm"> \n\n    <ion-segment formControlName="mapStyle" color="danger">\n\n      <ion-segment-button value="standard">\n\n        Standard\n\n      </ion-segment-button>\n\n      <ion-segment-button value="hybrid">\n\n        Hybrid\n\n      </ion-segment-button>\n\n      <ion-segment-button value="sat">\n\n        Satellite\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    </form> \n\n   \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\botabs\botabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BotabsPage);
    return BotabsPage;
}());

//# sourceMappingURL=botabs.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(41);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\home\home.html"*/' <!--  <ion-header no-border>\n\n<ion-navbar >\n\n  <ion-title>Login</ion-title>\n\n</ion-navbar>\n\n  </ion-header> -->\n\n <!--   // [hidden]="true" *navbar -->\n\n<ion-content class= "content_1">\n\n    <img src="assets/imgs/companylogo.png" class="logo">\n\n   <div class="height1">\n\n  <ion-list >\n\n    <ion-item class="iont" > \n\n      <ion-input type="text" placeholder="Username" name="username" #username class="inp"></ion-input>\n\n      <ion-icon name="person" item-left></ion-icon>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n    </ion-item> -->\n\n    <ion-item class="iont">\n\n    <ion-input type="password" placeholder="Password" name="password" #password class="inp"></ion-input> <ion-icon name="ios-eye" item-left></ion-icon>\n\n  </ion-item>\n\n  <div class="click_down">\n\n    <button ion-button round block (click)="signIn()">Sign In</button>\n\n    <p>\n\n   <a href="https://www.christuniversity.in/" class="fp">Forgot password?</a></p>\n\n   <button ion-button round outline block (click)="signUp()">Register</button> \n\n  </div>\n\n  </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewuserPage = /** @class */ (function () {
    function NewuserPage(navCtrl, fdb, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.fdb = fdb;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        /*trying to display
        public items: Array<any> = [];
      public itemRef: firebase.database.Reference = firebase.database().ref('/items');
        
        */
        this.items = [];
        this.itemRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/users/");
        this.arrData = [];
        this.page = 0;
        this.userItem = {};
        this.icons = "0";
        this.icons = "0";
    }
    NewuserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.itemRef.on('value', function (itemSnapshot) {
            _this.items = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.items.push(itemSnap.val());
                console.log(_this.items);
                return false;
            });
        });
    };
    NewuserPage.prototype.selectedTab = function (ind) {
        this.slides.lockSwipes(false);
        this.slider.slideTo(ind);
        this.slides.lockSwipes(true);
    };
    NewuserPage.prototype.s = function (keys) {
        console.log(keys);
        this.userItemRef$.remove(keys);
    };
    NewuserPage.prototype.btn = function (userItem) {
        //this.glu = this.firebaseApp.database().ref().child("/child/").push().key;
        var ref = this.fdb.list("users").query.ref.push();
        ref.set({
            key: ref.key,
            fname: this.userItem.fname,
            lname: this.userItem.lname,
            dob: this.userItem.dob,
            mobile: this.userItem.mobile,
            email: this.userItem.email,
            doj: this.userItem.doj
        });
        console.log(ref.key);
        var alert = this.alertCtrl.create({
            title: "SUCCESS",
            subTitle: "New User has been added succesfuly ",
            buttons: ['OK']
        });
        alert.present();
        this.userItem.fname = "";
        this.userItem.lname = "";
        this.userItem.mobile = "";
        this.userItem.dob = "";
        this.userItem.doj = "";
        this.userItem.email = "";
    };
    NewuserPage.prototype.collect = function (keys, fname, lname, dob, mobile, email, doj) {
        this.userItem.fname = fname;
        this.userItem.lname = lname;
        this.userItem.mobile = mobile;
        this.userItem.dob = dob;
        this.userItem.doj = doj;
        this.userItem.email = email;
        console.log("hey");
        this.slides.lockSwipes(false);
        this.slider.slideTo(0);
        this.slides.lockSwipes(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _a || Object)
    ], NewuserPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _b || Object)
    ], NewuserPage.prototype, "slides", void 0);
    NewuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newuser',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\newuser\newuser.html"*/'<!--\n\n  Generated template for the NewuserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Users</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n<!--\n\n\n\n <ion-header>\n\n  <ion-toolbar>-->\n\n   \n\n    <!--\n\n  </ion-toolbar>\n\n</ion-header>-->\n\n<ion-content>\n\n    <ion-segment [(ngModel)]="icons" color="primary">\n\n        <ion-segment-button value="0" placeholder="First Name"(click)="selectedTab(0)"  aria-pressed="true">\n\n         <!-- <ion-icon name="person"></ion-icon> -->\n\n         New User\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n\n        <!--   <ion-icon name="ios-people"></ion-icon> --> \n\n        All User\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n  <ion-slides #slider>\n\n    <ion-slide>\n\n        \n\n        <ion-list style="margin-top: 90px;">\n\n            <ion-item class="iont" > \n\n              <ion-input type="text" placeholder="First Name" name="username" #ffname class="inp" [(ngModel)]="userItem.fname"></ion-input>\n\n              <ion-icon name="person" item-left></ion-icon>\n\n           \n\n            </ion-item>\n\n          <ion-item>\n\n            <ion-input  placeholder="Last Name" name="password" #llname class="inp" [(ngModel)]="userItem.lname"></ion-input> \n\n          </ion-item>\n\n          <ion-item class="iont" > \n\n              <ion-input type="text" placeholder="Date of Birth" name="username" #ddob class="inp" [(ngModel)]="userItem.dob"></ion-input>\n\n              <ion-icon name="calendar" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Mobile Number" name="username" #mmobile class="inp" [(ngModel)]="userItem.mobile"></ion-input>\n\n                <ion-icon name="ios-phone-portrait" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Email ID" name="username" #eemail class="inp" [(ngModel)]="userItem.email"></ion-input>\n\n                <ion-icon name="ios-mail-outline" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item class="iont" > \n\n                <ion-input type="text" placeholder="Date of Join" name="username" #ddoj class="inp" [(ngModel)]="userItem.doj"></ion-input>\n\n                <ion-icon name="calendar" item-left></ion-icon>\n\n            </ion-item>\n\n          \n\n            \n\n            <div Class="ALI" >\n\n               \n\n              <button ion-button  (click)="btn(userItem)" round> SAVEe</button>\n\n          </div>\n\n           <!--\n\n          <div Class="ALI" >\n\n               \n\n            <button ion-button  (click)= "createPerson(fname, lname)" round> SAVErrrr</button>\n\n        </div>-->\n\n        </ion-list>\n\n        \n\n        \n\n        \n\n       \n\n        \n\n    </ion-slide>\n\n    <ion-slide>\n\n        \n\n        <ion-list >\n\n            <ion-item class="iont" > \n\n              <ion-input type="text" placeholder="Search User" name="username" #username class="inp"></ion-input>\n\n              <ion-icon name="ios-search" item-right></ion-icon>\n\n            </ion-item>\n\n           <ion-item>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                  Name\n\n                </ion-col>\n\n                <ion-col>\n\n                  Position\n\n                </ion-col>\n\n                <ion-col>\n\n                  Action\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n           </ion-item>\n\n          \n\n           <ion-item>\n\n            <ion-grid>\n\n              <ion-row *ngFor="let item of items" >\n\n                <ion-col style="color:green;"  >\n\n                  \n\n                    {{ item.fname }}\n\n                 \n\n                </ion-col>\n\n                <ion-col style="color:lightseagreen;"  >\n\n                  {{item.lname}}\n\n                </ion-col>\n\n                <ion-col >\n\n                <button ion-button round block  (click)="s(item.key)" >Delete</button>\n\n                </ion-col>\n\n                <ion-col >\n\n                  <button ion-button round block  (click)="collect(item.key,item.fname,item.lname,item.dob,item.mobile,item.email,item.doj)" >Edit</button>\n\n                \n\n                \n\n              </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n           </ion-item>\n\n            <!-- <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n            </ion-item> -->\n\n           \n\n          \n\n        </ion-list>\n\n        \n\n         \n\n    </ion-slide>\n\n    \n\n  </ion-slides>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n <!-- \n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n<ion-list style="margin-top: 90px;">\n\n    <ion-item class="iont" > \n\n      <ion-input type="text" placeholder="First Name" name="username" #username class="inp"></ion-input>\n\n      <ion-icon name="person" item-left></ion-icon>\n\n   \n\n   <ion-item>\n\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n    </ion-item> \n\n   \n\n    <ion-input  placeholder="Last Name" name="password" #password class="inp"></ion-input> \n\n  </ion-item>\n\n  <ion-item class="iont" > \n\n      <ion-input type="text" placeholder="Date of Birth" name="username" #username class="inp"></ion-input>\n\n      <ion-icon name="calendar" item-left></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="iont" > \n\n        <ion-input type="text" placeholder="Mobile Number" name="username" #username class="inp"></ion-input>\n\n        <ion-icon name="ios-phone-portrait" item-left></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="iont" > \n\n        <ion-input type="text" placeholder="Email ID" name="username" #username class="inp"></ion-input>\n\n        <ion-icon name="ios-mail-outline" item-left></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="iont" > \n\n        <ion-input type="text" placeholder="Date of Join" name="username" #username class="inp"></ion-input>\n\n        <ion-icon name="calendar" item-left></ion-icon>\n\n    </ion-item>\n\n    <div Class="ALI" >\n\n       \n\n        <button ion-button  round> SAVE</button>\n\n    </div>\n\n</ion-list>\n\n\n\n\n\n\n\n</ion-content>\n\n-->'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\newuser\newuser.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], NewuserPage);
    return NewuserPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=newuser.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map