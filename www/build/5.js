webpackJsonp([5],{

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewuserPageModule", function() { return NewuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewuserPageModule = /** @class */ (function () {
    function NewuserPageModule() {
    }
    NewuserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newuser__["a" /* NewuserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newuser__["a" /* NewuserPage */]),
            ],
        })
    ], NewuserPageModule);
    return NewuserPageModule;
}());

//# sourceMappingURL=newuser.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(330);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var NewuserPage = /** @class */ (function () {
    function NewuserPage(navCtrl, ref, fdb, navParams, alertCtrl, datePicker, afAuth) {
        // this.disa=false; 
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.fdb = fdb;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.datePicker = datePicker;
        this.afAuth = afAuth;
        this.itemslist = [];
        this.items = [];
        this.loaditems = [];
        this.arrData = [];
        this.dnew = [];
        this.butn = "save";
        this.page = 0;
        this.x = true;
        this.statuss = false;
        this.i = 0;
        this.v1 = -1;
        this.v2 = 0;
        this.v3 = 0;
        this.v4 = 0;
        this.v5 = 0;
        this.v6 = 0;
        this.v7 = 0;
        this.status = "active";
        this.userItem = {};
        this.icons = "0";
        this.icons = "0";
        this.users = "newUser";
        this.itemRef = fdb.database.ref("/users/");
    }
    /*
    ionViewDidLoad() {
    
    this.itemRef.on('value', itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach( itemSnap => {
        this.items.push(itemSnap.val());
        console.log(this.items);
        //console.log("HI");
        return false;
      });
      this.itemslist=this.items;
      //this.loaditems=this.items;
    });
  
  
  
  
    //new
    //this.itemslist=this.items;
    //this.loaditems=this.items;
    //console.log("START");
   // console.log(this.itemslist);
    //console.log("STOP");
    //console.log("START");
   // console.log(this.items);
   // console.log("STOP");
  } */
    //new
    NewuserPage.prototype.new = function () {
        var _this = this;
        this.x = true;
        console.log("NEW CALLED ");
        this.itemRef.on('value', function (itemSnapshot) {
            _this.items = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.items.push(itemSnap.val());
                console.log(_this.items);
                //console.log("HI");
                return false;
            });
            _this.itemslist = _this.items;
            _this.loaditems = _this.items;
            _this.ref.detectChanges();
        });
        console.log("PRINT ");
        console.log(this.itemslist);
        console.log("NEW ENDED");
        console.log("try1");
        this.itemslist = this.items;
        console.log(this.itemslist);
        console.log("try1 end");
        console.log(this.loaditems);
        this.clear();
        this.butn = "save";
    };
    NewuserPage.prototype.initializeItems = function () {
        //console.log(this.itemslist);
        this.itemslist = this.loaditems;
        console.log("reason ", this.itemslist);
        console.log("reasonssss ", this.items);
    };
    //new
    NewuserPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.itemslist = this.itemslist.filter(function (v) {
            if ((v.position && q) || (v.fname && q)) {
                if ((v.position.toLowerCase().indexOf(q.toLowerCase()) > -1) || (v.fname.toLowerCase().indexOf(q.toLowerCase()) > -1)) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.itemslist.length);
        console.log(this.itemslist);
    };
    /*selectedTab(index:number){
      this.slider.slideTo(index);
  
    }*/
    NewuserPage.prototype.dispdate = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            if (type === "join") {
                _this.userItem.doj = new Date(date).toLocaleDateString();
            }
            else {
                _this.userItem.dob = new Date(date).toLocaleDateString();
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    NewuserPage.prototype.s = function (keys) {
        console.log(keys);
        this.userItemRef$.remove(keys);
    };
    NewuserPage.prototype.btn = function (userItem) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1, ref, ref, alert, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.butn == "save")) return [3 /*break*/, 7];
                        this.sp = false;
                        if (!(this.userItem.data == null)) return [3 /*break*/, 5];
                        // this.userItem.data=null;
                        this.dnew[0] = "null";
                        this.dnew[1] = "null";
                        this.dnew[2] = "null";
                        this.dnew[3] = "null";
                        this.dnew[4] = "null";
                        this.dnew[5] = "null";
                        this.dnew[6] = "null";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.userItem.email, this.userItem.password)];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        ref = this.fdb.list("users").query.ref.push();
                        ref.set({
                            key: ref.key,
                            fname: this.userItem.fname,
                            lname: this.userItem.lname,
                            dob: this.userItem.dob,
                            mobile: this.userItem.mobile,
                            email: this.userItem.email,
                            doj: this.userItem.doj,
                            position: this.userItem.position,
                            data: this.dnew,
                            status: this.status
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        ref = this.fdb.list("users").query.ref.push();
                        ref.set({
                            key: ref.key,
                            fname: this.userItem.fname,
                            lname: this.userItem.lname,
                            dob: this.userItem.dob,
                            mobile: this.userItem.mobile,
                            email: this.userItem.email,
                            doj: this.userItem.doj,
                            position: this.userItem.position,
                            data: this.userItem.data,
                            status: this.status
                        });
                        console.log(ref.key);
                        _a.label = 6;
                    case 6:
                        alert = this.alertCtrl.create({
                            title: "SUCCESS",
                            subTitle: "New User has been added succesfuly ",
                            buttons: ['OK']
                        });
                        alert.present();
                        this.clear();
                        return [3 /*break*/, 8];
                    case 7:
                        //this.clear();
                        //update code
                        console.log("update try 1");
                        console.log(this.userItem.data);
                        //console.log(this.userItem.$key);
                        if (this.statuss == true) {
                            this.status = "inactive";
                        }
                        else {
                            this.status = "active";
                        }
                        //this.fdb.object("/users/-LVIJAIZlMtJO4GVN1j5" )
                        this.fdb.object("/users/" + this.userItem.$key)
                            .update({ fname: this.userItem.fname, lname: this.userItem.lname, dob: this.userItem.dob, mobile: this.userItem.mobile, email: this.userItem.email, doj: this.userItem.doj, position: this.userItem.position, data: this.userItem.data, status: this.status });
                        alert = this.alertCtrl.create({
                            title: "SUCCESS",
                            subTitle: "Data has been updated succesfuly ",
                            buttons: ['OK']
                        });
                        alert.present();
                        //this.sp.checked=false;
                        //this.sp.checked = false;
                        this.sp = false;
                        console.log("nadakunillaaa");
                        //console.log(this.sp.checked);
                        this.clear();
                        this.userItem.data = null;
                        this.butn = "save";
                        this.x = true;
                        this.status = "active";
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    NewuserPage.prototype.collect = function (keys, fname, lname, dob, mobile, email, doj, position, data, status) {
        this.userItem.fname = fname;
        this.userItem.lname = lname;
        this.userItem.mobile = mobile;
        this.userItem.dob = dob;
        this.userItem.doj = doj;
        this.userItem.email = email;
        this.userItem.position = position;
        this.userItem.$key = keys;
        this.userItem.data = data;
        this.users = "newUser";
        this.butn = "update";
        this.chk = 0;
        this.x = false;
        this.userItem.status = status;
        if (status != "active") {
            //console.log("inaaaaactiveeee",status);
            this.statuss = true;
        }
        else {
            this.statuss = false;
        }
        for (this.i = 0; this.i < 6; this.i++) {
            if (this.userItem.data[this.i] != "null") {
                this.chk = 1;
            }
        }
        if (this.chk == 1) {
            this.sp = true;
            // console.log("checkbox validation failed")
        }
        // console.log("reason 1",this.items);
        //console.log("reason 2",data);
        //console.log("reason",this.itemslist);
        //console.log("kerunundonn nokitha",this.userItem.data);
        /*this.slides.lockSwipes(false);
        this.slider.slideTo(0);
        this.slides.lockSwipes(true);*/
    };
    NewuserPage.prototype.clear = function () {
        this.userItem.fname = "";
        this.userItem.lname = "";
        this.userItem.mobile = "";
        this.userItem.dob = "";
        this.userItem.doj = "";
        this.userItem.email = "";
        this.userItem.position = "";
        //this.userItem.data="null";
    };
    NewuserPage.prototype.showCheckbox = function (e, userItem) {
        //console.log(this.datas);
        //e.checked = true;
        var _this = this;
        //console.log("kerunillaa")
        this.datas = this.userItem.data;
        //console.log(this.datas);
        if (this.datas != null) {
            //console.log("kerunnuu");
            //console.log("what comes in ");
            //console.log(this.datas);
            //console.log(this.v1);
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value1")
                    this.v1 = 0;
            }
            console.log("check1", this.v1);
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value2")
                    this.v2 = 1;
            }
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value3")
                    this.v3 = 2;
            }
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value4")
                    this.v4 = 3;
            }
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value5")
                    this.v5 = 4;
            }
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value6")
                    this.v6 = 5;
            }
            for (this.i = 0; this.i <= 6; this.i++) {
                if (this.datas[this.i] == "value7")
                    this.v7 = 6;
            }
            //console.log("after condition check ");
            //console.log(this.datas);
            console.log(this.v1, this.v2, this.v3, this.v4, this.v5, this.v6, this.v7);
            //-1 1 2 3 4 5 6 
            //null 
            if (this.v1 == -1) {
                this.datas[0] = "null";
            }
            else {
                this.datas[0] = "value1";
            }
            if (this.v2 == 0) {
                this.datas[1] = "null";
            }
            else {
                this.datas[1] = "value2";
            }
            if (this.v3 == 0) {
                this.datas[2] = "null";
            }
            else {
                this.datas[2] = "value3";
            }
            if (this.v4 == 0) {
                this.datas[3] = "null";
            }
            else {
                this.datas[3] = "value4";
            }
            if (this.v5 == 0) {
                this.datas[4] = "null";
            }
            else {
                this.datas[4] = "value5";
            }
            9;
            if (this.v6 == 0) {
                this.datas[5] = "null";
            }
            else {
                this.datas[5] = "value6";
            }
            if (this.v7 == 0) {
                this.datas[6] = "null";
            }
            else {
                this.datas[6] = "value7";
            }
            //console.log(this.v1,this.v2,this.v3,this.v4,this.v5,this.v6,this.v7);
            console.log('Cdatas look like  value :', this.datas);
            this.chk1 = 0;
            //console.log(this.datas[0]=="value1"?false:true);
            //this.datas=['value1'];
            /*if(this.datas!=null){
              for(this.i=0;this.i<7;this.i++){
               if(this.datas[this.i]=="value1"){this.v1=true}
                if(this.datas[this.i]=="value2"){this.v2=true}
                if(this.datas[this.i]=="value3"){this.v3=true}
                if(this.datas[this.i]=="value4"){this.v4=true}
                if(this.datas[this.i]=="value5"){this.v5=true}
                if(this.datas[this.i]=="value6"){this.v6=true}
                if(this.datas[this.i]=="value7"){this.v7=true}
                
              }
              }
            //console.log("c "+this.datas[0]);
            */
        }
        if (e.checked) {
            var alert = this.alertCtrl.create();
            alert.setTitle('Which are the privileges that you want to set to the user?');
            //
            alert.addInput({
                type: 'checkbox',
                label: 'Admin',
                value: 'value1',
                checked: this.datas == null ? false : this.datas[0] == "value1" ? true : false
            });
            //console.log("hi");
            alert.addInput({
                type: 'checkbox',
                label: 'Leave Approvals ',
                value: 'value2',
                // checked:this.datas[1]!="null"?this.datas[1]=="value2"?true:false:false
                checked: this.datas == null ? false : this.datas[1] == "value2" ? true : false
            });
            alert.addInput({
                type: 'checkbox',
                label: 'Holiday List Upload',
                value: 'value3',
                // checked:this.datas[2]!="null"?this.datas[2]=="value3"?true:false:false
                checked: this.datas == null ? false : this.datas[2] == "value3" ? true : false
            });
            alert.addInput({
                type: 'checkbox',
                label: 'Payslip Upload',
                value: 'value4',
                //checked:this.datas[3]!="null"?this.datas[3]=="value4"?true:false:false
                checked: this.datas == null ? false : this.datas[3] == "value4" ? true : false
            });
            alert.addInput({
                type: 'checkbox',
                label: 'Recruitment',
                value: 'value5',
                //checked:this.datas[4]!="null"?this.datas[4]=="value5"?true:false:false
                checked: this.datas == null ? false : this.datas[4] == "value5" ? true : false
            });
            alert.addInput({
                type: 'checkbox',
                label: 'System',
                value: 'value6',
                // checked:this.datas[5]!="null"?this.datas[5]=="value6"?true:false:false
                checked: this.datas == null ? false : this.datas[5] == "value6" ? true : false
            });
            alert.addInput({
                type: 'checkbox',
                label: 'Add Users ',
                value: 'value7',
                // checked:this.datas[6]!="null"?this.datas[6]=="value7"?true:false:false
                checked: this.datas == null ? false : this.datas[6] == "value7" ? true : false
            });
            alert.addButton({
                text: "cancel",
                handler: function (data) {
                    if (_this.butn == "save" || _this.butn == "update") {
                        _this.chk = 0;
                        _this.chk1 = 0;
                        if (_this.userItem.data == null) {
                            _this.sp = false;
                            console.log(" one ");
                        }
                        else {
                            {
                                for (_this.i = 0; _this.i < 6; _this.i++) {
                                    if (_this.userItem.data[_this.i] == "null") {
                                        _this.chk1 = 1;
                                    }
                                }
                                if (_this.chk1 == 1)
                                    _this.sp = false;
                            }
                            for (_this.i = 0; _this.i < 6; _this.i++) {
                                if (_this.userItem.data[_this.i] != "null") {
                                    _this.chk = 1;
                                }
                            }
                            if (_this.chk == 1)
                                _this.sp = true;
                        }
                    }
                }
            });
            alert.addButton({
                text: 'Okay',
                handler: function (data) {
                    // console.log("hui");
                    //  console.log('data value  :', data);
                    //this.userItem.data=this.datas;
                    // this.datas=data;
                    //  console.log(data[0]);
                    //try1 
                    if (data != null) {
                        // console.log("kerunnuu");
                        // console.log("what comes in ");
                        // console.log(data[6]);
                        // console.log(this.v1);
                        //  console.log(this.v2);
                        // console.log(this.v3);
                        // console.log(this.v4);
                        // console.log(this.v5);
                        // console.log(this.v6);
                        //console.log(this.v7);
                        // console.log(this.v7);
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value1")
                                _this.v1 = 0;
                        }
                        //console.log("check1",this.v1);
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value2")
                                _this.v2 = 1;
                        }
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value3")
                                _this.v3 = 2;
                        }
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value4")
                                _this.v4 = 3;
                        }
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value5")
                                _this.v5 = 4;
                        }
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value6")
                                _this.v6 = 5;
                        }
                        for (_this.i = 0; _this.i <= 6; _this.i++) {
                            if (data[_this.i] == "value7")
                                _this.v7 = 6;
                        }
                        //console.log("after condition check ");
                        //console.log(this.datas);
                        //console.log(this.v1,this.v2,this.v3,this.v4,this.v5,this.v6,this.v7);
                        //-1 1 2 3 4 5 6 
                        //null 
                        if (_this.v1 == -1) {
                            data[0] = "null";
                        }
                        else {
                            data[0] = "value1";
                        }
                        if (_this.v2 == 0) {
                            data[1] = "null";
                        }
                        else {
                            data[1] = "value2";
                        }
                        if (_this.v3 == 0) {
                            data[2] = "null";
                        }
                        else {
                            data[2] = "value3";
                        }
                        if (_this.v4 == 0) {
                            data[3] = "null";
                        }
                        else {
                            data[3] = "value4";
                        }
                        if (_this.v5 == 0) {
                            data[4] = "null";
                        }
                        else {
                            data[4] = "value5";
                        }
                        9;
                        if (_this.v6 == 0) {
                            data[5] = "null";
                        }
                        else {
                            data[5] = "value6";
                        }
                        if (_this.v7 == 0) {
                            data[6] = "null";
                        }
                        else {
                            data[6] = "value7";
                        }
                    }
                    _this.userItem.data = data;
                    // console.log("database:",data);
                    //console.log("database:",data);
                    _this.testCheckboxOpen = true;
                    _this.testCheckboxResult = data;
                    if (_this.butn == "save" || _this.butn == "update") {
                        _this.chk = 0;
                        _this.chk1 = 0;
                        if (_this.userItem.data == null) {
                            console.log("onen");
                            _this.sp = false;
                        }
                        else {
                            {
                                for (_this.i = 0; _this.i < 6; _this.i++) {
                                    if (_this.userItem.data[_this.i] == "null") {
                                        _this.chk1 = 1;
                                    }
                                }
                                if (_this.chk1 == 1)
                                    _this.sp = false;
                                console.log("ones");
                            }
                            for (_this.i = 0; _this.i < 6; _this.i++) {
                                if (_this.userItem.data[_this.i] != "null") {
                                    _this.chk = 1;
                                }
                            }
                            if (_this.chk == 1)
                                _this.sp = true;
                            console.log("trues");
                        }
                    }
                    // if(this.butn=="save")
                    //  this.sp=false;
                    //if(data==null)
                    // this.sp=false;
                    // data=null;
                }
            });
            alert.present();
            console.log('Cdatas value :', this.datas);
        }
        this.v1 = -1;
        this.v2 = 0;
        this.v3 = 0;
        this.v4 = 0;
        this.v5 = 0;
        this.v6 = 0;
        this.v7 = 0;
    };
    NewuserPage.prototype.new1 = function () {
        this.userItem.data = null;
        this.sp = false;
        this.x = true;
    };
    NewuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-newuser',template:/*ion-inline-start:"F:\ionic-app\src\pages\newuser\newuser.html"*/'<!--\n\n  Generated template for the NewuserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>USERS</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n    \n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content  >\n\n  <ion-segment [(ngModel)]="users" color="white" (click)="new1()">\n\n    <ion-segment-button value="newUser"  >\n\n    \n\n     New User\n\n    </ion-segment-button>\n\n    <ion-segment-button value="allUsers" (click)="new()">\n\n   \n\n    All User\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n     \n\n      <div [ngSwitch]="users">\n\n\n\n          <div *ngSwitchCase="\'newUser\'">\n\n            <ion-list >\n\n              <h6 class="title section-title ">User Information</h6>\n\n                <ion-row>\n\n                    <ion-item col-6 > \n\n                        <ion-label stacked>First Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="userItem.fname"></ion-input>\n\n                      </ion-item> \n\n                             \n\n                     <ion-item col-6  > \n\n                        <ion-label stacked>Last Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="userItem.lname" ></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                      <ion-item col-12 > \n\n                          <ion-label stacked>Date Of Birth</ion-label>\n\n                          <ion-input type="text"  (ionFocus)="dispdate(\'birth\')" (click)="dispdate(\'birth\')" [(ngModel)]="userItem.dob"  ></ion-input>\n\n                        </ion-item> \n\n                    </ion-row>     \n\n                    <ion-row>\n\n                      <ion-item col-12> \n\n                         <ion-label stacked>Mobile Number</ion-label>\n\n                         <ion-input type="text" [(ngModel)]="userItem.mobile" ></ion-input>\n\n                       </ion-item>\n\n                     </ion-row> \n\n                    <ion-row>\n\n                       <ion-item col-12> \n\n                          <ion-label stacked>Email Id</ion-label>\n\n                          <ion-input type="text" [(ngModel)]="userItem.email" ></ion-input>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                        <ion-item col-12> \n\n                           <ion-label stacked>password</ion-label>\n\n                           <ion-input type="text" [(ngModel)]="userItem.password" ></ion-input>\n\n                         </ion-item>\n\n                       </ion-row>\n\n                      \n\n                      <h6 class="title section-title">Job Details</h6>\n\n\n\n                        <ion-row>\n\n                            <ion-item col-6> \n\n                                <ion-label stacked>Date Of Joining</ion-label>\n\n                                <ion-input type="text"  (ionFocus)="dispdate(\'join\')" (click)="dispdate(\'join\')" [(ngModel)]="userItem.doj"></ion-input>\n\n                              </ion-item>\n\n                             <ion-item col-6> \n\n                                <ion-label stacked>Position</ion-label>\n\n                                <ion-input type="text" [(ngModel)]="userItem.position" ></ion-input>\n\n                              </ion-item>\n\n                           </ion-row>  \n\n                          <ion-row>\n\n                              <ion-col col-6>\n\n                                  <ion-label >Set privileges</ion-label>\n\n                                  <ion-checkbox  [(ngModel)]="sp" (ionChange)="showCheckbox($event,userItem)"></ion-checkbox>\n\n                                </ion-col>\n\n                                <ion-col col-6  [hidden]="x">\n\n                                  <ion-label>Deactivate user</ion-label>\n\n                                  <ion-checkbox  [(ngModel)]="statuss" ></ion-checkbox>\n\n                                </ion-col>\n\n\n\n                              </ion-row> \n\n                              <ion-row>\n\n                                  \n\n                           <button ion-button  icon-end  full color=blue (click)="btn(userItem)" >\n\n                             {{butn}}\n\n                             <ion-icon name="star"></ion-icon>\n\n                             </button>\n\n                          </ion-row> \n\n                         \n\n              </ion-list>\n\n          </div>\n\n            \n\n       <div *ngSwitchCase="\'allUsers\'">\n\n        <ion-list >\n\n            <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel" (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n           <ion-item>\n\n           <ion-row no-margin class="table-title" >\n\n                <ion-col col-6 >Name</ion-col><ion-col col-4>Position </ion-col><ion-col col-2>Action</ion-col>\n\n              </ion-row>\n\n          </ion-item>\n\n           \n\n           <ion-item>\n\n            <ion-row  class="col-text row-bottom-border" *ngFor="let item of itemslist" >\n\n                <ion-col col-6  style="color: #66887F;">\n\n                  {{ item.fname }}\n\n                </ion-col>\n\n                <ion-col col-4  style="color:#2679B0;" >\n\n                  {{ item.position }}\n\n                </ion-col>\n\n                <ion-col col-2 text-center (click)="collect(item.key,item.fname,item.lname,item.dob,item.mobile,item.email,item.doj,item.position,item.data,item.status)">\n\n                <ion-icon name="create" ></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n           </ion-item>\n\n           \n\n            <!-- <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n            </ion-item> -->\n\n         </ion-list>\n\n      </div>\n\n      </div>\n\n</ion-content>\n\n\n\n \n\n\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\newuser\newuser.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _g || Object])
    ], NewuserPage);
    return NewuserPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=newuser.js.map

/***/ })

});
//# sourceMappingURL=5.js.map