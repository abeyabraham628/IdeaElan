webpackJsonp([7],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEventsPageModule", function() { return UploadEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_events__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UploadEventsPageModule = /** @class */ (function () {
    function UploadEventsPageModule() {
    }
    UploadEventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__upload_events__["a" /* UploadEventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__upload_events__["a" /* UploadEventsPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UploadEventsPageModule);
    return UploadEventsPageModule;
}());

//# sourceMappingURL=upload-events.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Designations; });
var Designations = [
    { position: 'Intern', value: 'Intern' },
    { position: 'Jr.Software Engineer', value: 'Jr.Software Engineer' },
    { position: 'Product Manager', value: 'Product Manager' },
    { position: 'Project Manager', value: 'Project Manager' },
    { position: 'HR Execuitive', value: 'HR Execuitive' },
    { position: 'QA Manager', value: 'QA Manager' },
    { position: 'Sr.Software Engineer', value: 'Sr.Software Engineer' },
    { position: 'Sr.Software Developer', value: 'Sr.Software Developer' },
    { position: 'Support Specialist', value: 'Support Specialist' },
    { position: 'Sales Support Manager', value: 'Sales Support Manager' },
    { position: 'Software Developer', value: 'Software Developer' },
    { position: 'Software Test Engineer', value: 'Software Test Engineer' },
    { position: 'Sr.Support Specialist', value: 'Sr.Support Specialist' },
    { position: 'Team Lead', value: 'Team Lead' }
];
//# sourceMappingURL=designations.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_designations__ = __webpack_require__(774);
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
 * Generated class for the UploadEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadEventsPage = /** @class */ (function () {
    function UploadEventsPage(loadingCtrl, alertCtrl, navCtrl, navParams, firebase, afauth) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afauth = afauth;
        this.designations = __WEBPACK_IMPORTED_MODULE_5__providers_designations__["a" /* Designations */];
        this.PublishMessageForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            subject: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]),
            message: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]),
            recipients: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]),
            postedBy: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            time: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
        });
        this.recipients = [];
        this.sentItems = [];
        this.messages = "compose";
    }
    UploadEventsPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.popToRoot();
    };
    UploadEventsPage.prototype.publishMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sentTo, users, sender, i, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sentTo = this.recipients;
                        users = [];
                        return [4 /*yield*/, this.firebase.database.ref("users/" + this.afauth.auth.currentUser.uid).once('value', function (snap) {
                                sender = (snap.child('fname').val() + " " + snap.child('lname').val());
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.firebase.database.ref("users").once('value', function (snap) {
                                snap.forEach(function (childSnapshot) {
                                    if (childSnapshot.child('status').val() === "active") {
                                        for (var i = 0; i < sentTo.length; i++)
                                            if (sentTo[i] == "All") {
                                                users.push(childSnapshot.key);
                                            }
                                            else {
                                                if (childSnapshot.child('position').val() === sentTo[i])
                                                    users.push(childSnapshot.key);
                                            }
                                    }
                                });
                            })];
                    case 2:
                        _a.sent();
                        this.PublishMessageForm.controls['date'].setValue(new Date().toLocaleDateString());
                        this.PublishMessageForm.controls['time'].setValue(new Date().toLocaleTimeString());
                        this.PublishMessageForm.controls['postedBy'].setValue(sender);
                        for (i = 0; i < users.length; i++)
                            this.firebase.list("messages/" + users[i]).push({
                                'date': this.PublishMessageForm.controls['date'].value,
                                'message': this.PublishMessageForm.controls['message'].value,
                                'postedBy': this.PublishMessageForm.controls['postedBy'].value,
                                'subject': this.PublishMessageForm.controls['subject'].value,
                                'time': this.PublishMessageForm.controls['time'].value
                            });
                        this.firebase.list("sentmessages/" + this.afauth.auth.currentUser.uid).push({
                            'recipients': this.recipients,
                            'date': this.PublishMessageForm.controls['date'].value,
                            'message': this.PublishMessageForm.controls['message'].value,
                            'subject': this.PublishMessageForm.controls['subject'].value,
                            'time': this.PublishMessageForm.controls['time'].value
                        });
                        alert = this.alertCtrl.create({
                            title: "Success",
                            subTitle: "System updated succesfuly ",
                            buttons: ['OK']
                        });
                        alert.present();
                        this.PublishMessageForm.reset();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadEventsPage.prototype.addRecipients = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Choose Recipients');
        alert.addInput({
            type: 'checkbox',
            label: "All",
            value: "All"
        });
        this.designations.forEach(function (item) {
            alert.addInput({
                type: 'checkbox',
                label: item.position,
                value: item.value
            });
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.recipients = data;
                _this.PublishMessageForm.controls['recipients'].setValue(data);
            }
        });
        alert.present();
    };
    UploadEventsPage.prototype.getSentItems = function () {
        var _this = this;
        this.PublishMessageForm.reset();
        this.loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
            dismissOnPageChange: true
        });
        this.loader.present();
        this.firebase.list("sentmessages/" + this.afauth.auth.currentUser.uid).snapshotChanges().subscribe(function (snap) {
            _this.sentItems = snap.map(function (items) {
                return __assign({ $key: items.key }, items.payload.val());
            }).reverse();
        });
        this.loader.dismiss();
    };
    UploadEventsPage.prototype.viewMessage = function (message) {
        var alert = this.alertCtrl.create({
            title: "Subject: " + message.subject,
            subTitle: "Recipients: " + message.recipients,
            message: "Message: " + message.message,
            buttons: ['OK']
        });
        alert.present();
    };
    UploadEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-upload-events',template:/*ion-inline-start:"F:\ionic-app\src\pages\upload-events\upload-events.html"*/'<!--\n  Generated template for the UploadEventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <navbar pageTitle="SEND MESSAGE"></navbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]="messages" color="white" >\n        <ion-segment-button value="compose">\n           Compose\n        </ion-segment-button>\n        <ion-segment-button value="sentItems" (click)="getSentItems()">\n          Sent Items\n        </ion-segment-button>\n     </ion-segment>\n\n     <div [ngSwitch]="messages">\n        <div *ngSwitchCase="\'compose\'">\n    <form [formGroup]="PublishMessageForm" (ngSubmit)="publishMessage()">\n        \n       \n          <ion-item>\n                <ion-label floating>Recipients</ion-label>\n                <ion-input type="text" formControlName="recipients" readonly (click)="addRecipients()" (ionFocus)="addRecipients()"></ion-input>\n           </ion-item>    \n\n    <ion-item>\n      <ion-label floating>Subject</ion-label>\n        <ion-input type="text" formControlName="subject"></ion-input>\n    </ion-item>\n    <ion-item  no-lines *ngIf=" PublishMessageForm.get(\'subject\').hasError(\'required\')  && PublishMessageForm.get(\'subject\').touched">\n        <ion-label stacked  color="danger">\n          Subject Is Required\n        </ion-label>\n      </ion-item>\n    <ion-item>\n        <ion-label floating>Message</ion-label>\n          <ion-textarea rows="10" formControlName="message"></ion-textarea>\n      </ion-item>\n      <ion-item  no-lines *ngIf=" PublishMessageForm.get(\'message\').hasError(\'required\')  && PublishMessageForm.get(\'message\').touched">\n          <ion-label stacked  color="danger">\n            Message Is Required\n          </ion-label>\n        </ion-item>\n\n       <ion-row>\n            <ion-col col-6>\n                <button type="submit"  [disabled]="PublishMessageForm.invalid" color="blue" full ion-button>Send Message</button>\n          </ion-col>\n          <ion-col col-6>\n              <button ion-button type="reset"  icon-end full color=blue   >\n                Cancel\n              </button>\n            </ion-col>\n          </ion-row> \n         </form>\n  </div>\n\n  <div *ngSwitchCase="\'sentItems\'" >\n      <ion-item>\n          <ion-row class="table-title">\n            <ion-col col-5 >Recipients</ion-col>\n            <ion-col col-4 >Subject</ion-col>\n            <ion-col col-3 >Date</ion-col>\n            \n          </ion-row>\n        </ion-item>\n        <ion-item *ngFor="let message of sentItems">\n          <ion-row class="col-text table-bottom-border" (click)="viewMessage(message)" >\n              <ion-col col-5 *ngFor="let recipients of message.recipients">{{recipients}}</ion-col><ion-col col-4>{{message.subject}}</ion-col><ion-col col-3>{{message.date}}</ion-col>\n          </ion-row>\n        </ion-item>\n    </div>\n\n\n         </div>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\upload-events\upload-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], UploadEventsPage);
    return UploadEventsPage;
}());

//# sourceMappingURL=upload-events.js.map

/***/ })

});
//# sourceMappingURL=7.js.map