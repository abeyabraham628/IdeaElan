webpackJsonp([36],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_form_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatbot_chatbot__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_strings__ = __webpack_require__(470);
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
//Abey Abraham









/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(data, fdb, storage, camera, navCtrl, navParams, afAuth) {
        var _this = this;
        this.data = data;
        this.fdb = fdb;
        this.storage = storage;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.defaultImg = __WEBPACK_IMPORTED_MODULE_8__providers_strings__["a" /* AppConst */].logo;
        this.tab0Root = 'HomePage';
        this.tab1Root = 'ApplyLeavePage';
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__chatbot_chatbot__["a" /* ChatbotPage */];
        this.tab3Root = 'InboxPage';
        this.tab4Root = 'SupportPage';
        this.messageCount = 0;
        this.hid = true;
        this.hideAdmin = true;
        this.users = true;
        this.recruitment = true;
        this.systems = true;
        this.policy = true;
        this.leaveRequest = true;
        this.sendMessage = true;
        this.controllPanel = false;
        this.user = "";
        this.messages = [];
        this.SupportMessages = [];
        this.roles = this.navParams.data;
        this.tab0Params = this.roles;
        if (this.roles[0] != "null") {
            this.user = "admin";
            this.users = false;
            this.recruitment = false;
            this.systems = false;
            this.policy = false;
            this.leaveRequest = false;
            this.sendMessage = false;
            this.controllPanel = true;
        }
        if (this.roles[1] != "null") {
            this.leaveRequest = false;
            this.controllPanel = true;
        }
        if (this.roles[2] != "null") {
            this.policy = false;
            this.controllPanel = true;
        }
        if (this.roles[3] != "null") {
            this.sendMessage = false;
            this.controllPanel = true;
        }
        if (this.roles[4] != "null") {
            if (this.user != 'admin')
                this.user = "hr";
            this.recruitment = false;
            this.controllPanel = true;
        }
        if (this.roles[5] != "null") {
            this.systems = false;
            this.controllPanel = true;
        }
        if (this.roles[6] != "null") {
            this.users = false;
            this.controllPanel = true;
        }
        if (this.user == "hr" || this.user == "admin") {
            this.getSupportMessages();
        }
        this.getusername();
        this.getMessages();
        this.hid = false;
        //this.uname=this.afAuth.auth.currentUser.email
        //console.log(this.uname);
        //.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afAuth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5`
        this.data.currentUri.subscribe(function (item) { return _this.uri = item; });
    }
    TabsPage.prototype.getusername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fdb.database.ref("/users/" + this.afAuth.auth.currentUser.uid).on('value', function (snap) {
                            _this.uname = snap.child('fname').val() + " " + snap.child('lname').val();
                            _this.position = snap.child('position').val();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.changeimage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            saveToPhotoAlbum: false
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TabsPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert(this.afAuth.auth.currentUser.uid);
                        return [4 /*yield*/, this.fdb.database.ref('tokensNotificationId').orderByChild('userIdTocken').equalTo("" + this.afAuth.auth.currentUser.uid).once("value", function (snap) {
                                snap.forEach(function (child) {
                                    _this.fdb.object("/tokensNotificationId/" + child.key).update({ tokenid: "null", userIdTocken: _this.afAuth.auth.currentUser.uid });
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.afAuth.auth.signOut()
                            .then(function () { return _this.navCtrl.setRoot('LoginPage'); });
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.changepassword = function () {
        this.navCtrl.push('ChangepasswordPage');
    };
    TabsPage.prototype.goto = function (page) {
        this.navCtrl.push(page);
    };
    TabsPage.prototype.createUploadTask = function (file) {
        this.hid = false;
        var filePath = this.afAuth.auth.currentUser.uid + ".jpg";
        this.image = 'data:image/jpg;base64,' + file;
        this.uri = this.image;
        this.task = this.storage.ref(filePath).putString(this.image, 'data_url');
        this.progress = this.task.percentageChanges();
    };
    TabsPage.prototype.uploadHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.changeimage()];
                    case 1:
                        base64 = _a.sent();
                        this.createUploadTask(base64);
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.getMessages = function () {
        var _this = this;
        this.fdb.list("messages/" + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe(function (snap) {
            _this.messages = snap.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.messageCount = 0;
            for (var i = 0; i < _this.messages.length; i++) {
                if (_this.messages[i]['status'] != 'read')
                    _this.messageCount++;
            }
            console.log("messages is ", _this.messages[0]['status']);
            console.log(_this.messages.length);
            console.log("actual messagecount ", _this.messageCount);
        });
    };
    TabsPage.prototype.getSupportMessages = function () {
        var _this = this;
        this.fdb.list("support", function (ref) { return ref.orderByChild("recipient").equalTo("" + _this.user); }).snapshotChanges().subscribe(function (snap) {
            _this.SupportMessages = snap.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.supportMessagecount = 0;
            if (_this.SupportMessages.length > 0) {
                for (var i = 0; i < _this.SupportMessages.length; i++) {
                    if ((_this.SupportMessages[i]['status'] == 'pending') || (_this.SupportMessages[i]['status'] == 'review'))
                        _this.supportMessagecount++;
                }
                console.log("messages is ", _this.SupportMessages[0]['status']);
                console.log(_this.SupportMessages.length);
                console.log("actual SUPPORT count ", _this.supportMessagecount);
            }
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\IdeaElan\src\pages\tabs\tabs.html"*/'<!--\n\n  Abey Abraham\n\n-->\n\n\n\n\n\n<ion-menu [content]="mycontent" persistent="true" class="sideMenuList">\n\n    \n\n      <ion-header>\n\n      <ion-item no-lines style="text-align:center;background-color: #2679b0" (click)="goto(\'MyprofilePage\')">\n\n            \n\n                <img src="{{uri}}" onerror="this.src=\'assets/imgs/companylogo.png\'" style="height:50px;width:50px;border-radius:30%;margin: auto"> \n\n              \n\n            <h4 style="color:#ffffff">{{this.uname | titlecase }}</h4>\n\n            <h6 style="color:#ffffff">{{this.position | titlecase }}</h6>\n\n            \n\n          </ion-item>\n\n        </ion-header>\n\n      \n\n<ion-content>\n\n  \n\n      <ion-item hidden (click)="uploadHandler()" class="sideMenuList">\n\n          <ion-icon name="images" item-end small></ion-icon>\n\n          Change Image\n\n      </ion-item>\n\n     \n\n      <ion-item (click)="changepassword()" menuClose class="sideMenuList">\n\n          <ion-icon name="lock" item-end small></ion-icon>\n\n          Change Password\n\n      </ion-item>\n\n\n\n      <ion-item (click)="goto(\'PolicyPage\')" menuClose class="sideMenuList">\n\n          <ion-icon name="document" item-end small></ion-icon>\n\n           Company Policy\n\n      </ion-item>\n\n      \n\n      \n\n\n\n      <ion-list-header *ngIf="controllPanel">\n\n          Control Panel\n\n        </ion-list-header>\n\n\n\n      <ion-item (click)="goto(\'NewuserPage\')" menuClose [hidden]=users>\n\n        <ion-icon name="arrow-forward" small item-end></ion-icon>\n\n        Users\n\n      </ion-item>\n\n      <ion-item (click)="goto(\'SystemsPage\')" menuClose [hidden]=systems>\n\n        <ion-icon name="arrow-forward" small item-end></ion-icon>\n\n        Systems\n\n      </ion-item>\n\n      <ion-item (click)="goto(\'RecruitmentPage\')" menuClose [hidden]=recruitment>\n\n        <ion-icon name="arrow-forward" small item-end></ion-icon>\n\n        Recruitment\n\n      </ion-item>\n\n      <ion-item (click)="goto(\'LeavesAdminPage\')" menuClose [hidden]=leaveRequest>\n\n        <ion-icon name="arrow-forward" small item-end></ion-icon>\n\n        Leave Requests\n\n      </ion-item>\n\n      <ion-item (click)="goto(\'UploadEventsPage\')" menuClose [hidden]="sendMessage">\n\n          <ion-icon name="arrow-forward" small item-end></ion-icon>\n\n        Send Message\n\n      </ion-item>\n\n      <ng-container *ngIf="progress | async as percent">\n\n        \n\n          <progress [value]="percent" max="100"></progress>\n\n        \n\n        </ng-container>\n\n     \n\n    </ion-content>\n\n\n\n     <ion-footer>\n\n        <ion-item (click)="logout()"  class="sideMenuList">\n\n            <ion-icon name="power" item-end small></ion-icon>\n\n             Logout\n\n        </ion-item>\n\n       <ion-item no-lines>\n\n         <ion-label>IdeaElan | version 0.0.1</ion-label>\n\n       </ion-item>\n\n     </ion-footer>\n\n\n\n      \n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n \n\n\n\n<ion-tabs >\n\n  <ion-tab [root]="tab0Root"   tabTitle="Home" tabIcon="home"  [rootParams]="tab0Params" ></ion-tab>\n\n  <ion-tab [root]="tab1Root"   tabTitle="Leave" tabIcon="person" ></ion-tab>\n\n  <ion-tab [root]="tab2Root"   tabTitle="Chatbot" tabIcon="document" ></ion-tab>\n\n  <ion-tab [root]="tab3Root"  tabTitle="Inbox" tabIcon="chatboxes" [tabBadge]=\'this.messageCount>0?this.messageCount:null\' tabBadgeStyle="danger" ></ion-tab>\n\n  <ion-tab [root]="tab4Root"  tabTitle="Support" tabIcon="quote"  [rootParams]="tab0Params" [tabBadge]=\'this.supportMessagecount>0?this.supportMessagecount:null\' tabBadgeStyle="danger"></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"D:\IdeaElan\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__providers_form_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_form_service__["a" /* DataService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__["a" /* AngularFireStorage */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _g : Object])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=36.js.map