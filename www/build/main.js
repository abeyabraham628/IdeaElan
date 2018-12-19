webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_it_add_it__ = __webpack_require__(161);
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
            selector: 'page-profile',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-item *ngFor="let item of items" >\n  <h2>Welcome {{item.username}}</h2>\n  <h3>Your profile information is as follows:</h3>\n  <ion-row>\n    <ion-col col-4>\n     Password\n    </ion-col>\n    <ion-col col-8>\n  {{item.password}}\n    </ion-col>\n \n</ion-row>\n<ion-row>\n    <ion-col col-4>\n      Telephone\n    </ion-col>\n    <ion-col col-8>\n  {{item.telephone}}\n    </ion-col>\n \n</ion-row>\n<ion-row>\n    <ion-col col-4>\n    Email \n    </ion-col>\n    <ion-col col-8>\n  {{item.email}}\n    </ion-col>\n \n</ion-row>\n<div padding>\n  <button ion-button  round outline block (click)="run()"> ADD ITEM </button>\n  </div>\n </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recruitment_recruitment__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems_systems__ = __webpack_require__(108);
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
            selector: 'page-tabs',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\tabs\tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n<ion-header>\n\n  <ion-navbar>\n    <ion-title toolbar-ios-title-text-align="center"> USERS</ion-title>\n  </ion-navbar>\ntabsPlacement = "top"\n</ion-header>\n-->\n\n<ion-content padding>\n    <ion-tabs  >\n        <ion-tab [root]="tab1Root"  class="clr" tabTitle="USER" tabIcon="ios-contact"> USER</ion-tab>\n        <ion-tab [root]="tab2Root" tabTitle="SYSTEM" tabIcon="ios-people">ALL USERS</ion-tab>\n        <ion-tab [root]="tab3Root" tabTitle="RECRUITMENTS" tabIcon="ios-people">ALL USERS</ion-tab>\n        \n        \n        \n       \n      </ion-tabs>\n    </ion-content>\n   \n\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    }
    RecruitmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecruitmentPage');
    };
    RecruitmentPage.prototype.selectedTab = function (ind) {
        this.slider.slideTo(ind);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _a || Object)
    ], RecruitmentPage.prototype, "slider", void 0);
    RecruitmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recruitment',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\recruitment\recruitment.html"*/'<!--\n  Generated template for the RecruitmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recruitment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content>\n \n      <ion-segment [(ngModel)]="icons" color="primary">\n        <ion-segment-button value="0" placeholder="system"(click)="selectedTab(0)">\n         <!-- <ion-icon name="camera"></ion-icon>-->\n         New Applicant\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n          <!--   <ion-icon name="ios-people"></ion-icon>-->\n          Schedules\n        </ion-segment-button>\n        <ion-segment-button value="2" (click)="selectedTab(2)">\n          <!--   <ion-icon name="ios-people"></ion-icon>-->\n          Interviews\n        </ion-segment-button>\n      </ion-segment>\n      \n  \n    <ion-slides #slider>\n      <ion-slide>\n          \n          <ion-list style="margin-top: 90px;">\n              <ion-item class="iont" > \n                <ion-input type="text" placeholder="SYSTEM ID" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-laptop-outline" item-left></ion-icon>\n             \n              </ion-item>\n             <ion-item>\n              <ion-input  placeholder="CPU" name="password" #password class="inp"></ion-input> \n              <ion-icon name="md-cog" item-left></ion-icon>\n            </ion-item>\n            <ion-item class="iont" > \n                <ion-input type="text" placeholder="RAM" name="username" #username class="inp"></ion-input>\n                <ion-icon name="md-easel" item-left></ion-icon>\n              </ion-item>\n              <ion-item class="iont" > \n                  <ion-input type="text" placeholder="HARD DISK" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="ios-analytics-outline" item-left></ion-icon>\n              </ion-item>\n              <ion-item class="iont" > \n                 \n                  <ion-input type="text" placeholder="KEY BOARD" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="ios-calculator" item-left></ion-icon>\n                </ion-item>\n                <ion-item class="iont" > \n                  <ion-input type="text" placeholder="MOUSE" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="logo-octocat" item-left></ion-icon>\n               \n              </ion-item>\n            \n              <div Class="ALI" >\n                 \n                  <button ion-button  round> SAVE</button>\n              </div>\n          </ion-list>\n          \n          \n          \n         \n          \n      </ion-slide>\n      <ion-slide>\n          \n          <ion-list >\n              <ion-item class="iont" > \n                <ion-input type="text" placeholder="Search User" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-search" item-right></ion-icon>\n              </ion-item>\n             <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    Name\n                  </ion-col>\n                  <ion-col>\n                   Experience \n                  </ion-col>\n                  <ion-col>\n                    Interview Date\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n             </ion-item>\n             <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col style="color:green;">\n                    Abey Abraham\n                  </ion-col>\n                  <ion-col style="color:lightseagreen;" >\n                    2 years\n                  </ion-col>\n                  <ion-col >\n                  <button ion-button round block >Edit</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n             </ion-item>\n             <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col style="color:green;">\n                    Tony Manuel\n                  </ion-col>\n                  <ion-col style="color:lightseagreen;" >\n                    2 years\n                  </ion-col>\n                  <ion-col >\n                  <button ion-button round block  (click)="selectedTab(0)" >Edit</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n             </ion-item>\n              <!-- <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n              </ion-item> -->\n             \n            \n          </ion-list>\n          \n           \n      </ion-slide>\n      <ion-slide>\n          \n          <ion-list style="margin-top: 90px;">\n              <ion-item class="iont" > \n                <ion-input type="text" placeholder="SYSTEM ID" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-laptop-outline" item-left></ion-icon>\n             \n              </ion-item>\n             <ion-item>\n              <ion-input  placeholder="CPU" name="password" #password class="inp"></ion-input> \n              <ion-icon name="md-cog" item-left></ion-icon>\n            </ion-item>\n            <ion-item class="iont" > \n                <ion-input type="text" placeholder="RAM" name="username" #username class="inp"></ion-input>\n                <ion-icon name="md-easel" item-left></ion-icon>\n              </ion-item>\n              <ion-item class="iont" > \n                  <ion-input type="text" placeholder="HARD DISK" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="ios-analytics-outline" item-left></ion-icon>\n              </ion-item>\n              <ion-item class="iont" > \n                 \n                  <ion-input type="text" placeholder="KEY BOARD" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="ios-calculator" item-left></ion-icon>\n                </ion-item>\n                <ion-item class="iont" > \n                  <ion-input type="text" placeholder="MOUSE" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="logo-octocat" item-left></ion-icon>\n               \n              </ion-item>\n            \n              <div Class="ALI" >\n                 \n                  <button ion-button  round> SAVE</button>\n              </div>\n          </ion-list>\n          \n          \n          \n         \n          \n      </ion-slide>\n      \n    </ion-slides>\n\n    \n  </ion-content>\n  \n  '/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\recruitment\recruitment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
    ], RecruitmentPage);
    return RecruitmentPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=recruitment.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    }
    SystemsPage.prototype.selectedTab = function (ind) {
        this.slider.slideTo(ind);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], SystemsPage.prototype, "slider", void 0);
    SystemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-systems',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\systems\systems.html"*/'<!--\n  Generated template for the SystemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the NewuserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newuser</ion-title>\n  </ion-navbar>\n\n</ion-header>\n -->\n <ion-header>\n\n    <ion-navbar>\n      <ion-title>Systems</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n  \n\n\n\n  <ion-content>\n \n      <ion-segment [(ngModel)]="icons" color="primary">\n        <ion-segment-button value="0" placeholder="system"(click)="selectedTab(0)">\n         <!-- <ion-icon name="camera"></ion-icon>-->\n         New System\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n          <!--   <ion-icon name="ios-people"></ion-icon>-->\n          All Systems\n        </ion-segment-button>\n      </ion-segment>\n  \n    <ion-slides #slider>\n      <ion-slide>\n          \n          <ion-list style="margin-top: 90px;">\n              <ion-item class="iont" > \n                <ion-input type="text" placeholder="SYSTEM ID" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-laptop-outline" item-left></ion-icon>\n             \n              </ion-item>\n             <ion-item>\n              <ion-input  placeholder="CPU" name="password" #password class="inp"></ion-input> \n              <ion-icon name="md-cog" item-left></ion-icon>\n            </ion-item>\n            <ion-item class="iont" > \n                <ion-input type="text" placeholder="RAM" name="username" #username class="inp"></ion-input>\n                <ion-icon name="md-easel" item-left></ion-icon>\n              </ion-item>\n              <ion-item class="iont" > \n                  <ion-input type="text" placeholder="HARD DISK" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="ios-analytics-outline" item-left></ion-icon>\n              </ion-item>\n              <ion-item class="iont" > \n                 \n                  <ion-input type="text" placeholder="KEY BOARD" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="ios-calculator" item-left></ion-icon>\n                </ion-item>\n                <ion-item class="iont" > \n                  <ion-input type="text" placeholder="MOUSE" name="username" #username class="inp"></ion-input>\n                  <ion-icon name="logo-octocat" item-left></ion-icon>\n               \n              </ion-item>\n            \n              <div Class="ALI" >\n                 \n                  <button ion-button  round> SAVE</button>\n              </div>\n          </ion-list>\n          \n          \n          \n         \n          \n      </ion-slide>\n      <ion-slide>\n          \n          <ion-list >\n              <ion-item class="iont" > \n                <ion-input type="text" placeholder="Search User" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-search" item-right></ion-icon>\n              </ion-item>\n             <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    Name\n                  </ion-col>\n                  <ion-col>\n                    Position\n                  </ion-col>\n                  <ion-col>\n                    Action\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n             </ion-item>\n             <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col style="color:green;">\n                    Abey Abraham\n                  </ion-col>\n                  <ion-col style="color:lightseagreen;" >\n                    Intern\n                  </ion-col>\n                  <ion-col >\n                  <button ion-button round block >Edit</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n             </ion-item>\n             <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col style="color:green;">\n                    Tony Manuel\n                  </ion-col>\n                  <ion-col style="color:lightseagreen;" >\n                    Intern\n                  </ion-col>\n                  <ion-col >\n                  <button ion-button round block  (click)="selectedTab(0)" >Edit</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n             </ion-item>\n              <!-- <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n              </ion-item> -->\n             \n            \n          </ion-list>\n          \n           \n      </ion-slide>\n      \n    </ion-slides>\n  </ion-content>\n  \n  \n  \n  \n   <!-- \n  \n  \n  \n  \n  <ion-content padding>\n  <ion-list style="margin-top: 90px;">\n      <ion-item class="iont" > \n        <ion-input type="text" placeholder="First Name" name="username" #username class="inp"></ion-input>\n        <ion-icon name="person" item-left></ion-icon>\n     \n     <ion-item>\n        <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n      </ion-item> \n     \n      <ion-input  placeholder="Last Name" name="password" #password class="inp"></ion-input> \n    </ion-item>\n    <ion-item class="iont" > \n        <ion-input type="text" placeholder="Date of Birth" name="username" #username class="inp"></ion-input>\n        <ion-icon name="calendar" item-left></ion-icon>\n      </ion-item>\n      <ion-item class="iont" > \n          <ion-input type="text" placeholder="Mobile Number" name="username" #username class="inp"></ion-input>\n          <ion-icon name="ios-phone-portrait" item-left></ion-icon>\n      </ion-item>\n      <ion-item class="iont" > \n          <ion-input type="text" placeholder="Email ID" name="username" #username class="inp"></ion-input>\n          <ion-icon name="ios-mail-outline" item-left></ion-icon>\n      </ion-item>\n      <ion-item class="iont" > \n          <ion-input type="text" placeholder="Date of Join" name="username" #username class="inp"></ion-input>\n          <ion-icon name="calendar" item-left></ion-icon>\n      </ion-item>\n      <div Class="ALI" >\n         \n          <button ion-button  round> SAVE</button>\n      </div>\n  </ion-list>\n  \n  \n  \n  </ion-content>\n  -->'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SystemsPage);
    return SystemsPage;
}());

