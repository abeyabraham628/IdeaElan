webpackJsonp([4],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(835);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_storage__ = __webpack_require__(477);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(fdb, storage, camera, navCtrl, navParams, afAuth) {
        this.fdb = fdb;
        this.storage = storage;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        /* tab1Root = 'NewuserPage';
         tab2Root = 'SystemsPage' ;
         tab3Root = 'RecruitmentPage';*/
        this.tab0Root = 'HomePage';
        this.tab1Root = 'ApplyLeavePage';
        this.tab2Root = 'PayslipPage';
        this.tab3Root = 'InboxPage';
        this.hid = true;
        this.tab0Params = this.navParams.data;
        this.getusername();
        this.hid = false;
        //this.uname=this.afAuth.auth.currentUser.email
        //console.log(this.uname);
        this.uri = "https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/" + this.afAuth.auth.currentUser.uid + ".jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5";
    }
    TabsPage.prototype.getusername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uname, position;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fdb.database.ref("/users/" + this.afAuth.auth.currentUser.uid).once('value', function (snap) {
                            uname = snap.child('fname').val();
                        })];
                    case 1:
                        _a.sent();
                        this.uname = uname;
                        return [4 /*yield*/, this.fdb.database.ref("/users/" + this.afAuth.auth.currentUser.uid).once('value', function (snap) {
                                position = snap.child('position').val();
                            })];
                    case 2:
                        _a.sent();
                        this.position = position;
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
    /*{
      
      const options: CameraOptions = {
        quality: 100,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
       saveToPhotoAlbum:false
       
      }
      
      this.camera.getPicture(options).then((imageData) => {
        
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       //console.log(imageData);
       //let base64Image= imageData.replace(/^file:\/\//, '');
       let base64Images = 'data:image/jpeg;base64,' + imageData;
       this.uri=base64Images;
      // alert(this.uri);
      }, (err) => {
       // Handle error
      });
     // alert(this.uri);
     this.hid=false;
     //image = normalizeURL(image);
  
    //uploads img to firebase storage
    //this.afStorage.upload('/upload/to/this-path', event.target.files[0]);
    return await this.camera.getPicture(options)
  
    }*/
    TabsPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () { return _this.navCtrl.setRoot('LoginPage'); });
    };
    TabsPage.prototype.changepassword = function () {
        this.navCtrl.push('ChangepasswordPage');
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
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-menu [content]="mycontent" persistent="true">\n\n  <ion-content>\n\n     <ion-list>\n\n      <ion-item style="text-align:center;">\n\n          <ion-thumbnail style="border:1px solid black; height:100px;width:100px;border-radius:50%;margin: auto">\n\n            <img [hidden]="this.hid" src="{{uri}}" style="border:1px solid black; height:100px;width:100px;border-radius:50%;margin: auto"/>\n\n          </ion-thumbnail>\n\n          <h2>{{this.uname | uppercase }}</h2>\n\n          <h6>{{this.position | uppercase }}</h6>\n\n      </ion-item>\n\n\n\n      <ion-item (click)="uploadHandler()">\n\n          <ion-icon name="images" item-end></ion-icon>\n\n          Change Image\n\n      </ion-item>\n\n     \n\n      <ion-item (click)="changepassword()">\n\n          <ion-icon name="lock" item-end></ion-icon>\n\n          Change Password\n\n      </ion-item>\n\n      \n\n      <ion-item (click)="logout()">\n\n          <ion-icon name="power" item-end></ion-icon>\n\n           Logout\n\n      </ion-item>\n\n      <ng-container *ngIf="progress | async as percent">\n\n\n\n        <progress [value]="percent" max="100"></progress>\n\n      \n\n      </ng-container>\n\n    </ion-list>\n\n\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n \n\n\n\n<ion-tabs>\n\n  <ion-tab [root]="tab0Root"   tabTitle="Home" tabIcon="home" [rootParams]="tab0Params"></ion-tab>\n\n  <ion-tab [root]="tab1Root"   tabTitle="Leave" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab2Root"  tabTitle="Payslip" tabIcon="document"></ion-tab>\n\n  <ion-tab [root]="tab3Root"  tabTitle="Inbox" tabIcon="chatboxes"></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=4.js.map