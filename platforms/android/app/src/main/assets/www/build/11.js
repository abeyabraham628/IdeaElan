webpackJsonp([11],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPageModule", function() { return ChatbotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatbot__ = __webpack_require__(826);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatbotPageModule = /** @class */ (function () {
    function ChatbotPageModule() {
    }
    ChatbotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatbot__["a" /* ChatbotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__chatbot__["a" /* ChatbotPage */]),
            ],
        })
    ], ChatbotPageModule);
    return ChatbotPageModule;
}());

//# sourceMappingURL=chatbot.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotPage = /** @class */ (function () {
    function ChatbotPage(platform, ngZone, navCtrl, navParams) {
        this.platform = platform;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        platform.ready().then(function () {
            ApiAIPromises.init({
                clientAccessToken: "26950d7a838f45e0b584e39ef33c7c47"
            }).then(function (result) { return console.log(result); });
        });
    }
    ChatbotPage.prototype.ask = function (question) {
        var _this = this;
        ApiAIPromises.requestText({
            query: question
        })
            .then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            _this.ngZone.run(function () {
                _this.answer = speech;
            });
        });
    };
    ChatbotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatbot',template:/*ion-inline-start:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\chatbot\chatbot.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic API.AI Chatbot\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <input ion-text type="text" [(ngModel)]="question">\n\n\n\n  <button ion-button (click)="ask(question)">\n\n    Ask\n\n  </button>\n\n\n\n  <div>\n\n    {{answer}}\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-v3-php-mysql-master\ionic-app git\src\pages\chatbot\chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ })

});
//# sourceMappingURL=11.js.map