webpackJsonp([24],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin__ = __webpack_require__(836);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__admin__["a" /* AdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__admin__["a" /* AdminPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
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
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams) {
        //this.roles=navParams.get('roles')
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.users = true;
        this.recruitment = true;
        this.systems = true;
        this.policy = true;
        this.leaveRequest = true;
        this.sendMessage = true;
        if (this.roles[0] != "null") {
            this.users = false;
            this.recruitment = false;
            this.systems = false;
            this.policy = false;
            this.leaveRequest = false;
            this.sendMessage = false;
        }
        if (this.roles[1] != "null")
            this.leaveRequest = false;
        if (this.roles[2] != null)
            this.policy = false;
        if (this.roles[3] != "null")
            this.sendMessage = false;
        if (this.roles[4] != "null")
            this.recruitment = false;
        if (this.roles[5] != "null")
            this.systems = false;
        if (this.roles[6] != "null")
            this.users = false;
    }
    AdminPage.prototype.goto = function (page) {
        this.navCtrl.push(page);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"F:\ionic-app\src\pages\admin\admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <page-header pageTitle="ADMINISTRATOR"></page-header>\n  </ion-header>\n\n<ion-footer padding class="privilleges" >\n    <h5>Control Panel</h5>\n    <ion-list no-lines>\n      <button ion-item  (click)="goto(\'NewuserPage\')" [hidden]=users >\n          Users\n      </button>\n      \n   \n        <button ion-item  (click)="goto(\'SystemsPage\')" [hidden]=systems >\n            Systems\n        </button>\n      \n        <button ion-item (click)="goto(\'RecruitmentPage\')" [hidden]=recruitment>\n          Recruitment\n       </button>\n     \n       \n            <button ion-item  (click)="goto(\'LeavesAdminPage\')" [hidden]=leaveRequest>\n               Leave Request\n               <ion-badge color="danger">{{lrstatus.length}}</ion-badge>\n            </button>\n         \n              <button ion-item   (click)="goto(\'UploadEventsPage\')" [hidden]="sendMessage">\n                  Send Message\n              </button>\n            </ion-list>\n            \n    \n  </ion-footer>\n'/*ion-inline-end:"F:\ionic-app\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ })

});
//# sourceMappingURL=24.js.map