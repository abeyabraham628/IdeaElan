webpackJsonp([2],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsPageModule", function() { return SystemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_datepicker__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SystemsPageModule = /** @class */ (function () {
    function SystemsPageModule() {
    }
    SystemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__systems__["a" /* SystemsPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__models_datepicker__["a" /* CustomDatePicker */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__systems__["a" /* SystemsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], SystemsPageModule);
    return SystemsPageModule;
}());

//# sourceMappingURL=systems.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePicker; });
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


var CustomDatePicker = /** @class */ (function () {
    function CustomDatePicker(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.t = 5;
    }
    CustomDatePicker.prototype.datePickerOptions = function (pickMode, defaultScrollTo, from, dateLimitTo, disableWeeks) {
        var options = {
            pickMode: pickMode,
            showAdjacentMonthDay: false,
            disableWeeks: disableWeeks,
            from: from,
            to: dateLimitTo,
            defaultScrollTo: defaultScrollTo,
        };
        return options;
    };
    CustomDatePicker.prototype.getMonths = function () {
        return [{ 'monthName': 'January', 'value': '01' },
            { 'monthName': 'February', 'value': '02' },
            { 'monthName': 'March', 'value': '03' },
            { 'monthName': 'April', 'value': '04' },
            { 'monthName': 'May', 'value': '05' },
            { 'monthName': 'June', 'value': '06' },
            { 'monthName': 'July', 'value': '07' },
            { 'monthName': 'August', 'value': '08' },
            { 'monthName': 'September', 'value': '09' },
            { 'monthName': 'October', 'value': '10' },
            { 'monthName': 'November', 'value': '11' },
            { 'monthName': 'December', 'value': '12' }];
    };
    CustomDatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CustomDatePicker);
    return CustomDatePicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__["a" /* MomentdatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__["a" /* TablefilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__["a" /* MomentdatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__["a" /* TablefilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentdatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the MomentdatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentdatePipe = /** @class */ (function () {
    function MomentdatePipe() {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
    }
    MomentdatePipe.prototype.transform = function (date) {
        var expiryDate = __WEBPACK_IMPORTED_MODULE_1_moment__(date);
        return expiryDate.diff(this.currentDate, 'days');
    };
    MomentdatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'momentdate',
        })
    ], MomentdatePipe);
    return MomentdatePipe;
}());

//# sourceMappingURL=momentdate.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TablefilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TablefilterPipe = /** @class */ (function () {
    function TablefilterPipe() {
    }
    TablefilterPipe.prototype.transform = function (items, field, value) {
        console.log(value);
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) {
            return singleItem[field].toLowerCase().includes(value.toLowerCase());
        });
    };
    TablefilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tableFilter',
        })
    ], TablefilterPipe);
    return TablefilterPipe;
}());

