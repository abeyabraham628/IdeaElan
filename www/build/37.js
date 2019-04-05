webpackJsonp([37],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SupportPageModule);
    return SupportPageModule;
}());

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = /** @class */ (function () {
    function SupportPage(alertCtrl, toastCtrl, navCtrl, navParams, firebase, afAuth) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.afAuth = afAuth;
        this.subjectErr = true;
        this.commentErr = true;
        this.recpErr = true;
        this.employeeList = [];
        this.myRequests = [];
        this.messages = [];
        this.supportMessage = [];
        this.support = "newIssue";
        this.roles = navParams.data;
        this.getUsers();
        this.userType(this.roles);
        this.getMyRequests();
        this.getSupportMessage();
    }
    SupportPage.prototype.ionViewDidLeave = function () {
        this.support = "newIssue";
        this.resetFields();
        this.navCtrl.popToRoot();
    };
    SupportPage.prototype.getUsers = function () {
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
    SupportPage.prototype.contactSupport = function () {
        var _this = this;
        this.subject == null ? this.subjectErr = false : this.subjectErr = true;
        this.matter == null || this.matter == "" || this.matter.length < 5 ? this.commentErr = false : this.commentErr = true;
        this.recipient == null ? this.recpErr = false : this.recpErr = true;
        if (this.subjectErr && this.commentErr && this.recpErr) {
            var empObj = this.employeeList.find(function (key) { return key.$key == _this.afAuth.auth.currentUser.uid; });
            var empName = empObj.fName + " " + empObj.lName;
            this.firebase.list("support").push({
                subject: this.subject,
                matter: this.matter,
                recipient: this.recipient,
                userId: this.afAuth.auth.currentUser.uid,
                userName: empName,
                date: __WEBPACK_IMPORTED_MODULE_4_moment__().format('D-MMM-YYYY'),
                time: __WEBPACK_IMPORTED_MODULE_4_moment__().format('h:mm a'),
                status: 'pending'
            }).then(function () {
                var toast = _this.toastCtrl.create({
                    message: "Issue submitted successfully",
                    duration: 3000
                });
                toast.present();
                _this.resetFields();
            });
        }
    };
    SupportPage.prototype.resetFields = function () {
        this.subject = this.recipient = this.matter = null;
        this.recpErr = this.subjectErr = this.commentErr = true;
    };
    SupportPage.prototype.getMyRequests = function () {
        var _this = this;
        this.firebase.list('support', function (ref) { return ref.orderByChild('userId').equalTo("" + _this.afAuth.auth.currentUser.uid); }).snapshotChanges().subscribe(function (snap) {
            _this.myRequests = snap.map(function (item) {
                return __assign({}, item.payload.val());
            }).reverse();
        });
    };
    SupportPage.prototype.getSupportMessage = function () {
        var _this = this;
        this.firebase.list("support", function (ref) { return ref.orderByChild("recipient").equalTo("" + _this.user); }).snapshotChanges().subscribe(function (snap) {
            _this.supportMessage = snap.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            }).reverse();
            _this.messages = _this.supportMessage;
        });
    };
    SupportPage.prototype.userType = function (roles) {
        if (roles[0] == 'value1')
            this.user = "admin";
        else if (roles[4] == "value5")
            this.user = "hr";
    };
    SupportPage.prototype.changeStatus = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({ enableBackdropDismiss: false });
        alert.setTitle("Subject: " + message.subject);
        alert.setSubTitle("From: " + message.userName);
        alert.setMessage("Issue: " + message.matter);
        alert.addInput({
            type: 'radio',
            label: "Under Review",
            value: "review"
        });
        alert.addInput({
            type: 'radio',
            label: "Closed",
            value: "closed"
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                if (data != null) {
                    _this.firebase.list("support").update(message.$key, {
                        status: data
                    });
                } //end of if
                _this.filter = 'all';
            } //end of handler  
        }); //end of ok button
        alert.present();
    };
    SupportPage.prototype.filterRequests = function (ctxt) {
        if (ctxt != 'all') {
            this.messages = this.supportMessage;
            this.messages = this.supportMessage.filter(function (item) { return item.status === ctxt; });
        }
        else {
            this.messages = this.supportMessage;
        }
    };
    var _a, _b, _c, _d, _e, _f;
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"D:\IdeaElan\src\pages\support\support.html"*/'<!--\n\n Abey Abraham\n\n-->\n\n<ion-header no-border>\n\n  <page-header pageTitle="Support"></page-header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="support" color="white" >\n\n    <ion-segment-button value="newIssue">\n\n       New Issue\n\n    </ion-segment-button>\n\n    <ion-segment-button value="pastIssues" (click)="resetFields()">\n\n      History\n\n    </ion-segment-button>\n\n    <ion-segment-button value="messages" (click)="resetFields()" *ngIf="user==\'admin\' || user==\'hr\' ">\n\n      Messsages\n\n    </ion-segment-button>\n\n </ion-segment>\n\n\n\n <div [ngSwitch]="support">\n\n    <div *ngSwitchCase="\'newIssue\'">\n\n        <ion-item>\n\n            <ion-label stacked>Send To</ion-label>\n\n              <ion-select [(ngModel)]="recipient">\n\n                <ion-option value="hr">HR</ion-option>\n\n                <ion-option value="admin">Admin</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          <ion-item  no-lines [hidden]="recpErr">\n\n            <ion-label color="danger" stacked>Recipient cannot be blank</ion-label>\n\n          </ion-item>\n\n     \n\n      <ion-item>\n\n        <ion-label stacked>I need Help With</ion-label>\n\n          <ion-select [(ngModel)]="subject">\n\n            <ion-option value="Internet">Internet Connectivity</ion-option>\n\n            <ion-option value="Computer">Computer Related</ion-option>\n\n            <ion-option value="Other">Other</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n      <ion-item no-lines [hidden]="subjectErr">\n\n          <ion-label color="danger" stacked>Subject cannot be blank</ion-label>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Please enter your issue</ion-label>\n\n        <ion-textarea rows=5 [(ngModel)]="matter"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item  no-lines [hidden]="commentErr">\n\n          <ion-label color="danger" stacked>Minimum 5 Characters</ion-label>\n\n        </ion-item>\n\n\n\n      <ion-row>\n\n        <ion-col col-6><button ion-button  type="button" color="blue" full (click)="contactSupport()">Send</button></ion-col>\n\n        <ion-col col-6><button ion-button  type="reset" color="blue" full (click)="resetFields()">Cancel</button></ion-col>\n\n       \n\n      </ion-row>\n\n      \n\n    </div>\n\n    <div *ngSwitchCase="\'pastIssues\'">\n\n        <ion-item>\n\n            <ion-row class="table-title">\n\n              <ion-col col-3 >Date</ion-col>\n\n              <ion-col col-3 >Send To</ion-col>\n\n               <ion-col col-4 >Subject</ion-col>\n\n              <ion-col col-2 >Status</ion-col>\n\n             \n\n            </ion-row>\n\n          </ion-item>\n\n          <ion-item *ngFor=\'let r of myRequests\' [ngClass]=r.status  >\n\n              <ion-row class=\'col-text table-bottom-border\'  >\n\n                  <ion-col col-3>{{r.date}}</ion-col><ion-col col-3>{{r.recipient}}</ion-col><ion-col col-4>{{r.subject}}</ion-col><ion-col col-2>{{r.status}}</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'messages\'">\n\n     <ion-item>\n\n       <ion-label >Filter Messages By</ion-label>\n\n      <ion-select interface="popover" (ionChange)="filterRequests($event)" [(ngModel)]="filter">\n\n          <ion-option value="all" selected>All</ion-option>\n\n        <ion-option value="pending">Pending</ion-option>\n\n        <ion-option value="review">Under Review</ion-option>\n\n        <ion-option value="closed">Closed</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n       \n\n      <ion-item>\n\n          <ion-row class="table-title">\n\n            <ion-col col-3 >Date</ion-col>\n\n            <ion-col col-4 >From</ion-col>\n\n             <ion-col col-3 >Subject</ion-col>\n\n            <ion-col col-2 >Status</ion-col>\n\n           \n\n          </ion-row>\n\n        </ion-item>\n\n        \n\n        <ion-item *ngFor=\'let s of messages\' >\n\n            <ion-row class="col-text table-bottom-border " [ngClass]=s.status (click)="changeStatus(s)" >\n\n                <ion-col col-3>{{s.date}}</ion-col><ion-col col-4>{{s.userName}}</ion-col><ion-col col-3>{{s.subject}}</ion-col><ion-col col-2>{{s.status}}</ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n  </div>\n\n\n\n </div>\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"D:\IdeaElan\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _f : Object])
    ], SupportPage);
    return SupportPage;
}()); //end of class

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=37.js.map