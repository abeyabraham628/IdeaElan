webpackJsonp([3],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsPageModule", function() { return SystemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_datepicker__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_momentdate_momentdate__ = __webpack_require__(835);
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
                __WEBPACK_IMPORTED_MODULE_5__pipes_momentdate_momentdate__["a" /* MomentdatePipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__models_datepicker__["a" /* CustomDatePicker */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__systems__["a" /* SystemsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], SystemsPageModule);
    return SystemsPageModule;
}());

//# sourceMappingURL=systems.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
            showToggleButtons: true,
            showMonthPicker: true,
            showYearPicker: true,
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

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_datepicker__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__);
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
    function SystemsPage(navCtrl, modalCtrl, customDatePicker, alertCtrl, barcode, datePicker, firebase) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.customDatePicker = customDatePicker;
        this.alertCtrl = alertCtrl;
        this.barcode = barcode;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.Save = "Save";
        this.systemsForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            $key: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null),
            systemId: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(5)]),
            keyboard: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)]),
            mouse: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)]),
            processor: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)]),
            memory: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3)]),
            hdd: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3)]),
            avExpiry: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)]),
            avValidity: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(4)]),
        });
        this.systemArray = [];
        this.systems = "newSystem";
        this.getSystemList();
    }
    SystemsPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
    };
    SystemsPage.prototype.getSystemList = function () {
        this.systemsList = this.firebase.list('systems');
        return this.systemsList.snapshotChanges();
    };
    SystemsPage.prototype.getSystems = function () {
        var _this = this;
        this.systemsForm.reset();
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
        var _this = this;
        this.systemsList.update(systems.$key, {
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            avValidity: systems.avValidity
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
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            avValidity: systems.avValidity
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
        var pickMode = 'single';
        var defaultScrollTo = new Date();
        var from = new Date('2/1/2019');
        var options = this.customDatePicker.datePickerOptions(pickMode, defaultScrollTo, from);
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__["CalendarModal"], {
            options: options,
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date) {
            if (date != null) {
                _this.systemsForm.controls['avExpiry'].setValue(__WEBPACK_IMPORTED_MODULE_8_moment__(date['time']).format('D-MMM-YYYY'));
                //this.systemsForm.controls['avValidity'].setValue(Math.ceil((date.getTime()-new Date().getTime())/(1000*3600*24)))
            }
        }); //end of displayCalendar function
    };
    /*dispdate(){
      this.datePicker.show({
        date:new Date(),
        mode:'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
      }).then(
        date=>{
          this.systemsForm.controls['avExpiry'].setValue((date.toLocaleDateString())),
          this.systemsForm.controls['avValidity'].setValue(Math.ceil((date.getTime()-new Date().getTime())/(1000*3600*24)))
         },
        err => console.log('Error occurred while getting date: ', err)
      )
    }*/
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
            selector: 'page-systems',template:/*ion-inline-start:"F:\ionic-app\src\pages\systems\systems.html"*/'\n\n<ion-header no-border>\n\n  <page-header pageTitle="SYSTEMS"></page-header>\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content>\n\n \n\n      <ion-segment [(ngModel)]="systems" color="white" >\n\n         <ion-segment-button value="newSystem">\n\n            Add System\n\n         </ion-segment-button>\n\n         <ion-segment-button value="allSystems" (click)="getSystems()">\n\n           All Systems\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="systems">\n\n    <div *ngSwitchCase="\'newSystem\'">\n\n      <form [formGroup]="systemsForm" (ngSubmit)="onSubmit()">\n\n      <ion-list>\n\n          <h6 class="title">System Information</h6>\n\n        \n\n            <ion-item col-12>\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n              <ion-input hidden formControlName="avValidity"></ion-input>\n\n              <ion-label stacked>System Id</ion-label>\n\n              <ion-input type="text" formControlName="systemId"></ion-input>\n\n             \n\n                <button ion-button type="button" color="blue" (click)="scanBarCode(\'system\')" small item-right>\n\n                  <ion-icon name="barcode"> </ion-icon>\n\n                </button>\n\n               \n\n            </ion-item>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'systemId\').hasError(\'minlength\') || systemsForm.get(\'systemId\').hasError(\'required\') ) && systemsForm.get(\'systemId\').touched">\n\n\n\n              <ion-label stacked  color="danger" *ngIf="systemsForm.get(\'systemId\').hasError(\'required\') && systemsForm.get(\'systemId\').touched">\n\n              SystemId is required\n\n              </ion-label>\n\n              <ion-label stacked color="danger" *ngIf="systemsForm.get(\'systemId\').hasError(\'minlength\') && systemsForm.get(\'systemId\').touched">\n\n              Minimum of 5 characters\n\n              </ion-label>\n\n              </ion-item>\n\n       \n\n             \n\n                <ion-item col-12>\n\n                  <ion-label stacked>Keyboard</ion-label>\n\n                  <ion-input type="text" formControlName="keyboard" ></ion-input>\n\n                    <button ion-button small type="button" (click)="scanBarCode(\'keyboard\')" color="blue" item-right>\n\n                      <ion-icon name="barcode"> </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                  <ion-item  no-lines *ngIf="(systemsForm.get(\'keyboard\').hasError(\'minlength\') || systemsForm.get(\'keyboard\').hasError(\'required\') ) && systemsForm.get(\'keyboard\').touched">\n\n                    <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'keyboard\').hasError(\'required\')  || systemsForm.get(\'keyboard\').hasError(\'minlength\')) && systemsForm.get(\'keyboard\').touched" >\n\n                      Keyboard Details is Required\n\n                    </ion-label>\n\n                  </ion-item>\n\n           \n\n            \n\n                <ion-item col-12>\n\n                  <ion-label stacked>Mouse</ion-label>\n\n                  <ion-input type="text" formControlName="mouse"></ion-input>\n\n                    <button ion-button small type="button" (click)="scanBarCode(\'mouse\')" color="blue" item-right>\n\n                        <ion-icon name="barcode"> </ion-icon>\n\n                      </button>\n\n                  </ion-item>\n\n                  <ion-item  no-lines *ngIf="(systemsForm.get(\'mouse\').hasError(\'minlength\') || systemsForm.get(\'mouse\').hasError(\'required\') ) && systemsForm.get(\'mouse\').touched">\n\n                    <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'mouse\').hasError(\'required\')  || systemsForm.get(\'mouse\').hasError(\'minlength\')) && systemsForm.get(\'mouse\').touched" >\n\n                      Mouse Details is Required\n\n                    </ion-label>\n\n                  </ion-item>\n\n               \n\n\n\n              <ion-item col-12>\n\n                <ion-label stacked>Processor</ion-label>\n\n                <ion-input type="text" formControlName="processor" ></ion-input>\n\n              </ion-item>\n\n              <ion-item  no-lines *ngIf="(systemsForm.get(\'processor\').hasError(\'minlength\') || systemsForm.get(\'processor\').hasError(\'required\') ) && systemsForm.get(\'processor\').touched">\n\n                <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'processor\').hasError(\'required\')  || systemsForm.get(\'processor\').hasError(\'minlength\')) && systemsForm.get(\'processor\').touched" >\n\n                  Processor Details is Required\n\n                </ion-label>\n\n              </ion-item>\n\n             <ion-row  >\n\n              <ion-item  col-6>\n\n                <ion-label stacked>Primary Memory</ion-label>\n\n                <ion-input type="text" formControlName="memory" ></ion-input>\n\n              </ion-item>\n\n              \n\n\n\n              <ion-item no-lines col-6>\n\n                <ion-label stacked>Hard Disk</ion-label>\n\n                <ion-input type="text" formControlName="hdd" ></ion-input>\n\n              </ion-item>\n\n              \n\n            </ion-row>  \n\n            <ion-row>\n\n            <ion-item col-6 no-lines *ngIf="(systemsForm.get(\'memory\').hasError(\'minlength\') || systemsForm.get(\'memory\').hasError(\'required\') ) && systemsForm.get(\'memory\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'memory\').hasError(\'required\')  || systemsForm.get(\'memory\').hasError(\'minlength\')) && systemsForm.get(\'memory\').touched" >\n\n                Memory Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item col-6  no-lines *ngIf="(systemsForm.get(\'hdd\').hasError(\'minlength\') || systemsForm.get(\'hdd\').hasError(\'required\') ) && systemsForm.get(\'hdd\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'hdd\').hasError(\'required\')  || systemsForm.get(\'hdd\').hasError(\'minlength\')) && systemsForm.get(\'hdd\').touched" >\n\n                HDD Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-row>\n\n        \n\n            <ion-item col-12>\n\n              <ion-label stacked>Antivirus Expiry</ion-label>\n\n              <ion-input type="text" readonly formControlName="avExpiry" (click)="dispdate()" (ionFocus)="dispdate()" ></ion-input>\n\n            </ion-item>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'avExpiry\').hasError(\'minlength\') || systemsForm.get(\'avExpiry\').hasError(\'required\') ) && systemsForm.get(\'avExpiry\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'avExpiry\').hasError(\'required\')  || systemsForm.get(\'avExpiry\').hasError(\'minlength\')) && systemsForm.get(\'avExpiry\').touched" >\n\n                Antivirus Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n          \n\n\n\n              <ion-row>\n\n                <ion-col col-6>\n\n                <button ion-button type="submit" [disabled]="systemsForm.invalid" icon-end full color=blue   >\n\n                  Save\n\n                </button>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  <button ion-button type="reset"  icon-end full color=blue   >\n\n                    Cancel\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row> \n\n             \n\n      </ion-list>\n\n    </form>\n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'allSystems\'">\n\n      <ion-list>\n\n        <ion-searchbar hidden placeholder="Find System" showCancelButton="false">\n\n       </ion-searchbar>\n\n       <button type="button"  color="blue" ion-button (click)="scanBarCode(\'db\')">Scanner</button>\n\n      </ion-list>\n\n      <ion-item>\n\n        <ion-row class="table-title">\n\n          <ion-col col-4 >System Id</ion-col>\n\n          <ion-col col-3 >RAM</ion-col>\n\n          <ion-col col-3 >HDD</ion-col>\n\n          <ion-col col-2 >Antivirus</ion-col>\n\n          <ion-col hidden col-2 >View</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item *ngFor="let system of systemArray">\n\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avExpiry | momentdate}} Days</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"F:\ionic-app\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_6__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], SystemsPage);
    return SystemsPage;
}()); //end of class

//# sourceMappingURL=systems.js.map

/***/ }),

/***/ 835:
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

/***/ })

});
//# sourceMappingURL=3.js.map