//# sourceMappingURL=tablefilter.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_form_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_datepicker__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SystemsPage = /** @class */ (function () {
    function SystemsPage(data, loadingCtrl, navCtrl, modalCtrl, customDatePicker, alertCtrl, barcode, datePicker, firebase) {
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.customDatePicker = customDatePicker;
        this.alertCtrl = alertCtrl;
        this.barcode = barcode;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.Save = "Save";
        this.replace = false;
        this.systemsForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            $key: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null),
            purchaseDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            systemId: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(5)]),
            keyboard: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            mouse: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            processor: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)]),
            memory: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)]),
            hdd: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)]),
            avExpiry: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            systemUser: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](''),
            maintenance: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](''),
        });
        this.systemArray = [];
        this.employeeList = [];
        this.systems = "newSystem";
        this.getSystemList();
        this.getUsers();
    }
    SystemsPage.prototype.tony = function () {
        var history = this.systemsForm.controls['maintenance'].value;
        this.navCtrl.push('MaintenancehistoryPage', { data: history });
    };
    SystemsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.data.currentValue.subscribe(function (item) { return _this.formFieldVal = item; });
    };
    SystemsPage.prototype.ionViewWillEnter = function () {
        if (this.formField != null)
            this.systemsForm.controls[this.formField].setValue(this.formFieldVal);
    };
    SystemsPage.prototype.getSystemList = function () {
        this.systemsList = this.firebase.list('systems');
        return this.systemsList.snapshotChanges();
    };
    SystemsPage.prototype.getSystems = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
            dismissOnPageChange: true
        });
        this.loader.present();
        this.systemsForm.reset();
        this.getSystemList().subscribe(function (list) {
            _this.systemArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
        this.loader.dismiss();
        this.replace = false;
    };
    SystemsPage.prototype.loadForm = function (systems) {
        this.replace = true;
        this.systems = "newSystem";
        this.Save = "Update";
        this.systemsForm.setValue(systems);
    };
    SystemsPage.prototype.updateSystems = function (systems) {
        var _this = this;
        this.systemsList.update(systems.$key, {
            purchaseDate: systems.purchaseDate,
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: "Success",
                subTitle: "System updated succesfuly ",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SystemsPage.prototype.insertSystems = function (systems) {
        var _this = this;
        this.systemsList.push({
            purchaseDate: systems.purchaseDate,
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: "Success",
                subTitle: "System added succesfuly ",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SystemsPage.prototype.onSubmit = function () {
        if (this.systemsForm.controls.$key.value == null) {
            this.insertSystems(this.systemsForm.value);
            this.systemsForm.reset();
        }
        else {
            this.updateSystems(this.systemsForm.value);
            this.systemsForm.reset();
        }
    };
    SystemsPage.prototype.scanBarCode = function (type) {
        var _this = this;
        this.barcode.scan().then(function (barcodeData) {
            if (type == "system") {
                _this.systemsForm.controls['systemId'].setValue(barcodeData.text);
            }
            else if (type == "keyboard") {
                _this.systemsForm.controls['keyboard'].setValue(barcodeData.text);
            }
            else if (type == "mouse") {
                _this.systemsForm.controls['mouse'].setValue(barcodeData.text);
            }
            else if (type == "db") {
                _this.findSystem(barcodeData.text);
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    SystemsPage.prototype.dispdate = function (type) {
        var _this = this;
        this.datePicker.show({
            date: __WEBPACK_IMPORTED_MODULE_8_moment__().toDate(),
            mode: 'date',
            androidTheme: 5,
        }).then(function (date) {
            if (type === "purchaseDate") {
                _this.systemsForm.controls['purchaseDate'].setValue(__WEBPACK_IMPORTED_MODULE_8_moment__(date).format('D-MMM-YYYY'));
            }
            else {
                _this.systemsForm.controls['avExpiry'].setValue(__WEBPACK_IMPORTED_MODULE_8_moment__(date).format('D-MMM-YYYY'));
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    SystemsPage.prototype.findSystem = function (systemId) {
        var result = [];
        this.firebase.database.ref("systems").orderByChild('systemId').equalTo(systemId).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result = __assign({ $key: childSnapshot.key }, childSnapshot.val());
                return false;
            });
        });
        this.loadForm(result);
    }; //end of function
    SystemsPage.prototype.getUsers = function () {
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
    SystemsPage.prototype.formReset = function () {
        this.systemsForm.reset();
        this.replace = false;
    };
    SystemsPage.prototype.modify = function (fieldName) {
        this.formField = fieldName;
        var fieldVal = this.systemsForm.controls[fieldName].value;
        var $key = this.systemsForm.controls['$key'].value;
        var $userKey = this.systemsForm.controls['systemUser'].value;
        this.navCtrl.push('ModifysystemsPage', { 'fieldName': fieldName, 'fieldVal': fieldVal, '$key': $key, 'userKey': $userKey });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    SystemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-systems',template:/*ion-inline-start:"F:\ionic-app\src\pages\systems\systems.html"*/'\n\n<ion-header no-border>\n\n  <navbar pageTitle="SYSTEMS"></navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content>\n\n    <ion-refresher >\n\n      <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n      <ion-segment [(ngModel)]="systems" color="white" >\n\n         <ion-segment-button value="newSystem">\n\n            Add System\n\n         </ion-segment-button>\n\n         <ion-segment-button value="allSystems" (click)="getSystems()">\n\n           All Systems\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="systems">\n\n    <div *ngSwitchCase="\'newSystem\'">\n\n      <form [formGroup]="systemsForm" (ngSubmit)="onSubmit()">\n\n      <ion-item no-lines>\n\n          <ion-label class="title">System Information</ion-label>\n\n          <button *ngIf="replace" ion-button item-right small color="blue" type="button" (click)="tony(this.value)" >Maintenance History</button>\n\n        </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>Purchase Date</ion-label>\n\n            <ion-input [disabled]="replace" type="text" readonly formControlName="purchaseDate" (tap)="dispdate(\'purchaseDate\')"  ></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item  no-lines *ngIf="(systemsForm.get(\'purchaseDate\').hasError(\'minlength\') || systemsForm.get(\'purchaseDate\').hasError(\'required\') ) && systemsForm.get(\'purchaseDate\').touched">\n\n            <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'purchaseDate\').hasError(\'required\')  || systemsForm.get(\'purchaseDate\').hasError(\'minlength\')) && systemsForm.get(\'purchaseDate\').touched" >\n\n              Purchase date is required\n\n            </ion-label>\n\n          </ion-item>\n\n\n\n          \n\n         \n\n   \n\n\n\n            <ion-item col-12>\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n              <ion-input  hidden formControlName="maintenance" ></ion-input>\n\n              <ion-label stacked>System Id</ion-label>\n\n              <ion-input type="text" [disabled]="replace" formControlName="systemId"></ion-input>\n\n             \n\n                <button *ngIf="!replace" ion-button type="button" color="blue" (click)="scanBarCode(\'system\')" small item-right>\n\n                  <ion-icon name="barcode"> </ion-icon>\n\n                </button>\n\n               \n\n            </ion-item>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'systemId\').hasError(\'minlength\') || systemsForm.get(\'systemId\').hasError(\'required\') ) && systemsForm.get(\'systemId\').touched">\n\n\n\n              <ion-label stacked  color="danger" *ngIf="systemsForm.get(\'systemId\').hasError(\'required\') && systemsForm.get(\'systemId\').touched">\n\n              SystemId is required\n\n              </ion-label>\n\n              <ion-label stacked color="danger" *ngIf="systemsForm.get(\'systemId\').hasError(\'minlength\') && systemsForm.get(\'systemId\').touched">\n\n              Minimum of 5 characters\n\n              </ion-label>\n\n              </ion-item>\n\n       \n\n             \n\n                <ion-item col-12>\n\n                  <ion-label stacked>Keyboard</ion-label>\n\n                  <ion-input type="text" [disabled]="replace" formControlName="keyboard" ></ion-input>\n\n                 \n\n                  <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'keyboard\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n                  \n\n                  \n\n                  <button *ngIf="!replace"  ion-button small type="button" (click)="scanBarCode(\'keyboard\')" color="blue" item-right>\n\n                      <ion-icon name="barcode"> </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                  <ion-item  no-lines *ngIf="(systemsForm.get(\'keyboard\').hasError(\'minlength\') || systemsForm.get(\'keyboard\').hasError(\'required\') ) && systemsForm.get(\'keyboard\').touched">\n\n                    <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'keyboard\').hasError(\'required\')  || systemsForm.get(\'keyboard\').hasError(\'minlength\')) && systemsForm.get(\'keyboard\').touched" >\n\n                      Keyboard Details is Required\n\n                    </ion-label>\n\n                  </ion-item>\n\n           \n\n            \n\n                <ion-item col-12>\n\n                  <ion-label stacked>Mouse</ion-label>\n\n                  <ion-input type="text" [disabled]="replace" formControlName="mouse"></ion-input>\n\n                  <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'mouse\')">\n\n                      <ion-icon  small name="create" ></ion-icon>\n\n                    </button>\n\n                    <button *ngIf="!replace" ion-button small type="button"  color="blue" item-right>\n\n                        <ion-icon name="barcode"> </ion-icon>\n\n                      </button>\n\n                  </ion-item>\n\n                  <ion-item  no-lines *ngIf="(systemsForm.get(\'mouse\').hasError(\'minlength\') || systemsForm.get(\'mouse\').hasError(\'required\') ) && systemsForm.get(\'mouse\').touched">\n\n                    <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'mouse\').hasError(\'required\')  || systemsForm.get(\'mouse\').hasError(\'minlength\')) && systemsForm.get(\'mouse\').touched" >\n\n                      Mouse Details is Required\n\n                    </ion-label>\n\n                  </ion-item>\n\n               \n\n\n\n              <ion-item col-12>\n\n                <ion-label stacked>Processor</ion-label>\n\n                <ion-input type="text" [disabled]="replace" formControlName="processor" ></ion-input>\n\n                <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'processor\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n              </ion-item>\n\n              <ion-item  no-lines *ngIf="(systemsForm.get(\'processor\').hasError(\'minlength\') || systemsForm.get(\'processor\').hasError(\'required\') ) && systemsForm.get(\'processor\').touched">\n\n                <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'processor\').hasError(\'required\')  || systemsForm.get(\'processor\').hasError(\'minlength\')) && systemsForm.get(\'processor\').touched" >\n\n                  Processor Details is Required\n\n                </ion-label>\n\n              </ion-item>\n\n             <ion-row  >\n\n              <ion-item  col-6>\n\n                <ion-label stacked>Primary Memory</ion-label>\n\n                <ion-input type="text" [disabled]="replace" formControlName="memory" ></ion-input>\n\n                <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'memory\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n              </ion-item>\n\n              \n\n\n\n              <ion-item no-lines col-6>\n\n                <ion-label stacked>Hard Disk</ion-label>\n\n                <ion-input type="text" [disabled]="replace" formControlName="hdd" ></ion-input>\n\n                <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'hdd\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n              </ion-item>\n\n              \n\n            </ion-row>  \n\n            <ion-row>\n\n            <ion-item col-6 no-lines *ngIf="(systemsForm.get(\'memory\').hasError(\'minlength\') || systemsForm.get(\'memory\').hasError(\'required\') ) && systemsForm.get(\'memory\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'memory\').hasError(\'required\')  || systemsForm.get(\'memory\').hasError(\'minlength\')) && systemsForm.get(\'memory\').touched" >\n\n                Memory Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item col-6  no-lines *ngIf="(systemsForm.get(\'hdd\').hasError(\'minlength\') || systemsForm.get(\'hdd\').hasError(\'required\') ) && systemsForm.get(\'hdd\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'hdd\').hasError(\'required\')  || systemsForm.get(\'hdd\').hasError(\'minlength\')) && systemsForm.get(\'hdd\').touched" >\n\n                HDD Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-row>\n\n        \n\n            <ion-item col-12>\n\n              <ion-label stacked>Antivirus Expiry</ion-label>\n\n              <ion-input type="text" [disabled]="replace" readonly formControlName="avExpiry" (tap)="dispdate(\'antivirus\')"  ></ion-input>\n\n              <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'avExpiry\')">\n\n                  <ion-icon  small name="create" ></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'avExpiry\').hasError(\'minlength\') || systemsForm.get(\'avExpiry\').hasError(\'required\') ) && systemsForm.get(\'avExpiry\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'avExpiry\').hasError(\'required\')  || systemsForm.get(\'avExpiry\').hasError(\'minlength\')) && systemsForm.get(\'avExpiry\').touched" >\n\n                Antivirus Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-item col-12>\n\n              <ion-label stacked>User</ion-label>\n\n              <ion-select [disabled]="replace" formControlName="systemUser">\n\n                <ion-option *ngFor="let emp of employeeList" [value]="emp.$key">{{emp.fName}} {{emp.lName}}</ion-option>\n\n              </ion-select>\n\n              <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'systemUser\')">\n\n                  <ion-icon  small name="create" ></ion-icon>\n\n                </button>\n\n\n\n            </ion-item>\n\n\n\n\n\n            \n\n          \n\n\n\n              <ion-row>\n\n                <ion-col col-6 [hidden]="replace">\n\n                <button ion-button type="submit"  [disabled]="systemsForm.invalid" icon-end full color=blue   >\n\n                  Save\n\n                </button>\n\n              </ion-col>\n\n              <ion-col (col-6)="!replace" (col-12)="replace">\n\n                  <button ion-button type="button" (click)=formReset()  icon-end full color=blue   >\n\n                    Cancel\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row> \n\n             \n\n     \n\n    </form>\n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'allSystems\'">\n\n      \n\n       <ion-row>\n\n          \n\n          <ion-item col-10  no-lines >\n\n              <ion-searchbar  placeholder="Search User"  [showCancelButton]="shouldShowCancel"  [(ngModel)]="searchString" ><ion-icon name="barcode" item-right> </ion-icon></ion-searchbar>\n\n          </ion-item>\n\n          <ion-item col-2>\n\n              <ion-icon  type="button" name="barcode" (click)="scanBarCode(\'db\')" color="blue"> </ion-icon>\n\n           </ion-item>\n\n        </ion-row>\n\n       \n\n      \n\n      <ion-item>\n\n        <ion-row class="table-title">\n\n          <ion-col col-4 >System Id</ion-col>\n\n          \n\n          \n\n          <ion-col col-3 >Antivirus</ion-col>\n\n          <ion-col col-5 >Maintenance History</ion-col>\n\n        \n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item *ngFor=\'let system of systemArray | tableFilter : "systemId" : searchString; let i = index\'>\n\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avExpiry | momentdate}} Days</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"F:\ionic-app\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__providers_form_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_form_service__["a" /* DataService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__models_datepicker__["a" /* CustomDatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__models_datepicker__["a" /* CustomDatePicker */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _j : Object])
    ], SystemsPage);
    return SystemsPage;
}()); //end of class

//# sourceMappingURL=systems.js.map

/***/ })

});
//# sourceMappingURL=2.js.map