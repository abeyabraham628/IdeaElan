webpackJsonp([5],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsPageModule", function() { return SystemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systems__ = __webpack_require__(834);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__systems__["a" /* SystemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__systems__["a" /* SystemsPage */]),
            ],
        })
    ], SystemsPageModule);
    return SystemsPageModule;
}());

//# sourceMappingURL=systems.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(38);
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
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SystemsPage = /** @class */ (function () {
    function SystemsPage(barcode, datePicker, firebase, datepipe) {
        this.barcode = barcode;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.datepipe = datepipe;
        this.Save = "Save";
        this.systemsForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            $key: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null),
            systemId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            keyboard: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            mouse: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            processor: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            memory: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            hdd: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            avExpiry: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            avValidity: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
        this.systemArray = [];
        this.systems = "newSystem";
        this.getSystemList();
    }
    SystemsPage.prototype.getSystemList = function () {
        this.systemsList = this.firebase.list('systems');
        return this.systemsList.snapshotChanges();
    };
    SystemsPage.prototype.getSystems = function () {
        var _this = this;
        this.getSystemList().subscribe(function (list) {
            _this.systemArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    SystemsPage.prototype.loadForm = function (systems) {
        this.systems = "newSystem";
        this.Save = "Update";
        this.systemsForm.setValue(systems);
    };
    SystemsPage.prototype.updateSystems = function (systems) {
        this.systemsList.update(systems.$key, {
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            avValidity: systems.avValidity
        });
    };
    SystemsPage.prototype.insertSystems = function (systems) {
        this.systemsList.push({
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            avValidity: systems.avValidity
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
    SystemsPage.prototype.dispdate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.systemsForm.controls['avExpiry'].setValue((date.toLocaleDateString())),
                _this.systemsForm.controls['avValidity'].setValue(Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)));
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
    SystemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-systems',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\systems\systems.html"*/'<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>SYSTEMS</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-header>\n\n  \n\n\n\n\n\n\n\n  <ion-content>\n\n \n\n      <ion-segment [(ngModel)]="systems" color="white" >\n\n         <ion-segment-button value="newSystem">\n\n            Add System\n\n         </ion-segment-button>\n\n         <ion-segment-button value="allSystems" (click)="getSystems()">\n\n           All Systems\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="systems">\n\n    <div *ngSwitchCase="\'newSystem\'">\n\n      <form [formGroup]="systemsForm" (ngSubmit)="onSubmit()">\n\n      <ion-list>\n\n          <h6 class="title">System Information</h6>\n\n          <ion-row>\n\n            <ion-item col-12>\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n              <ion-input hidden formControlName="avValidity"></ion-input>\n\n              <ion-label stacked>System Id</ion-label>\n\n              <ion-input type="text" formControlName="systemId"></ion-input>\n\n                <button ion-button type="button" color="blue" (click)="scanBarCode(\'system\')" small item-right>\n\n                  <ion-icon name="barcode"> </ion-icon>\n\n                </button>\n\n            </ion-item>\n\n          </ion-row>\n\n              <ion-row>\n\n                <ion-item col-12>\n\n                  <ion-label stacked>Keyboard</ion-label>\n\n                  <ion-input type="text" formControlName="keyboard" ></ion-input>\n\n                    <button ion-button small type="button" (click)="scanBarCode(\'keyboard\')" color="blue" item-right>\n\n                      <ion-icon name="barcode"> </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-item col-12>\n\n                  <ion-label stacked>Mouse</ion-label>\n\n                  <ion-input type="text" formControlName="mouse"></ion-input>\n\n                    <button ion-button small type="button" (click)="scanBarCode(\'mouse\')" color="blue" item-right>\n\n                        <ion-icon name="barcode"> </ion-icon>\n\n                      </button>\n\n                  </ion-item>\n\n                </ion-row>\n\n\n\n              <ion-item col-12>\n\n                <ion-label stacked>Processor</ion-label>\n\n                <ion-input type="text" formControlName="processor" ></ion-input>\n\n              </ion-item>\n\n             <ion-row >\n\n              <ion-item  col-6>\n\n                <ion-label stacked>Primary Memory</ion-label>\n\n                <ion-input type="text" formControlName="memory" ></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item col-6>\n\n                <ion-label stacked>Hard Disk</ion-label>\n\n                <ion-input type="text" formControlName="hdd" ></ion-input>\n\n              </ion-item>\n\n              \n\n            </ion-row>  \n\n            \n\n          <ion-row>\n\n            <ion-item col-12>\n\n              <ion-label stacked>Antivirus Expiry</ion-label>\n\n              <ion-input type="text" formControlName="avExpiry" (click)="dispdate()" (ionFocus)="dispdate()" ></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n              <ion-row>\n\n                <button ion-button type="submit"  icon-end full color=blue   >\n\n                  Save\n\n                </button>\n\n              </ion-row> \n\n             \n\n      </ion-list>\n\n    </form>\n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'allSystems\'">\n\n      <ion-list>\n\n        <ion-searchbar hidden placeholder="Find System" showCancelButton="false">\n\n       </ion-searchbar>\n\n       <button type="button"  color="blue" ion-button (click)="scanBarCode(\'db\')">Scanner</button>\n\n      </ion-list>\n\n      <ion-item>\n\n        <ion-row class="table-title">\n\n          <ion-col col-4 >System Id</ion-col>\n\n          <ion-col col-3 >RAM</ion-col>\n\n          <ion-col col-3 >HDD</ion-col>\n\n          <ion-col col-2 >Antivirus</ion-col>\n\n          <ion-col hidden col-2 >View</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item *ngFor="let system of systemArray">\n\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avValidity}} Days</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]])
    ], SystemsPage);
    return SystemsPage;
}()); //end of class

//# sourceMappingURL=systems.js.map

/***/ })

});
//# sourceMappingURL=5.js.map