//# sourceMappingURL=systems.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/newuser/newuser.module": [
		287,
		4
	],
	"../pages/profile/profile.module": [
		288,
		3
	],
	"../pages/recruitment/recruitment.module": [
		289,
		2
	],
	"../pages/systems/systems.module": [
		290,
		1
	],
	"../pages/tabs/tabs.module": [
		291,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
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
            selector: 'page-add-it',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\add-it\add-it.html"*/'<!--\n  Generated template for the AddItPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Add IT infrastructure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="System Serial Number" name="SystemSerialNumber" #SystemSerialNumber></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="CPUSerialNumber" name="CPUSerialNumber" #CPUSerialNumber></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="RAMSize" name="RAMSize" #RAMSize></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Harddisksize" name="Harddisksize" #Harddisksize></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="KeyboardSerialNumber" name="KeyboardSerialNumber" #KeyboardSerialNumber></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="mouseSerialNumber" name="mouseSerialNumber" #mouseSerialNumber></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="additem()"> ADD ITEM </button>\n  </div>\n  <button  (click)="item()"> read ITEM </button>\n  </ion-content>'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\add-it\add-it.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddItPage);
    return AddItPage;
}());

//# sourceMappingURL=add-it.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_it_add_it__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_newuser_newuser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_botabs_botabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_systems_systems__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recruitment_recruitment__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(47);
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
            selector: 'page-register',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" name="fullname" #username></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="Email" name="email" #email></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="Mobile Number" name="mobile" #mobile></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="Register()">Register</button>\n  </div>\n  \n  </ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__ = __webpack_require__(53);
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
            selector: 'page-botabs',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\botabs\botabs.html"*/'<!--\n  Generated template for the BotabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="icons" color="secondary">\n      <ion-segment-button value="camera">\n        <ion-icon name="camera"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="bookmark">\n        <ion-icon name="bookmark"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="friends">\n      Friends\n    </ion-segment-button>\n    <ion-segment-button value="enemies">\n      Enemies\n    </ion-segment-button>\n    \n  </ion-segment>\n \n   Segment in a form \n  <form [formGroup]="myForm"> \n    <ion-segment formControlName="mapStyle" color="danger">\n      <ion-segment-button value="standard">\n        Standard\n      </ion-segment-button>\n      <ion-segment-button value="hybrid">\n        Hybrid\n      </ion-segment-button>\n      <ion-segment-button value="sat">\n        Satellite\n      </ion-segment-button>\n    </ion-segment>\n    </form> \n   \n    \n</ion-content>\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\botabs\botabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BotabsPage);
    return BotabsPage;
}());

