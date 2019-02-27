webpackJsonp([16],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPageModule", function() { return ChatbotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatbot__ = __webpack_require__(817);
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

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
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
    function ChatbotPage(navCtrl, navParams, platform, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ngZone = ngZone;
        this.questions = [];
        platform.ready().then(function () {
            ApiAIPromises.init({
                clientAccessToken: "eefd359fd25447899a07c6e5404be212"
            }).then(function (result) { return console.log(result); });
        });
    }
    ChatbotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatbotPage');
    };
    ChatbotPage.prototype.ask = function (question) {
        var _this = this;
        console.log(question);
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
    ChatbotPage.prototype.tony = function (question) {
        this.questions.push({ 'question': question });
    };
    ChatbotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatbot',template:/*ion-inline-start:"D:\IdeaElan\src\pages\chatbot\chatbot.html"*/'\n\n\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>Chat</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n    \n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n\n\n  <ion-input type="text" [(ngModel)]="question" hidden=true></ion-input>\n\n\n\n  <button ion-button (click)="ask(question)" hidden=true>Ask</button>\n\n\n\n  <div>{{answer}}</div>\n\n\n\n\n\n\n\n\n\n  <p text-center *ngIf="sending">sending...</p>\n\n  <div *ngFor="let q of questions" style="left:0px" >\n\n    <label name="title" class="msgClass">{{q.question}}</label>\n\n     <!-- your elements-->\n\n  </div>\n\n\n\n<div *ngFor="let q of questions" style="right:0px;position: absolute;">\n\n  \n\n    <label name="title">{{q.question}}</label>\n\n   <!-- your elements-->\n\n</div>\n\n\n\n \n\n \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-item>\n\n    <ion-input [(ngModel)]="question" name="message" class="input_message" placeholder="Ask me anything"></ion-input>\n\n    <button ion-button (click)="tony(question)" item-right  color="orange"> <ion-icon  name="send" ></ion-icon></button>\n\n   \n\n  </ion-item>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\IdeaElan\src\pages\chatbot\chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ })

});
//# sourceMappingURL=16.js.map