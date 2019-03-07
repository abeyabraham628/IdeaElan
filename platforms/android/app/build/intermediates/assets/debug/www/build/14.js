webpackJsonp([14],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(471);
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






var HomePage = /** @class */ (function () {
    function HomePage(fcm, modalCtrl, navCtrl, navParams, afAuth, firebase, loadingCtrl) {
        var _this = this;
        this.fcm = fcm;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.loadingCtrl = loadingCtrl;
        this.users = true;
        this.recruitment = true;
        this.systems = true;
        this.policy = true;
        this.leaveRequest = true;
        this.sendMessage = true;
        this.blength = 0;
        this.wlength = 0;
        //lrcount:any=0;
        this.devicetoken = "abc";
        this.lrstatus = [];
        this.messages = [];
        this.events = [];
        this.bevents = [];
        this.wevents = [];
        this.lrcountcheck();
        console.log(this.afAuth.auth.currentUser.uid);
        this.fcm.getToken().then(function (token) {
            //backend.registerToken(token);
            _this.devicetoken = token;
            _this.checks();
            //alert(token);
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            _this.devicetoken = token;
            _this.checks();
            //alert("updated");
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                _this.navCtrl.push(HomePage_1);
                console.log("Received in background");
            }
            else {
                _this.navCtrl.push(HomePage_1);
                console.log("Received in foreground");
            }
            ;
        });
        this.roles = navParams.get('roles');
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
    HomePage_1 = HomePage;
    HomePage.prototype.lrcountcheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lrstatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lrstatus = [];
                        return [4 /*yield*/, this.firebase.database.ref("EmployeeLeaves").once('value', function (snap) {
                                snap.forEach(function (snap) {
                                    if (snap.child('status').val() == "pending") {
                                        lrstatus.push(snap.child('status').val());
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.lrstatus = lrstatus;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.checks = function () {
        var _this = this;
        var idOftoken, tokenStatus;
        this.firebase.database.ref('tokensNotificationId').orderByChild('userIdTocken').equalTo("" + this.afAuth.auth.currentUser.uid).once("value", function (snap) {
            // console.log(snap.val())
            snap.forEach(function (child) {
                _this.firebase.object("/tokensNotificationId/" + child.key)
                    .update({ tokenid: _this.devicetoken, userIdTocken: _this.afAuth.auth.currentUser.uid });
                console.log(child.child('userIdTocken').val());
                console.log(child.key);
            });
            //if not exsist , needed to be added , but already user will have an entry to token list as it is added in newuser.ts file 
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getMessages();
        this.getUpComingEvents();
        this.getUpComingEventsNotification();
    };
    HomePage.prototype.goto = function (page) {
        console.log(page);
        this.navCtrl.push(page);
    };
    HomePage.prototype.getMessages = function () {
        var _this = this;
        this.firebase.list('messages').snapshotChanges().subscribe(function (snap) {
            _this.messages = snap.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    HomePage.prototype.viewMessages = function (x) {
        var modal = this.modalCtrl.create({
            title: x.subject,
        });
        modal.present();
    };
    HomePage.prototype.getUpComingEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var events, bday, anniversary, org, diffDays, timeDiff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        events = [];
                        return [4 /*yield*/, this.firebase.database.ref("users").once('value', function (snap) {
                                snap.forEach(function (snap) {
                                    bday = snap.child('dob').val().split('/');
                                    anniversary = snap.child('doj').val().split('/');
                                    if (new Date().getMonth() + 1 === parseInt(bday[1], 10) && new Date().getDate() <= parseInt(bday[0], 10)) {
                                        events.push({
                                            'title': 'Birthday',
                                            'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                            'userId': snap.child('userId').val(),
                                            'date': parseInt(bday[0], 10) + "/" + parseInt(bday[1], 10) + "/" + new Date().getFullYear()
                                        });
                                    }
                                    if (new Date().getMonth() + 1 === parseInt(anniversary[1], 10) && new Date().getDate() <= parseInt(anniversary[0], 10)) {
                                        events.push({
                                            'title': 'Work Anniversary',
                                            'userId': snap.child('userId').val(),
                                            'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                            'date': parseInt(anniversary[0], 10) + "/" + parseInt(anniversary[1], 10) + "/" + new Date().getFullYear()
                                        });
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.events = events;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getUpComingEventsNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bevents, wevents, bday, anniversary, org, diffDays, timeDiff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bevents = [];
                        wevents = [];
                        return [4 /*yield*/, this.firebase.database.ref("users").once('value', function (snap) {
                                snap.forEach(function (snap) {
                                    bday = snap.child('dob').val().split('/');
                                    anniversary = snap.child('doj').val().split('/');
                                    if (new Date().getMonth() + 1 === parseInt(bday[1], 10) && new Date().getDate() <= parseInt(bday[0], 10)) {
                                        bevents.push({
                                            'title': 'Birthday',
                                            'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                            'date': parseInt(bday[0], 10) + "/" + parseInt(bday[1], 10) + "/" + new Date().getFullYear()
                                        });
                                    }
                                    if (new Date().getMonth() + 1 === parseInt(anniversary[1], 10) && new Date().getDate() <= parseInt(anniversary[0], 10)) {
                                        wevents.push({
                                            'title': 'Work Anniversary',
                                            'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                            'date': parseInt(anniversary[0], 10) + "/" + parseInt(anniversary[1], 10) + "/" + new Date().getFullYear()
                                        });
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.bevents = bevents;
                        this.wevents = wevents;
                        this.blength = bevents.length;
                        this.wlength = wevents.length;
                        console.log(" birthday event length", this.blength);
                        console.log(" work annivessary  event length", this.wlength);
                        return [4 /*yield*/, this.firebase.database.ref("eventTrigger/WorkEvents").update({
                                length: this.wlength,
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.firebase.database.ref("eventTrigger/birthdayEvents").update({
                                length: this.blength,
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var HomePage_1;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"f:\ionic-app\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <page-header pageTitle="HOME"></page-header>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <div *ngIf="(events.length==0)">No Upcoming Events</div>\n\n  <h5  *ngIf="(events.length!=0)">Upcoming Events ({{events.length}})</h5>\n\n  \n\n \n\n    <ion-list >\n\n      <ion-item *ngFor="let event of events">\n\n        <ion-avatar item-start>\n\n            <img src="https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/{{event.userId}}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b" onerror="this.src=\'assets/imgs/companylogo.png\'"> \n\n\n\n        </ion-avatar>\n\n        <h5> {{event.title}}</h5>\n\n        <p>{{event.user}}</p>\n\n        <p>{{event.date}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n\n\n \n\n  \n\n</ion-content>\n\n<ion-footer padding class="privilleges" >\n\n  <h5>Control Panel</h5>\n\n  <ion-list no-lines>\n\n    <button ion-item  (click)="goto(\'NewuserPage\')" [hidden]=users >\n\n        Users\n\n    </button>\n\n    \n\n \n\n      <button ion-item  (click)="goto(\'SystemsPage\')" [hidden]=systems >\n\n          Systems\n\n      </button>\n\n    \n\n      <button ion-item (click)="goto(\'RecruitmentPage\')" [hidden]=recruitment>\n\n        Recruitment\n\n     </button>\n\n   \n\n     \n\n          <button ion-item  (click)="goto(\'LeavesAdminPage\')" [hidden]=leaveRequest>\n\n             Leave Request\n\n             <ion-badge color="danger">{{lrstatus.length}}</ion-badge>\n\n          </button>\n\n       \n\n            <button ion-item   (click)="goto(\'UploadEventsPage\')" [hidden]="sendMessage">\n\n                Send Message\n\n            </button>\n\n          </ion-list>\n\n          \n\n  \n\n</ion-footer>\n\n'/*ion-inline-end:"f:\ionic-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=14.js.map