//# sourceMappingURL=botabs.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(47);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\home\home.html"*/' <!--  <ion-header no-border>\n<ion-navbar >\n  <ion-title>Login</ion-title>\n</ion-navbar>\n  </ion-header> -->\n <!--   // [hidden]="true" *navbar -->\n<ion-content class= "content_1">\n    <img src="assets/imgs/companylogo.png" class="logo">\n   <div class="height1">\n  <ion-list >\n    <ion-item class="iont" > \n      <ion-input type="text" placeholder="Username" name="username" #username class="inp"></ion-input>\n      <ion-icon name="person" item-left></ion-icon>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item> -->\n    <ion-item class="iont">\n    <ion-input type="password" placeholder="Password" name="password" #password class="inp"></ion-input> <ion-icon name="ios-eye" item-left></ion-icon>\n  </ion-item>\n  <div class="click_down">\n    <button ion-button round block (click)="signIn()">Sign In</button>\n    <p>\n   <a href="https://www.christuniversity.in/" class="fp">Forgot password?</a></p>\n   <button ion-button round outline block (click)="signUp()">Register</button> \n  </div>\n  </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewuserPage = /** @class */ (function () {
    function NewuserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page = 0;
    }
    NewuserPage.prototype.selectedTab = function (ind) {
        this.slider.slideTo(ind);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], NewuserPage.prototype, "slider", void 0);
    NewuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newuser',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\newuser\newuser.html"*/'<!--\n  Generated template for the NewuserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n\n <ion-header>\n  <ion-toolbar>-->\n   \n    <!--\n  </ion-toolbar>\n</ion-header>-->\n<ion-content>\n    <ion-segment [(ngModel)]="icons" color="primary">\n        <ion-segment-button value="0" placeholder="First Name"(click)="selectedTab(0)">\n         <!-- <ion-icon name="person"></ion-icon> -->\n         New User\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n        <!--   <ion-icon name="ios-people"></ion-icon> --> \n        All User\n        </ion-segment-button>\n      </ion-segment>\n  <ion-slides #slider>\n    <ion-slide>\n        \n        <ion-list style="margin-top: 90px;">\n            <ion-item class="iont" > \n              <ion-input type="text" placeholder="First Name" name="username" #username class="inp"></ion-input>\n              <ion-icon name="person" item-left></ion-icon>\n           \n           <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n            </ion-item> \n           \n            <ion-input  placeholder="Last Name" name="password" #password class="inp"></ion-input> \n          </ion-item>\n          <ion-item class="iont" > \n              <ion-input type="text" placeholder="Date of Birth" name="username" #username class="inp"></ion-input>\n              <ion-icon name="calendar" item-left></ion-icon>\n            </ion-item>\n            <ion-item class="iont" > \n                <ion-input type="text" placeholder="Mobile Number" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-phone-portrait" item-left></ion-icon>\n            </ion-item>\n            <ion-item class="iont" > \n                <ion-input type="text" placeholder="Email ID" name="username" #username class="inp"></ion-input>\n                <ion-icon name="ios-mail-outline" item-left></ion-icon>\n            </ion-item>\n            <ion-item class="iont" > \n                <ion-input type="text" placeholder="Date of Join" name="username" #username class="inp"></ion-input>\n                <ion-icon name="calendar" item-left></ion-icon>\n            </ion-item>\n            <div Class="ALI" >\n               \n                <button ion-button  round> SAVE</button>\n            </div>\n        </ion-list>\n        \n        \n        \n       \n        \n    </ion-slide>\n    <ion-slide>\n        \n        <ion-list >\n            <ion-item class="iont" > \n              <ion-input type="text" placeholder="Search User" name="username" #username class="inp"></ion-input>\n              <ion-icon name="ios-search" item-right></ion-icon>\n            </ion-item>\n           <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  Name\n                </ion-col>\n                <ion-col>\n                  Position\n                </ion-col>\n                <ion-col>\n                  Action\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n           </ion-item>\n           <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col style="color:green;">\n                  Abey Abraham\n                </ion-col>\n                <ion-col style="color:lightseagreen;" >\n                  Intern\n                </ion-col>\n                <ion-col >\n                <button ion-button round block >Edit</button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n           </ion-item>\n           <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col style="color:green;">\n                  Tony Manuel\n                </ion-col>\n                <ion-col style="color:lightseagreen;" >\n                  Intern\n                </ion-col>\n                <ion-col >\n                <button ion-button round block  (click)="selectedTab(0)" >Edit</button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n           </ion-item>\n            <!-- <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n            </ion-item> -->\n           \n          \n        </ion-list>\n        \n         \n    </ion-slide>\n    \n  </ion-slides>\n</ion-content>\n\n\n\n\n <!-- \n\n\n\n\n<ion-content padding>\n<ion-list style="margin-top: 90px;">\n    <ion-item class="iont" > \n      <ion-input type="text" placeholder="First Name" name="username" #username class="inp"></ion-input>\n      <ion-icon name="person" item-left></ion-icon>\n   \n   <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item> \n   \n    <ion-input  placeholder="Last Name" name="password" #password class="inp"></ion-input> \n  </ion-item>\n  <ion-item class="iont" > \n      <ion-input type="text" placeholder="Date of Birth" name="username" #username class="inp"></ion-input>\n      <ion-icon name="calendar" item-left></ion-icon>\n    </ion-item>\n    <ion-item class="iont" > \n        <ion-input type="text" placeholder="Mobile Number" name="username" #username class="inp"></ion-input>\n        <ion-icon name="ios-phone-portrait" item-left></ion-icon>\n    </ion-item>\n    <ion-item class="iont" > \n        <ion-input type="text" placeholder="Email ID" name="username" #username class="inp"></ion-input>\n        <ion-icon name="ios-mail-outline" item-left></ion-icon>\n    </ion-item>\n    <ion-item class="iont" > \n        <ion-input type="text" placeholder="Date of Join" name="username" #username class="inp"></ion-input>\n        <ion-icon name="calendar" item-left></ion-icon>\n    </ion-item>\n    <div Class="ALI" >\n       \n        <button ion-button  round> SAVE</button>\n    </div>\n</ion-list>\n\n\n\n</ion-content>\n-->'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app\src\pages\newuser\newuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NewuserPage);
    return NewuserPage;
}());

//# sourceMappingURL=newuser.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map