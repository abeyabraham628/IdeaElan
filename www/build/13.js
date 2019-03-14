webpackJsonp([13],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancehistoryPageModule", function() { return MaintenancehistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maintenancehistory__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaintenancehistoryPageModule = /** @class */ (function () {
    function MaintenancehistoryPageModule() {
    }
    MaintenancehistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__maintenancehistory__["a" /* MaintenancehistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__maintenancehistory__["a" /* MaintenancehistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MaintenancehistoryPageModule);
    return MaintenancehistoryPageModule;
}());

//# sourceMappingURL=maintenancehistory.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenancehistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the MaintenancehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaintenancehistoryPage = /** @class */ (function () {
    function MaintenancehistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.history = this.navParams.data;
        console.log(this.history);
    }
    MaintenancehistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaintenancehistoryPage');
    };
    var _a, _b;
    MaintenancehistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maintenancehistory',template:/*ion-inline-start:"F:\ionic-app\src\pages\maintenancehistory\maintenancehistory.html"*/'<!--\n  Generated template for the MaintenancehistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <navbar pageTitle="Maintenance History"></navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-row class="table-title">\n      <ion-col col-4 >Date</ion-col>\n      \n      \n      <ion-col col-3 >Item Changed</ion-col>\n      <ion-col col-5 >User</ion-col>\n    \n    </ion-row>\n  </ion-item>\n  \n\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\maintenancehistory\maintenancehistory.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" ? _b : Object])
    ], MaintenancehistoryPage);
    return MaintenancehistoryPage;
}());

//# sourceMappingURL=maintenancehistory.js.map

/***/ })

});
//# sourceMappingURL=13.js.map