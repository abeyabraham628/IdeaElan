webpackJsonp([10],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesAdminPageModule", function() { return LeavesAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaves_admin__ = __webpack_require__(811);
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

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        this.aby = [];
        this.leaves = 'leaveRequests';
        this.viewLeaveRequest();
    }
    LeavesAdminPage.prototype.viewLeaveRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x, counter, leave, tony;
            return __generator(this, function (_a) {
                x = [];
                counter = 0;
                tony = [];
                /*await this.firebase.database.ref('LeaveRequests').once ('child_added', function(snapshot){
                   leave=snapshot.val();
                   tony=snapshot.val().split('/')
                        
               })*/
                this.firebase.database.ref("EmployeeLeaves").orderByChild('status').equalTo('pending').on("value", function (snapshot) {
                    console.log(snapshot.child('status').val());
                });
                return [2 /*return*/];
            });
        });
    };
    LeavesAdminPage.prototype.openModal = function (page) {
        var modal = this.modalCtrl.create(page);
        modal.present();
    };
    var _a, _b, _c, _d;
    LeavesAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-leaves-admin',template:/*ion-inline-start:"F:\ionic-app\src\pages\leaves-admin\leaves-admin.html"*/'<ion-header no-border>\n  <ion-toolbar color="blue" hideBackButton="true">\n    <button ion-button  menuToggle="left" start>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title text-center>Leave</ion-title>\n\n    <ion-buttons end>\n      <button ion-button >\n        <ion-icon name="notifications"></ion-icon> \n      </button> \n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n  \n\n\n\n  <ion-content>\n \n      <ion-segment [(ngModel)]="leaves" color="white" >\n         <ion-segment-button value="leaveRequests">\n            Leave Requests\n         </ion-segment-button>\n         <ion-segment-button value="leaveHistory" >\n          History\n         </ion-segment-button>\n      </ion-segment>\n  <div [ngSwitch]="leaves">\n    <div *ngSwitchCase="\'leaveRequests\'">\n    \n      <ion-card (click)="openModal(\'ApproveLeavePage\')">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/companylogo.png">\n          </ion-avatar>\n          <h2>Tony Manuel</h2>\n          <p>Sick Leave</p>\n        </ion-item>\n        \n        \n      </ion-card>\n    \n\n    \n    </div>\n\n    <div *ngSwitchCase="\'leaveHistory\'">\n     \n      <ion-item>\n        <ion-row class="table-title">\n          <ion-col col-4 >System Id</ion-col>\n          <ion-col col-3 >RAM</ion-col>\n          <ion-col col-3 >HDD</ion-col>\n          <ion-col col-2 >Antivirus</ion-col>\n          <ion-col hidden col-2 >View</ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item *ngFor="let system of systemArray">\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avValidity}} Days</ion-col>\n        </ion-row>\n      </ion-item>\n\n      \n    </div>\n\n\n  </div>\n    \n  </ion-content>\n  \n '/*ion-inline-end:"F:\ionic-app\src\pages\leaves-admin\leaves-admin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], LeavesAdminPage);
    return LeavesAdminPage;
}());

//# sourceMappingURL=leaves-admin.js.map

/***/ })

});
//# sourceMappingURL=10.js.map