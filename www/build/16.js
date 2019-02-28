webpackJsonp([16],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(458);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(toast, navCtrl, navParams, afAuth, firebase) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.companyLogo = "assets/imgs/26053.png";
        this.changePasswordForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(15)]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(15), this.equalto('password')])
        });
        this.existingUser = this.navParams.get('existingUser');
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    ChangepasswordPage.prototype.updatePassword = function (formValue) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newPassword, firebase, navCtrl, toastCtrl;
            var _this = this;
            return __generator(this, function (_a) {
                user = this.afAuth.auth.currentUser;
                newPassword = formValue.password;
                firebase = this.firebase;
                navCtrl = this.navCtrl;
                toastCtrl = this.toast;
                if (this.existingUser == null) {
                    user.updatePassword(newPassword).then(function () {
                        _this.afAuth.auth.signOut()
                            .then(function () {
                            var toast = toastCtrl.create({
                                message: 'Password Updated Successfully. Please login to continue',
                                duration: 5000
                            });
                            toast.present().then(function () { return navCtrl.setRoot('LoginPage'); });
                        });
                    });
                }
                else if (!this.existingUser) {
                    user.updatePassword(newPassword).then(function () {
                        firebase.object("TempLogin/" + user.uid).set({
                            status: "Set",
                        }).then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var privilleges, priv;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            privilleges = [];
                                            return [4 /*yield*/, firebase.database.ref("users/" + user.uid).child('data').once('value', function (snapshot) {
                                                    privilleges = snapshot.val();
                                                })];
                                        case 1:
                                            priv = _a.sent();
                                            navCtrl.push('TabsPage', { 'roles': privilleges });
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }); // end of push
                    }).catch(function (error) {
                        alert(error);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    ChangepasswordPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"F:\ionic-app\src\pages\changepassword\changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n    <ion-toolbar color="blue">\n     <ion-title text-center>IdeaElan</ion-title>\n   </ion-toolbar>\n  </ion-header>\n\n<ion-content padding class="top-botton-border" style="margin-top:auto;margin-bottom:auto">\n    <form [formGroup]="changePasswordForm" (ngSubmit)="updatePassword(changePasswordForm.value,true)" >\n  <ion-card>\n    <ion-card-header text-center>\n        <ion-thumbnail >\n            <img [src]="companyLogo" class="logo1" />\n          </ion-thumbnail>\n          <br/>CHANGE PASSWORD\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n         \n            <ion-item no-lines>\n              <ion-label floating>New Password</ion-label>\n              <ion-input type="password" formControlName="password" ></ion-input>\n              \n            </ion-item>\n            \n            <ion-item no-lines  *ngIf="(changePasswordForm.get(\'password\').hasError(\'required\') ) && changePasswordForm.get(\'password\').touched">\n\n                <ion-label stacked color="danger" *ngIf="changePasswordForm.get(\'password\').hasError(\'required\') && changePasswordForm.get(\'password\').touched">\n                   Password is required\n                </ion-label>\n            </ion-item>\n         \n          \n            <ion-item>\n              <ion-label floating>Confirm Password</ion-label>\n              <ion-input type="password"  formControlName="confirmPassword"></ion-input>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( changePasswordForm.get(\'confirmPassword\').hasError(\'equalTo\') || changePasswordForm.get(\'confirmPassword\').hasError(\'required\') ) && changePasswordForm.get(\'confirmPassword\').touched">\n              <ion-label stacked color="danger" *ngIf="changePasswordForm.get(\'confirmPassword\').hasError(\'required\') && changePasswordForm.get(\'confirmPassword\').touched">\n                Confirm password is required\n              </ion-label>\n              <ion-label stacked color="danger" *ngIf="changePasswordForm.get(\'confirmPassword\').hasError(\'equalTo\') && changePasswordForm.get(\'confirmPassword\').touched">\n                 Password Mismatch\n              </ion-label>\n            </ion-item>\n          \n          </ion-list> \n          \n\n    </ion-card-content>\n    <ion-row class="cardfooter">\n        <ion-col col-6>\n            <button ion-button type="submit" full  color="blue" >Save</button>\n           \n        </ion-col>\n        <ion-col col-6>\n        \n            <button ion-button full type="reset" color="blue" (click)="cancel()">Cancel</button>\n        </ion-col>\n      </ion-row>\n  </ion-card>\n</form>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=16.js.map