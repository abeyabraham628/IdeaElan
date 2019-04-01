webpackJsonp([21],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(468);
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

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(723);
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
    function HomePage(http, storage, fcm, modalCtrl, navCtrl, navParams, afAuth, firebase, loadingCtrl) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.fcm = fcm;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.loadingCtrl = loadingCtrl;
        this.blength = 0;
        this.wlength = 0;
        //lrcount:any=0;
        this.devicetoken = "abc";
        this.lrstatus = [];
        /*messages=[]
        getMessages(){
          this.firebase.list('messages').snapshotChanges().subscribe(snap=>{
            this.messages=snap.map(item=>{
              return{
                $key:item.key,
                ...item.payload.val()
              }
        
            })
          })
          
        }
        
        viewMessages(x){
            let modal=this.modalCtrl.create({
              title:x.subject,
           })
            modal.present()
        }*/
        this.events = [];
        this.systemEvents = [];
        this.interviewEvents = [];
        this.allEvents = [];
        this.employeeList = [];
        this.bevents = [];
        this.wevents = [];
        this.lrcountcheck();
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
        this.fcm.onNotificationOpen().subscribe(function (data) {
            if (data.wasTapped) {
                _this.navCtrl.push(HomePage_1);
            }
            else {
                _this.navCtrl.push(HomePage_1);
            }
            ;
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.tony = function () {
        this.http.get('src\server\admin\index.ts').subscribe(function (response) {
            console.log(response);
        });
    };
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
            snap.forEach(function (child) {
                _this.firebase.object("/tokensNotificationId/" + child.key)
                    .update({ tokenid: _this.devicetoken, userIdTocken: _this.afAuth.auth.currentUser.uid });
            });
            //if not exsist , needed to be added , but already user will have an entry to token list as it is added in newuser.ts file 
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //this.getMessages()
        this.getUpComingEvents();
        this.getUpComingEventsNotification();
    };
    HomePage.prototype.goto = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.getUpComingEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bday, anniversary, avExpiry, interviewDate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /*let org:any
                    let diffDays:number
                    let timeDiff:number
                    */
                    return [4 /*yield*/, this.firebase.database.ref("users").on('value', function (snap) {
                            snap.forEach(function (snap) {
                                bday = snap.child('dob').val();
                                anniversary = snap.child('doj').val();
                                _this.employeeList.push({
                                    '$key': snap.key,
                                    'fName': snap.child('fname').val(),
                                    'lName': snap.child('lname').val()
                                });
                                if (parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('M')) == parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(bday).format('M')) && parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('D')) <= parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(bday).format('D'))) {
                                    _this.events.push({
                                        'title': 'Birthday',
                                        'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                        'userId': snap.child('userId').val(),
                                        'date': __WEBPACK_IMPORTED_MODULE_5_moment__(bday).format('D-MMM') + "-" + __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY')
                                    });
                                }
                                if (parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('M')) == parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(anniversary).format('M')) && parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('D')) <= parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(anniversary).format('D'))) {
                                    _this.events.push({
                                        'title': 'Work Anniversary',
                                        'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                        'userId': snap.child('userId').val(),
                                        'date': __WEBPACK_IMPORTED_MODULE_5_moment__(anniversary).format('D-MMM') + "-" + __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY')
                                    });
                                }
                            });
                        })];
                    case 1:
                        /*let org:any
                        let diffDays:number
                        let timeDiff:number
                        */
                        _a.sent();
                        return [4 /*yield*/, this.firebase.database.ref("systems").once('value', function (snap) {
                                snap.forEach(function (snap) {
                                    avExpiry = snap.child('avExpiry').val();
                                    var empObj = _this.employeeList.find(function (key) { return key.$key == snap.child('systemUser').val(); });
                                    var empName = "User: " + empObj.fName + " " + empObj.lName;
                                    if (parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('M')) == parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(avExpiry).format('M')) && parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('D')) <= parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(avExpiry).format('D'))) {
                                        _this.systemEvents.push({
                                            'title': 'Anti Virus Expiry',
                                            'user': empName,
                                            'userId': snap.child('systemId').val(),
                                            'date': __WEBPACK_IMPORTED_MODULE_5_moment__(avExpiry).format('D-MMM') + "-" + __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY')
                                        });
                                    }
                                });
                            })];
                    case 2:
                        _a.sent(); //end of systems event list
                        return [4 /*yield*/, this.firebase.database.ref("Schedules").once('value', function (snap) {
                                snap.forEach(function (snap) {
                                    interviewDate = snap.child('interviewDate').val();
                                    if (parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('M')) == parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(interviewDate).format('M')) && parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('D')) <= parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(interviewDate).format('D'))) {
                                        _this.interviewEvents.push({
                                            'title': 'Upcoming Interview',
                                            'user': null,
                                            'userId': null,
                                            'date': __WEBPACK_IMPORTED_MODULE_5_moment__(interviewDate).format('D-MMM') + "-" + __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY')
                                        });
                                    }
                                });
                            })];
                    case 3:
                        _a.sent(); //end of systems event list
                        this.storage.get('roles').then(function (userType) {
                            if (userType[0] == "value1") { //for admin
                                _this.systemEvents.forEach(function (item) { return _this.events.push(item); });
                                _this.interviewEvents.forEach(function (item) { return _this.events.push(item); });
                            }
                            else if (_this.userType[4] == "value5") { //recruitment
                                _this.interviewEvents.forEach(function (item) { return _this.events.push(item); });
                            }
                            else if (_this.userType[5] == "value6") { //system
                                _this.systemEvents.forEach(function (item) { return _this.events.push(item); });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    }; //end of getupcoming events function
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
                                    bday = snap.child('dob').val();
                                    anniversary = snap.child('doj').val();
                                    if (parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('M')) == parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(bday).format('M')) && parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('D')) <= parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(bday).format('D'))) {
                                        bevents.push({
                                            'title': 'Birthday',
                                            'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                            'userId': snap.child('userId').val(),
                                            'date': __WEBPACK_IMPORTED_MODULE_5_moment__(bday).format('D-MMM') + "-" + __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY')
                                        });
                                    }
                                    if (parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('M')) == parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(anniversary).format('M')) && parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__().format('D')) <= parseInt(__WEBPACK_IMPORTED_MODULE_5_moment__(anniversary).format('D'))) {
                                        wevents.push({
                                            'title': 'Work Anniversary',
                                            'user': snap.child('fname').val() + " " + snap.child('lname').val(),
                                            'userId': snap.child('userId').val(),
                                            'date': __WEBPACK_IMPORTED_MODULE_5_moment__(anniversary).format('D-MMM') + "-" + __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY')
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
    var HomePage_1, _a, _b, _c, _d, _e, _f, _g, _h, _j;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic-app\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <page-header pageTitle="HOME"></page-header>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <div *ngIf="(events.length==0)">No Upcoming Events</div>\n\n  <h5  *ngIf="(events.length!=0)">Upcoming Events ({{events.length}})</h5>\n\n  <button ion-button (click)="tony()">Hello</button>\n\n \n\n    <ion-list >\n\n      <ion-item *ngFor="let event of events">\n\n        <ion-avatar item-start>\n\n            <img src="https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/{{event.userId}}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b" onerror="this.src=\'assets/imgs/companylogo.png\'"> \n\n\n\n        </ion-avatar>\n\n        <h5> {{event.title}}</h5>\n\n        <p>{{event.user}}</p>\n\n        <p>{{event.date}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n\n\n \n\n  \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase__["a" /* Firebase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_firebase__["a" /* Firebase */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]) === "function" ? _j : Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=21.js.map