webpackJsonp([14],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function() { return MyprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile__ = __webpack_require__(857);
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

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_form_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(46);
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
        //this.retrieveProfile()
        var _this = this;
        this.data = data;
        this.cache = cache;
        this.myModal = myModal;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afauth = afauth;
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            $key: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null),
            fName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]),
            lName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(2)]),
            mobile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('^([6-9])([0-9]{9})$'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(10)]),
        });
        //.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5${new Date().toLocaleTimeString()}`
        this.data.currentUri.subscribe(function (item) { return _this.uri = item; });
    }
    MyprofilePage.prototype.retrieveProfile = function () {
        var _this = this;
        this.firebase.database.ref("users/" + this.afauth.auth.currentUser.uid).on('value', function (snap) {
            _this.profileForm.controls['$key'].setValue(_this.$key = snap.key);
            _this.profileForm.get('fName').setValue(_this.fName = snap.child('fname').val());
            _this.profileForm.get('lName').setValue(_this.lName = snap.child('lname').val());
            _this.profileForm.get('mobile').setValue(_this.mobile = snap.child('mobile').val());
            _this.email = snap.child('email').val();
            _this.doj = snap.child('doj').val();
            _this.dob = snap.child('dob').val();
            _this.jobTitle = snap.child('position').val();
        });
    };
    MyprofilePage.prototype.updateProfile = function () {
        var _this = this;
        if (this.profileForm.valid) {
            if (this.$key != "")
                this.firebase.list('users').update(this.$key, {
                    fname: this.profileForm.get('fName').value,
                    lname: this.profileForm.get('lName').value,
                    mobile: this.profileForm.get('mobile').value
                }).then(function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Profile updated successfully',
                        duration: 3000
                    });
                    toast.present();
                });
        }
    };
    MyprofilePage.prototype.showmodal = function () {
        var _this = this;
        console.log("hiiii");
        var mydata = {
            uri: "" + this.uri
        };
        var modal = this.myModal.create('ModalPage', { mydata: mydata });
        modal.onDidDismiss(function () {
            _this.uri = "https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/" + _this.afauth.auth.currentUser.uid + ".jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5" + new Date().toLocaleTimeString();
        });
        modal.present();
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"F:\ionic-app\src\pages\myprofile\myprofile.html"*/'\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>\n      My Profile\n    </ion-title>\n    <ion-buttons end >\n        <button ion-button type="submit" form="profile"  icon-only > <ion-icon  name="checkmark"></ion-icon>Save</button>\n    </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n    \n    <form [formGroup]="profileForm" (ngSubmit)="updateProfile()" id="profile">\n        \n      <ion-item  style="text-align:center;" (click)="showmodal()">\n            \n            <img src="{{uri}}" onerror="this.src=\'assets/imgs/companylogo.png\'" style="height:100px;width:100px;border-radius:30%;margin: auto"> \n          \n        <h4 >{{this.fName | titlecase }} {{this.lName | titlecase }}</h4>\n        <h6>{{this.jobTitle | titlecase }} </h6>\n        <h6>{{this.email}}</h6>\n        \n        \n      </ion-item>\n            \n          <ion-row>\n              <ion-item col-6>\n                <ion-input hidden formControlName="$key" ></ion-input>\n                <ion-label stacked>First Name</ion-label>\n                <ion-input type="text" formControlName="fName" maxlength=15 ></ion-input>\n              </ion-item>\n             \n              <ion-item col-6>\n                  <ion-label stacked>Last Name</ion-label>\n                  <ion-input type="text" formControlName="lName" maxlength=15   ></ion-input>\n                </ion-item>\n                \n          </ion-row> \n          <ion-row>\n            <ion-col col-6>\n            <ion-item   no-lines *ngIf="(profileForm.get(\'fName\').hasError(\'pattern\') || profileForm.get(\'fName\').hasError(\'minlength\') || profileForm.get(\'fName\').hasError(\'required\') ) && profileForm.get(\'fName\').touched">\n              <ion-label stacked  color="danger" *ngIf="(profileForm.get(\'fName\').hasError(\'pattern\') || profileForm.get(\'fName\').hasError(\'required\')  || profileForm.get(\'fName\').hasError(\'minlength\')) && profileForm.get(\'fName\').touched" >\n                Invalid First Name\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item   no-lines *ngIf="(profileForm.get(\'lName\').hasError(\'pattern\') || profileForm.get(\'lName\').hasError(\'minlength\') || profileForm.get(\'lName\').hasError(\'required\') ) && profileForm.get(\'lName\').touched">\n              <ion-label stacked  color="danger" *ngIf="(profileForm.get(\'lName\').hasError(\'pattern\') || profileForm.get(\'lName\').hasError(\'required\')  || profileForm.get(\'lName\').hasError(\'minlength\')) && profileForm.get(\'lName\').touched" >\n                Invalid Last Name\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          </ion-row>\n            \n          <ion-item>\n              <ion-label stacked>Mobile Number</ion-label>\n              <ion-input type="tel" formControlName="mobile" maxlength=10 ></ion-input>\n            </ion-item>  \n            <ion-item   no-lines *ngIf="(profileForm.get(\'mobile\').hasError(\'pattern\') || profileForm.get(\'mobile\').hasError(\'minlength\') || profileForm.get(\'mobile\').hasError(\'required\') ) && profileForm.get(\'mobile\').touched">\n                <ion-label stacked  color="danger" *ngIf="(profileForm.get(\'mobile\').hasError(\'pattern\') || profileForm.get(\'mobile\').hasError(\'required\')  || profileForm.get(\'mobile\').hasError(\'minlength\')) && profileForm.get(\'mobile\').touched" >\n                  Invalid Mobile Number\n                </ion-label>\n              </ion-item>\n            <ion-item>\n              <ion-label stacked>Date Of Birth</ion-label>\n              <ion-input disabled type="text" [(ngModel)]="dob"  [ngModelOptions]="{standalone: true}" ></ion-input>\n            </ion-item>  \n            <ion-item>\n              <ion-label stacked>Date Of Join</ion-label>\n              <ion-input disabled type="text" [(ngModel)]="doj"  [ngModelOptions]="{standalone: true}"></ion-input>\n            </ion-item>  \n          \n          </form>\n          \n          </ion-content>\n       '/*ion-inline-end:"F:\ionic-app\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_form_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ })

});
//# sourceMappingURL=14.js.map