webpackJsonp([15],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifysystemsPageModule", function() { return ModifysystemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifysystems__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModifysystemsPageModule = /** @class */ (function () {
    function ModifysystemsPageModule() {
    }
    ModifysystemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__modifysystems__["a" /* ModifysystemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__modifysystems__["a" /* ModifysystemsPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ModifysystemsPageModule);
    return ModifysystemsPageModule;
}());

//# sourceMappingURL=modifysystems.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifysystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_date_picker__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_form_service__ = __webpack_require__(471);
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
 * Generated class for the ModifysystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifysystemsPage = /** @class */ (function () {
    function ModifysystemsPage(barcode, datePicker, formData, navCtrl, navParams, firebase, alertCtrl) {
        this.barcode = barcode;
        this.datePicker = datePicker;
        this.formData = formData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.alertCtrl = alertCtrl;
        this.showDefault = false;
        this.showSystemUser = false;
        this.showavExpiry = false;
        this.fieldErr = true;
        this.employeeList = [];
        this.getUsers();
        this.params = navParams.data[0];
    }
    ModifysystemsPage.prototype.ionViewDidLoad = function () {
        switch (this.params.fieldName) {
            case 'keyboard':
                this.fieldName = 'Key Board';
                this.default = this.params.fieldVal;
                this.showDefault = true;
                break;
            case 'mouse':
                this.fieldName = 'Mouse';
                this.default = this.params.fieldVal;
                this.showDefault = true;
                break;
            case 'processor':
                this.fieldName = 'Processor';
                this.default = this.params.fieldVal;
                this.showDefault = true;
                break;
            case 'hdd':
                this.fieldName = 'Hard Disk';
                this.default = this.params.fieldVal;
                this.showDefault = true;
                break;
            case 'memory':
                this.fieldName = 'Ram';
                this.default = this.params.fieldVal;
                this.showDefault = true;
                break;
            case 'avExpiry':
                this.fieldName = 'Antivirus Expiry';
                this.avExpiry = this.params.fieldVal;
                this.showavExpiry = true;
                break;
            case 'systemUser':
                this.fieldName = 'System User';
                this.systemUser = this.params.fieldVal;
                this.showSystemUser = true;
                break;
        }
    };
    ModifysystemsPage.prototype.getUsers = function () {
        var _this = this;
        this.firebase.list("users").snapshotChanges().subscribe(function (list) {
            _this.employeeList = list.map(function (item) {
                return {
                    '$key': item.key,
                    'fName': item.payload.child('fname').val(),
                    'lName': item.payload.child('lname').val()
                };
            });
        });
    };
    ModifysystemsPage.prototype.updateSystems = function () {
        var _this = this;
        console.log(":fds");
        var value;
        var flag = false;
        var uname;
        switch (this.params.fieldName) {
            case 'keyboard':
            case 'mouse':
            case 'processor':
            case 'hdd':
            case 'memory':
                value = this.default;
                break;
            case 'avExpiry':
                value = this.avExpiry;
                break;
            case 'systemUser':
                flag = true;
                value = this.systemUser;
                var empObj = this.employeeList.find(function (key) { return key.$key == _this.systemUser; });
                uname = empObj.fName + " " + empObj.lName;
                break;
        }
        if (value == null || value == "" || value.length < 3) {
            this.fieldErr = false;
        }
        else {
            this.fieldErr = true;
            this.firebase.list("maintenance/" + this.params.$key).push({
                'type': { 'name': this.params.fieldName, 'value': flag ? uname : value },
                date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('D-MMM-YYYY'),
                userKey: this.params.userKey != this.systemUser ? this.params.userKey : value,
                userName: this.params.userName
            }).then(function () {
                var _a;
                _this.firebase.list("systems").update(_this.params.$key, (_a = {},
                    _a[_this.params.fieldName] = value,
                    _a)).then(function () {
                    var alert = _this.alertCtrl.create({
                        title: "Success",
                        message: _this.fieldName + " updated successfully",
                        buttons: [{
                                text: 'OK',
                                handler: function () {
                                    _this.formData.changeValue(value);
                                    _this.navCtrl.pop();
                                }
                            }]
                    });
                    alert.present();
                });
            });
        } //end of if else error
    };
    ModifysystemsPage.prototype.dispdate = function () {
        var _this = this;
        this.datePicker.show({
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().toDate(),
            mode: 'date',
            androidTheme: 5,
        }).then(function (date) {
            _this.avExpiry = __WEBPACK_IMPORTED_MODULE_5_moment__(date).format('D-MMM-YYYY');
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    ModifysystemsPage.prototype.scanBarCode = function (type) {
        var _this = this;
        this.barcode.scan().then(function (barcodeData) {
            _this.default = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ModifysystemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-modifysystems',template:/*ion-inline-start:"F:\ionic-app\src\pages\modifysystems\modifysystems.html"*/'<!--\n  Generated template for the ModifysystemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <navbar pageTitle="System"></navbar>\n</ion-header>\n\n\n<ion-content padding >\n    \n    \n   \n\n      <ion-item no-lines>\n        <h3 style="font-size:20px">Change {{fieldName}}</h3>\n        <p style="font-size:12px">Enter the new {{fieldName}} details.</p>\n        </ion-item>\n\n       <ion-item >\n        <ion-label stacked></ion-label>\n        <ion-input *ngIf="showDefault" type="text"  [(ngModel)]="default" ></ion-input>\n        <button *ngIf="showDefault"  ion-button small type="button" (click)="scanBarCode(\'keyboard\')" color="blue" item-right>\n          <ion-icon name="barcode"> </ion-icon>\n        </button>\n        <ion-select *ngIf="showSystemUser" [(ngModel)]="systemUser">\n          <ion-option *ngFor="let emp of employeeList" [value]="emp.$key">{{emp.fName}} {{emp.lName}}</ion-option>\n        </ion-select>\n        <ion-input *ngIf="showavExpiry" type="text" readonly [(ngModel)]="avExpiry" (tap)="dispDate()"></ion-input>\n        </ion-item>\n        <ion-item no-lines [hidden]="fieldErr">\n          <ion-label stacked color="danger">{{fieldName}} value is invalid</ion-label>\n        </ion-item>\n       \n      \n      \n     <ion-row>\n       <ion-item col-6 no-lines>\n         <button ion-button color="blue" style="height:40px;" type="button" (click)="updateSystems()">Save Details</button>\n       </ion-item>\n       \n     </ion-row>\n    \n  \n    <hr/>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\modifysystems\modifysystems.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_6__providers_form_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"]])
    ], ModifysystemsPage);
    return ModifysystemsPage;
}());

//# sourceMappingURL=modifysystems.js.map

/***/ })

});
//# sourceMappingURL=15.js.map