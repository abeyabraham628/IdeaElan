webpackJsonp([10],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesAdminPageModule", function() { return LeavesAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaves_admin__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeavesAdminPageModule = /** @class */ (function () {
    function LeavesAdminPageModule() {
    }
    LeavesAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leaves_admin__["a" /* LeavesAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__leaves_admin__["a" /* LeavesAdminPage */]),
            ],
        })
    ], LeavesAdminPageModule);
    return LeavesAdminPageModule;
}());

//# sourceMappingURL=leaves-admin.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
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
 * Generated class for the LeavesAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavesAdminPage = /** @class */ (function () {
    function LeavesAdminPage(modalCtrl, navCtrl, navParams, firebase) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.leaveRequests = [];
        this.leaves = 'leaveRequests';
        this.viewLeaveRequest();
    }
    LeavesAdminPage.prototype.viewLeaveRequest = function () {
        var leaveRequests = [];
        this.firebase.database.ref("EmployeeLeaves").orderByChild('status').equalTo('pending').on("value", function (snap) {
            snap.forEach(function (child) {
                leaveRequests.push(__assign({ $key: child.key }, child.val()));
            });
        });
        this.leaveRequests = leaveRequests.reverse();
    };
    LeavesAdminPage.prototype.openModal = function (page, data) {
        var modal = this.modalCtrl.create(page, { "userDetails": data });
        modal.present();
    };
    LeavesAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-leaves-admin',template:/*ion-inline-start:"D:\IdeaElan\src\pages\leaves-admin\leaves-admin.html"*/'<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>Leave</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-header>\n\n  \n\n\n\n\n\n\n\n  <ion-content>\n\n \n\n      <ion-segment [(ngModel)]="leaves" color="white" >\n\n         <ion-segment-button value="leaveRequests">\n\n            Leave Requests\n\n         </ion-segment-button>\n\n         <ion-segment-button value="leaveHistory" >\n\n          History\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="leaves">\n\n    <div *ngSwitchCase="\'leaveRequests\'">\n\n    \n\n      <ion-card (click)="openModal(\'ApproveLeavePage\',user)" *ngFor="let user of leaveRequests">\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/companylogo.png">\n\n          </ion-avatar>\n\n          <h2>{{user.name}}</h2>\n\n          <p>{{user.leaveType}}</p>\n\n        </ion-item>\n\n        \n\n        \n\n      </ion-card>\n\n    \n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n\n     \n\n      <ion-item>\n\n        <ion-row class="table-title">\n\n          <ion-col col-4 >System Id</ion-col>\n\n          <ion-col col-3 >RAM</ion-col>\n\n          <ion-col col-3 >HDD</ion-col>\n\n          <ion-col col-2 >Antivirus</ion-col>\n\n          <ion-col hidden col-2 >View</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item *ngFor="let system of systemArray">\n\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avValidity}} Days</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"D:\IdeaElan\src\pages\leaves-admin\leaves-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], LeavesAdminPage);
    return LeavesAdminPage;
}());

//# sourceMappingURL=leaves-admin.js.map

/***/ })

});
//# sourceMappingURL=10.js.map