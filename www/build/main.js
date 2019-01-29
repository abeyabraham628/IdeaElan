webpackJsonp([8],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    HomePage.prototype.signUp = function () {
        // this.navCtrl.push(RegisterPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.password.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                password: this.password.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://192.168.0.5:8080/project/login.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Your Login success") {
                        //loader.dismiss()
                        var alert_3 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], data_1);
                    }
                    else {
                        var alert_4 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Login Username or Password is invalid",
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic-app\src\pages\home\home.html"*/' <!--  <ion-header no-border>\n<ion-navbar >\n  <ion-title>Login</ion-title>\n</ion-navbar>\n  </ion-header> -->\n <!--   // [hidden]="true" *navbar -->\n<ion-content class= "content_1">\n    <img src="assets/imgs/companylogo.png" class="logo">\n   <div class="height1">\n  <ion-list >\n    <ion-item class="iont" > \n      <ion-input type="text" placeholder="Username" name="username" #username class="inp"></ion-input>\n      <ion-icon name="person" item-left></ion-icon>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item> -->\n    <ion-item class="iont">\n    <ion-input type="password" placeholder="Password" name="password" #password class="inp"></ion-input> <ion-icon name="ios-eye" item-left></ion-icon>\n  </ion-item>\n  <div class="click_down">\n    <button ion-button round block (click)="signIn()">Sign In</button>\n    <p>\n   <a href="https://www.christuniversity.in/" class="fp">Forgot password?</a></p>\n   <button ion-button round outline block (click)="signUp()">Register</button> \n  </div>\n  </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewuserPage = /** @class */ (function () {
    function NewuserPage(navCtrl, ref, fdb, navParams, alertCtrl, datePicker) {
        // this.disa=false; 
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.fdb = fdb;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.datePicker = datePicker;
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
        if (this.butn == "save") {
            this.sp = false;
            if (this.userItem.data == null) {
                // this.userItem.data=null;
                this.dnew[0] = "null";
                this.dnew[1] = "null";
                this.dnew[2] = "null";
                this.dnew[3] = "null";
                this.dnew[4] = "null";
                this.dnew[5] = "null";
                this.dnew[6] = "null";
                var ref = this.fdb.list("users").query.ref.push();
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
                //this.userItem.data=null;
            }
            else {
                //this.glu = this.firebaseApp.database().ref().child("/child/").push().key;
                var ref = this.fdb.list("users").query.ref.push();
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
            }
            var alert_1 = this.alertCtrl.create({
                title: "SUCCESS",
                subTitle: "New User has been added succesfuly ",
                buttons: ['OK']
            });
            alert_1.present();
            this.clear();
        }
        else {
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
            var alert_2 = this.alertCtrl.create({
                title: "SUCCESS",
                subTitle: "Data has been updated succesfuly ",
                buttons: ['OK']
            });
            alert_2.present();
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
        }
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
            var alert_3 = this.alertCtrl.create();
            alert_3.setTitle('Which are the privileges that you want to set to the user?');
            //
            alert_3.addInput({
                type: 'checkbox',
                label: 'Admin',
                value: 'value1',
                checked: this.datas == null ? false : this.datas[0] == "value1" ? true : false
            });
            //console.log("hi");
            alert_3.addInput({
                type: 'checkbox',
                label: 'Leave Approvals ',
                value: 'value2',
                // checked:this.datas[1]!="null"?this.datas[1]=="value2"?true:false:false
                checked: this.datas == null ? false : this.datas[1] == "value2" ? true : false
            });
            alert_3.addInput({
                type: 'checkbox',
                label: 'Holiday List Upload',
                value: 'value3',
                // checked:this.datas[2]!="null"?this.datas[2]=="value3"?true:false:false
                checked: this.datas == null ? false : this.datas[2] == "value3" ? true : false
            });
            alert_3.addInput({
                type: 'checkbox',
                label: 'Payslip Upload',
                value: 'value4',
                //checked:this.datas[3]!="null"?this.datas[3]=="value4"?true:false:false
                checked: this.datas == null ? false : this.datas[3] == "value4" ? true : false
            });
            alert_3.addInput({
                type: 'checkbox',
                label: 'Recruitment',
                value: 'value5',
                //checked:this.datas[4]!="null"?this.datas[4]=="value5"?true:false:false
                checked: this.datas == null ? false : this.datas[4] == "value5" ? true : false
            });
            alert_3.addInput({
                type: 'checkbox',
                label: 'System',
                value: 'value6',
                // checked:this.datas[5]!="null"?this.datas[5]=="value6"?true:false:false
                checked: this.datas == null ? false : this.datas[5] == "value6" ? true : false
            });
            alert_3.addInput({
                type: 'checkbox',
                label: 'Add Users ',
                value: 'value7',
                // checked:this.datas[6]!="null"?this.datas[6]=="value7"?true:false:false
                checked: this.datas == null ? false : this.datas[6] == "value7" ? true : false
            });
            alert_3.addButton({
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
            alert_3.addButton({
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
            alert_3.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newuser',template:/*ion-inline-start:"F:\ionic-app\src\pages\newuser\newuser.html"*/'<!--\n\n  Generated template for the NewuserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content style="margin-top:50px;" >\n\n    <ion-segment [(ngModel)]="users" color="white" (click)="new1()">\n\n        <ion-segment-button value="newUser"  >\n\n         <!-- <ion-icon name="person"></ion-icon> -->\n\n         New User\n\n        </ion-segment-button>\n\n        <ion-segment-button value="allUsers" (click)="new()">\n\n        <!--   <ion-icon name="ios-people"></ion-icon> --> \n\n        All User\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n     \n\n      <div [ngSwitch]="users">\n\n\n\n          <div *ngSwitchCase="\'newUser\'">\n\n            <ion-list >\n\n              <h6 class="title section-title ">User Information</h6>\n\n                <ion-row>\n\n                    <ion-item col-6 > \n\n                        <ion-label stacked>First Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="userItem.fname"></ion-input>\n\n                      </ion-item> \n\n                             \n\n                     <ion-item col-6  > \n\n                        <ion-label stacked>Last Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="userItem.lname" ></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                      <ion-item col-12 > \n\n                          <ion-label stacked>Date Of Birth</ion-label>\n\n                          <ion-input type="text"  (ionFocus)="dispdate(\'birth\')" (click)="dispdate(\'birth\')" [(ngModel)]="userItem.dob"  ></ion-input>\n\n                        </ion-item> \n\n                    </ion-row>     \n\n                    <ion-row>\n\n                      <ion-item col-12> \n\n                         <ion-label stacked>Mobile Number</ion-label>\n\n                         <ion-input type="text" [(ngModel)]="userItem.mobile" ></ion-input>\n\n                       </ion-item>\n\n                     </ion-row> \n\n                    <ion-row>\n\n                       <ion-item col-12> \n\n                          <ion-label stacked>Email Id</ion-label>\n\n                          <ion-input type="text" [(ngModel)]="userItem.email" ></ion-input>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      \n\n                      <h6 class="title section-title">Job Details</h6>\n\n\n\n                        <ion-row>\n\n                            <ion-item col-6> \n\n                                <ion-label stacked>Date Of Joining</ion-label>\n\n                                <ion-input type="text"  (ionFocus)="dispdate(\'join\')" (click)="dispdate(\'join\')" [(ngModel)]="userItem.doj"></ion-input>\n\n                              </ion-item>\n\n                             <ion-item col-6> \n\n                                <ion-label stacked>Position</ion-label>\n\n                                <ion-input type="text" [(ngModel)]="userItem.position" ></ion-input>\n\n                              </ion-item>\n\n                           </ion-row>  \n\n                          <ion-row>\n\n                              <ion-col col-6>\n\n                                  <ion-label >Set privileges</ion-label>\n\n                                  <ion-checkbox  [(ngModel)]="sp" (ionChange)="showCheckbox($event,userItem)"></ion-checkbox>\n\n                                </ion-col>\n\n                                <ion-col col-6  [hidden]="x">\n\n                                  <ion-label>Deactivate user</ion-label>\n\n                                  <ion-checkbox  [(ngModel)]="statuss" ></ion-checkbox>\n\n                                </ion-col>\n\n\n\n                              </ion-row> \n\n                              <ion-row>\n\n                                  \n\n                           <button ion-button  icon-end  full color=blue (click)="btn(userItem)" >\n\n                             {{butn}}\n\n                             <ion-icon name="star"></ion-icon>\n\n                             </button>\n\n                          </ion-row> \n\n                         \n\n              </ion-list>\n\n          </div>\n\n            \n\n       <div *ngSwitchCase="\'allUsers\'">\n\n        <ion-list >\n\n            <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel" (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n           <ion-item>\n\n           <ion-row no-margin class="table-title" >\n\n                <ion-col col-6 >Name</ion-col><ion-col col-4>Position </ion-col><ion-col col-2>Action</ion-col>\n\n              </ion-row>\n\n          </ion-item>\n\n           \n\n           <ion-item>\n\n            <ion-row  class="col-text row-bottom-border" *ngFor="let item of itemslist" >\n\n                <ion-col col-6  style="color: #66887F;">\n\n                  {{ item.fname }}\n\n                </ion-col>\n\n                <ion-col col-4  style="color:#2679B0;" >\n\n                  {{ item.position }}\n\n                </ion-col>\n\n                <ion-col col-2 text-center (click)="collect(item.key,item.fname,item.lname,item.dob,item.mobile,item.email,item.doj,item.position,item.data,item.status)">\n\n                <ion-icon name="create" ></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n           </ion-item>\n\n           \n\n            <!-- <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n\n            </ion-item> -->\n\n         </ion-list>\n\n      </div>\n\n      </div>\n\n</ion-content>\n\n\n\n \n\n\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\newuser\newuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */]])
    ], NewuserPage);
    return NewuserPage;
}());

//# sourceMappingURL=newuser.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interview_summary_interview_summary__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(58);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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

//import { Firebase } from '@ionic-native/firebase';



/**
 * Generated class for the InterviewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterviewDetailsPage = /** @class */ (function () {
    function InterviewDetailsPage(navCtrl, navParams, firebase, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.applcantsData = [];
        this.eventDate = navParams.get('date');
        this.loadApplicants(this.eventDate);
    }
    InterviewDetailsPage.prototype.ionViewDidLoad = function () {
    };
    InterviewDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InterviewDetailsPage.prototype.loadApplicants = function (date) {
        var result = [];
        var x;
        this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(date).on("value", function (snapshot) {
            x = Object.keys(snapshot.val())[0];
        }); //end of Schedules reference
        this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(x).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                return false;
            });
        }); //end of Applicants reference
        this.applcantsData = result;
    }; //end of function
    InterviewDetailsPage.prototype.changeStatus = function (data) {
        var _this = this;
        var statusAlert = this.alertCtrl.create();
        statusAlert.addInput({
            type: 'radio',
            label: 'Reported',
            value: 'reported',
            checked: false
        });
        statusAlert.addInput({
            type: 'radio',
            label: 'Selected',
            value: 'selected',
            checked: false
        });
        statusAlert.addButton({
            text: 'OK',
            handler: function (status) {
                _this.firebase.list('Applicants').update(data.$key, { interviewStatus: status });
            }
        });
        statusAlert.setTitle(data.fName + " " + data.lName);
        statusAlert.addButton('Cancel');
        statusAlert.present();
    };
    InterviewDetailsPage.prototype.interviewSummary = function (eventDate) {
        var summaryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__interview_summary_interview_summary__["a" /* InterviewSummaryPage */], { eventDate: eventDate });
        summaryModal.present();
    };
    InterviewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-interview-details',template:/*ion-inline-start:"F:\ionic-app\src\pages\interview-details\interview-details.html"*/'\n<ion-content style="margin-top:75px;" >\n \n   \n        \n      <ion-list >\n       {{eventDate}}  <button item-right ion-button (click)="goBack()">Back</button>\n       <button item-right ion-button (click)="interviewSummary(eventDate)">Summary</button>\n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n        \n                <ion-row no-margin class="table-title row-bottom-border"> \n                   \n                   <ion-col col-4>Applicant Name</ion-col>\n                    <ion-col col-3>Phone</ion-col>\n                    <ion-col col-3>Status</ion-col>\n                </ion-row>\n\n                <ion-row no-margin class="table-title row-bottom-border" *ngFor="let x of applcantsData"> \n                   \n                  <ion-col col-4>{{x.fName}} {{x.lName}}</ion-col>\n                   <ion-col col-3>{{x.mobile}}</ion-col>\n                   <ion-col col-3>{{x.interviewStatus}}</ion-col>\n                   <ion-col col-2 (click)="changeStatus(x)">Change</ion-col>\n               </ion-row>\n\n                \n        </ion-list>\n      \n\n\n</ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\interview-details\interview-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], InterviewDetailsPage);
    return InterviewDetailsPage;
}());

//# sourceMappingURL=interview-details.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(58);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
 * Generated class for the InterviewSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InterviewSummaryPage = /** @class */ (function () {
    function InterviewSummaryPage(navCtrl, navParams, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.selectedList = [];
        this.total_Count = 0;
        this.attended_Count = 0;
        this.selected_Count = 0;
        this.eventDate = navParams.get('eventDate');
        this.interviewSummary(this.eventDate);
    }
    InterviewSummaryPage.prototype.ionViewDidLoad = function () {
        //console.log('tony');
    };
    InterviewSummaryPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InterviewSummaryPage.prototype.interviewSummary = function (eventDate) {
        var _this = this;
        var result = [];
        var key;
        this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(eventDate).on("value", function (snapshot) {
            key = Object.keys(snapshot.val())[0];
        }); //end of Schedules reference
        this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(key).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                return false;
            });
        }); //end of Applicants reference
        this.total_Count = result.length;
        result.forEach(function (element) {
            if (element.interviewStatus == "selected") {
                _this.selectedList.push(element);
                _this.attended_Count += 1;
            }
            else if (element.interviewStatus == "reported")
                _this.attended_Count += 1;
        });
        //this.applcantsData=result
    }; //end of function
    InterviewSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interview-summary',template:/*ion-inline-start:"F:\ionic-app\src\pages\interview-summary\interview-summary.html"*/'<!--\n  Generated template for the InterviewSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content style="margin-top:75px;" >\n  <ion-card>\n    <ion-card-header>\n     <ion-row> Interview Summary</ion-row>\n     \n     <ion-row>26/05/2019</ion-row>\n     <ion-row><ion-col col-6>Total Candidates:{{total_Count}}</ion-col><ion-col col-6 ><ion-icon  name="arrow-back" (click)="goBack()"></ion-icon></ion-col></ion-row>\n     <ion-row> Attended:{{attended_Count}}</ion-row>\n     <ion-row> Selected:{{selectedList.length}}</ion-row>\n    </ion-card-header>\n  </ion-card>\n  \n      <ion-list >\n    <h6 class="title section-title">Selected Candidates</h6>\n    <ion-item>\n      <ion-row class="table-title">\n        <ion-col col-4 >Name</ion-col>\n      </ion-row>\n    </ion-item>\n    <div *ngFor="let x of selectedList">\n    <ion-item no-lines  >\n      <ion-row  class="col-text" >\n          <ion-col col-6  style="color: #66887F;">\n           {{x.fName}} {{x.lName}}\n          </ion-col>\n          <ion-col col-4  style="color:#2679B0;" >\n           Notice Period:{{x.noticePeriod}}\n          </ion-col><br/>\n        \n       \n          <ion-col col-6  style="color: #66887F;">\n           {{x.employer}}\n          </ion-col>\n          <ion-col col-6  style="color:#2679B0;" >\n           Current CTC:{{x.currentctc}}\n          </ion-col><br/>\n        \n          <ion-col col-6  style="color: #66887F;">\n           {{x.mobile}}\n          </ion-col>\n          <ion-col col-6  style="color:#2679B0;" >\n           Expected CTC:{{x.expectedctc}}\n          </ion-col><br/>\n        <ion-col col-12  class="row-bottom-border" style="color: #66887F;">\n          {{x.email}}\n          </ion-col>\n         </ion-row >\n     </ion-item>\n    </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\interview-summary\interview-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], InterviewSummaryPage);
    return InterviewSummaryPage;
}());

//# sourceMappingURL=interview-summary.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_it_add_it__ = __webpack_require__(299);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.run = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_it_add_it__["a" /* AddItPage */]);
    };
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            // loader.dismiss();
            loader.onDidDismiss(function () {
                console.log('Dismissed loading');
            });
            _this.http.post('http://192.168.0.5:8080/project/fetch_data.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"F:\ionic-app\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-item *ngFor="let item of items" >\n  <h2>Welcome {{item.username}}</h2>\n  <h3>Your profile information is as follows:</h3>\n  <ion-row>\n    <ion-col col-4>\n     Password\n    </ion-col>\n    <ion-col col-8>\n  {{item.password}}\n    </ion-col>\n \n</ion-row>\n<ion-row>\n    <ion-col col-4>\n      Telephone\n    </ion-col>\n    <ion-col col-8>\n  {{item.telephone}}\n    </ion-col>\n \n</ion-row>\n<ion-row>\n    <ion-col col-4>\n    Email \n    </ion-col>\n    <ion-col col-8>\n  {{item.email}}\n    </ion-col>\n \n</ion-row>\n<div padding>\n  <button ion-button  round outline block (click)="run()"> ADD ITEM </button>\n  </div>\n </ion-item>\n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recruitment_recruitment__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems_systems__ = __webpack_require__(195);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Headername="users";
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__["a" /* NewuserPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__systems_systems__["a" /* SystemsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__recruitment_recruitment__["a" /* RecruitmentPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__systems_systems__["a" /* SystemsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\ionic-app\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar color="blue" hideBackButton="true">\n\n    <button ion-button  menuToggle="left" start>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title text-center>{{Header}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button >\n\n        <ion-icon name="notifications"></ion-icon> \n\n      </button> \n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-header>\n\n\n\n    <ion-tabs>\n\n            <ion-tab [root]="tab1Root"   tabTitle="User" tabIcon="person"></ion-tab>\n\n            <ion-tab [root]="tab2Root"  tabTitle="Systems" tabIcon="desktop"></ion-tab>\n\n            <ion-tab [root]="tab3Root"  tabTitle="Recruitment" tabIcon="people"></ion-tab>\n\n        </ion-tabs>\n\n    \n\n \n\n\n\n   \n\n\n\n\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interview_details_interview_details__ = __webpack_require__(190);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecruitmentPage = /** @class */ (function () {
    function RecruitmentPage(firebase, datePicker, navCtrl, ref) {
        this.firebase = firebase;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.checked = false;
        this.applicantArray = [];
        this.newApplicantForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            $key: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null),
            fName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            lName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            employer: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            noticePeriod: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            currentctc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            experience: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            expectedctc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('')
        });
        this.scheduleForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            scheduleDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            scheduleTime: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            contactPerson: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            contactPersonNum: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](''),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('')
        });
        this.applicantKeys = [];
        this.interviewDate = [];
        this.recruitment = "newApplicant";
        //this.dispApplicants();
    }
    RecruitmentPage.prototype.dispApplicants = function () {
        this.applicantRef = this.firebase.list('Applicants');
        var result = [];
        this.firebase.database.ref("Applicants").on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (!childSnapshot.hasChild("interviewDate")) {
                    result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                }
            });
        });
        this.applicantArray = result;
        this.ref.detectChanges();
    };
    RecruitmentPage.prototype.saveApplicant = function (applicantDetails) {
        this.applicantRef.push({
            fName: applicantDetails.fName,
            lName: applicantDetails.lName,
            mobile: applicantDetails.mobile,
            email: applicantDetails.email,
            employer: applicantDetails.employer,
            noticePeriod: applicantDetails.noticePeriod,
            currentctc: applicantDetails.currentctc,
            experience: applicantDetails.experience,
            expectedctc: applicantDetails.expectedctc
        });
        this.ref.detectChanges();
    }; //end of function
    RecruitmentPage.prototype.onSubmit = function () {
        if (this.newApplicantForm.controls.$key.value == null) {
            this.saveApplicant(this.newApplicantForm.value);
            this.newApplicantForm.reset();
        }
    };
    RecruitmentPage.prototype.dispdate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.scheduleForm.controls.scheduleDate.setValue(date.toLocaleDateString());
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    }; //end of function
    RecruitmentPage.prototype.saveSchedule = function () {
        var _this = this;
        var i;
        var schedule = {
            interviewTime: this.scheduleForm.controls.scheduleTime.value,
            contactPerson: this.scheduleForm.controls.contactPerson.value,
            contactNumber: this.scheduleForm.controls.contactPersonNum.value
        };
        this.scheduleRef = this.firebase.list('Schedules');
        this.scheduleRef.push({
            interviewDate: this.scheduleForm.controls.scheduleDate.value,
            interviewDetails: schedule
        }).then(function (snap) {
            for (i = 0; i < _this.applicantKeys.length; i++)
                _this.applicantRef.update(_this.applicantKeys[i], {
                    interviewDate: snap.key
                });
        });
        this.ref.detectChanges();
    }; //end of save schedule function
    RecruitmentPage.prototype.selectAll = function () {
        this.checked = !this.checked;
    };
    RecruitmentPage.prototype.clickSelectBox = function (itemKey) {
        var foundAt = this.applicantKeys.indexOf(itemKey);
        if (foundAt >= 0)
            this.applicantKeys.splice(foundAt, 1);
        else
            this.applicantKeys.push(itemKey);
    };
    RecruitmentPage.prototype.viewInterviewDates = function () {
        var result = [];
        this.firebase.database.ref("Schedules").on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result.push(__assign({ $key: childSnapshot.key }, childSnapshot.val()));
                return false;
            });
        });
        this.interviewDate = result;
        this.ref.detectChanges();
    }; //end of function
    RecruitmentPage.prototype.otherPage = function (interviewDate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__interview_details_interview_details__["a" /* InterviewDetailsPage */], { date: interviewDate });
    };
    RecruitmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recruitment',template:/*ion-inline-start:"F:\ionic-app\src\pages\recruitment\recruitment.html"*/'<ion-content style="margin-top:50px;" >\n\n  <ion-segment [(ngModel)]="recruitment" color="white">\n\n      <ion-segment-button  value="newApplicant" >\n\n         New Applicant\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="schedules" (click)="dispApplicants()">\n\n         Schedules\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="interviews" (click)="viewInterviewDates()">\n\n          Interviews\n\n      </ion-segment-button>\n\n  </ion-segment>\n\n   \n\n    <div [ngSwitch]="recruitment">\n\n\n\n        <div *ngSwitchCase="\'newApplicant\'">\n\n          <form [formGroup]="newApplicantForm" (ngSubmit)="onSubmit()">\n\n          <ion-list >\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n           <ion-row>\n\n                  <ion-col  col-6 > \n\n                    <ion-item   >\n\n                      <ion-label stacked>First Name</ion-label>\n\n                      <ion-input formControlName="fName" ></ion-input>\n\n                    </ion-item> \n\n                    </ion-col>\n\n                    <ion-col col-6  > \n\n                      <ion-item  >\n\n                        <ion-label stacked>Last Name</ion-label>\n\n                        <ion-input formControlName="lName" ></ion-input>\n\n                      </ion-item>\n\n                      </ion-col>\n\n             </ion-row>\n\n               \n\n                    <ion-item  > \n\n                        <ion-label stacked>Mobile</ion-label>\n\n                        <ion-input formControlName="mobile"></ion-input>\n\n                    </ion-item> \n\n                \n\n                      \n\n                  \n\n                    <ion-item> \n\n                       <ion-label stacked>Email</ion-label>\n\n                       <ion-input type="email" formControlName="email" ></ion-input>\n\n                     </ion-item>\n\n                   \n\n\n\n                   <h6 class="title section-title ">Employer And Salary</h6>\n\n                 \n\n                     <ion-item > \n\n                        <ion-label stacked>Current Employer</ion-label>\n\n                        <ion-input formControlName="employer" ></ion-input>\n\n                      </ion-item>\n\n                   \n\n                    \n\n                    <ion-row>\n\n                      <ion-col col-6>\n\n                          <ion-item > \n\n                              <ion-label stacked>Notice Period</ion-label>\n\n                              <ion-input formControlName="noticePeriod"></ion-input>\n\n                            </ion-item>\n\n                      </ion-col>\n\n                    \n\n                   \n\n                       <ion-col col-6>\n\n                         <ion-item>\n\n                          <ion-label stacked>Current CTC</ion-label>\n\n                          <ion-input formControlName="currentctc"></ion-input>\n\n                        </ion-item>\n\n                        </ion-col>\n\n                     </ion-row> \n\n                    \n\n                    <h6 class="title section-title">Experience Details</h6>\n\n                   <ion-row >\n\n                     <ion-item col-6>\n\n                            <ion-label stacked>Total Experience</ion-label>\n\n                            <ion-select  formControlName="experience">\n\n                              <ion-option value="Below 1 Year">Below 1 Year</ion-option>\n\n                              <ion-option value="1 - 2 Years">1 - 2 Years</ion-option>\n\n                              <ion-option value="2 - 3 Years">2 - 3 Years</ion-option>\n\n                              <ion-option value="3 - 4 Years">3 - 4 Years</ion-option>\n\n                              <ion-option value="4 - 5 Years">4 - 5 Years</ion-option>\n\n                              <ion-option value="Above 5 Years">Above 5 Years</ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                     \n\n                    <ion-col col-6>\n\n                        <ion-item >\n\n                          <ion-label stacked>Expected CTC</ion-label>\n\n                          <ion-input formControlName="expectedctc"> </ion-input>\n\n                        </ion-item>\n\n                      </ion-col>\n\n                  </ion-row>\n\n                       \n\n                      <ion-row>\n\n                        <button ion-button type="submit" ion-button  icon-end  full color=blue >\n\n                           Save\n\n                         </button>\n\n                      </ion-row> \n\n                       \n\n            </ion-list>\n\n          </form>\n\n        </div>\n\n          \n\n     <div *ngSwitchCase="\'schedules\'">\n\n        \n\n      <ion-list >\n\n        \n\n         <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n        \n\n                <ion-row no-margin class="table-title row-bottom-border">\n\n                   <ion-col col-1 > \n\n                     <ion-checkbox (ionChange)=\'selectAll()\'></ion-checkbox>\n\n                   </ion-col>\n\n                   <ion-col col-4>Name</ion-col>\n\n                    <ion-col col-4>Experience</ion-col>\n\n                    <ion-col col-3>Interview Date</ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor="let x of applicantArray" >\n\n                    <ion-col col-1 > \n\n                        <ion-checkbox [checked]="checked"  (ionChange)="clickSelectBox(x.$key)"></ion-checkbox>\n\n                      </ion-col>\n\n                      <ion-col col-4>{{x.fName}} {{x.lName}}</ion-col>\n\n                       <ion-col col-4 >{{x.experience}}</ion-col>\n\n                       <ion-col col-3>Not Set</ion-col>\n\n                </ion-row>\n\n                <form [formGroup]="scheduleForm" (ngSubmit)="saveSchedule()">\n\n                <h6 class="title section-title">Schedule Details</h6>\n\n                <ion-row>\n\n                    <ion-item col-6>\n\n                      \n\n                      <ion-label stacked>Interview Date</ion-label>\n\n                      \n\n                      <ion-input type="text"  (click)="dispdate()" (ionFocus)="dispdate()" formControlName="scheduleDate"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item col-6>\n\n                        <ion-label stacked>Interview Time</ion-label>\n\n                        <ion-datetime pickerFormat="h:mm A" formControlName="scheduleTime"></ion-datetime>\n\n                    </ion-item>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-item col-12>\n\n                        <ion-label stacked>Contact Person</ion-label>\n\n                        <ion-input formControlName="contactPerson" ></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item col-12>\n\n                          <ion-label stacked>Contact Number</ion-label>\n\n                          <ion-input formControlName="contactPersonNum" ></ion-input>\n\n                        </ion-item>\n\n                    \n\n                        <button ion-button type="submit" ion-button  icon-end  full color=blue >\n\n                           Send Call Letter\n\n                         </button>\n\n                      </ion-row> \n\n                    </form>\n\n        </ion-list>\n\n      \n\n\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'interviews\'" >\n\n        \n\n      <ion-list >\n\n        \n\n       <ion-searchbar placeholder="Search User"  [showCancelButton]="shouldShowCancel"></ion-searchbar>\n\n        \n\n                <ion-row no-margin class="table-title row-bottom-border">\n\n                <ion-col col-4>Interview Date</ion-col>\n\n                    <ion-col col-5>Contact Person</ion-col>\n\n                    <ion-col col-3>Action</ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row no-margin class=" col-text  row-bottom-border" *ngFor="let x of interviewDate" >\n\n                    \n\n                      <ion-col col-4>{{x.interviewDate}} </ion-col>\n\n                       <ion-col col-5 >{{x.interviewDetails.contactPerson}}</ion-col>\n\n                       <ion-col col-3 (click)="otherPage(x.interviewDate)">View Details</ion-col>\n\n                </ion-row>\n\n                \n\n        </ion-list>\n\n      \n\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\recruitment\recruitment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], RecruitmentPage);
    return RecruitmentPage;
}());

//# sourceMappingURL=recruitment.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(40);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
    function SystemsPage(barcode, datePicker, firebase, datepipe) {
        this.barcode = barcode;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.datepipe = datepipe;
        this.Save = "Save";
        this.systemsForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            $key: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](null),
            systemId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            keyboard: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            mouse: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            processor: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            memory: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            hdd: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            avExpiry: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](''),
            avValidity: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('')
        });
        this.systemArray = [];
        this.systems = "newSystem";
        this.getSystemList();
    }
    SystemsPage.prototype.getSystemList = function () {
        this.systemsList = this.firebase.list('systems');
        return this.systemsList.snapshotChanges();
    };
    SystemsPage.prototype.getSystems = function () {
        var _this = this;
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
        this.systemsList.update(systems.$key, {
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            avValidity: systems.avValidity
        });
    };
    SystemsPage.prototype.insertSystems = function (systems) {
        this.systemsList.push({
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            avValidity: systems.avValidity
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
    SystemsPage.prototype.dispdate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.systemsForm.controls['avExpiry'].setValue((date.toLocaleDateString())),
                _this.systemsForm.controls['avValidity'].setValue(Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)));
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-systems',template:/*ion-inline-start:"F:\ionic-app\src\pages\systems\systems.html"*/'\n\n  \n\n\n\n\n\n\n\n  <ion-content style="margin-top:50px;">\n\n \n\n      <ion-segment [(ngModel)]="systems" color="white">\n\n         <ion-segment-button value="newSystem">\n\n            Add System\n\n         </ion-segment-button>\n\n         <ion-segment-button value="allSystems" (click)="getSystems()">\n\n           All Systems\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="systems">\n\n    <div *ngSwitchCase="\'newSystem\'">\n\n      <form [formGroup]="systemsForm" (ngSubmit)="onSubmit()">\n\n      <ion-list>\n\n          <h6 class="title">System Information</h6>\n\n          <ion-row>\n\n            <ion-item col-12>\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n              <ion-input hidden formControlName="avValidity"></ion-input>\n\n              <ion-label stacked>System Id</ion-label>\n\n              <ion-input type="text" formControlName="systemId"></ion-input>\n\n                <button ion-button type="button" color="blue" (click)="scanBarCode(\'system\')" small item-right>\n\n                  <ion-icon name="barcode"> </ion-icon>\n\n                </button>\n\n            </ion-item>\n\n          </ion-row>\n\n              <ion-row>\n\n                <ion-item col-12>\n\n                  <ion-label stacked>Keyboard</ion-label>\n\n                  <ion-input type="text" formControlName="keyboard" ></ion-input>\n\n                    <button ion-button small type="button" (click)="scanBarCode(\'keyboard\')" color="blue" item-right>\n\n                      <ion-icon name="barcode"> </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-item col-12>\n\n                  <ion-label stacked>Mouse</ion-label>\n\n                  <ion-input type="text" formControlName="mouse"></ion-input>\n\n                    <button ion-button small type="button" (click)="scanBarCode(\'mouse\')" color="blue" item-right>\n\n                        <ion-icon name="barcode"> </ion-icon>\n\n                      </button>\n\n                  </ion-item>\n\n                </ion-row>\n\n\n\n              <ion-item col-12>\n\n                <ion-label stacked>Processor</ion-label>\n\n                <ion-input type="text" formControlName="processor" ></ion-input>\n\n              </ion-item>\n\n             <ion-row >\n\n              <ion-item  col-6>\n\n                <ion-label stacked>Primary Memory</ion-label>\n\n                <ion-input type="text" formControlName="memory" ></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item col-6>\n\n                <ion-label stacked>Hard Disk</ion-label>\n\n                <ion-input type="text" formControlName="hdd" ></ion-input>\n\n              </ion-item>\n\n              \n\n            </ion-row>  \n\n            \n\n          <ion-row>\n\n            <ion-item col-12>\n\n              <ion-label stacked>Antivirus Expiry</ion-label>\n\n              <ion-input type="text" formControlName="avExpiry" (click)="dispdate()" (ionFocus)="dispdate()" ></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n              <ion-row>\n\n                <button ion-button type="submit"  icon-end full color=blue   >\n\n                  Save\n\n                </button>\n\n              </ion-row> \n\n             \n\n      </ion-list>\n\n    </form>\n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'allSystems\'">\n\n      <ion-list>\n\n        <ion-searchbar hidden placeholder="Find System" showCancelButton="false">\n\n       </ion-searchbar>\n\n       <button type="button"  color="blue" ion-button (click)="scanBarCode(\'db\')">Scanner</button>\n\n      </ion-list>\n\n      <ion-item>\n\n        <ion-row class="table-title">\n\n          <ion-col col-4 >System Id</ion-col>\n\n          <ion-col col-3 >RAM</ion-col>\n\n          <ion-col col-3 >HDD</ion-col>\n\n          <ion-col col-2 >Antivirus</ion-col>\n\n          <ion-col hidden col-2 >View</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item *ngFor="let system of systemArray">\n\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avValidity}} Days</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"F:\ionic-app\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]) === "function" && _d || Object])
    ], SystemsPage);
    return SystemsPage;
    var _a, _b, _c, _d;
}()); //end of class

//# sourceMappingURL=systems.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chatbot/chatbot.module": [
		594,
		0
	],
	"../pages/interview-details/interview-details.module": [
		595,
		7
	],
	"../pages/interview-summary/interview-summary.module": [
		596,
		6
	],
	"../pages/newuser/newuser.module": [
		601,
		5
	],
	"../pages/profile/profile.module": [
		597,
		4
	],
	"../pages/recruitment/recruitment.module": [
		598,
		3
	],
	"../pages/systems/systems.module": [
		599,
		2
	],
	"../pages/tabs/tabs.module": [
		600,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 279;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * \
 * import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
 *
 *
 *
 *
 *
 *
 * Generated class for the AddItPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItPage = /** @class */ (function () {
    function AddItPage(navCtrl, alertCtrl, navParams, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
    }
    //, private barcodeScanner: BarcodeScanner
    AddItPage.prototype.additem = function () {
        var _this = this;
        if (this.SystemSerialNumber.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "SystemSerialNumberfield is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.CPUSerialNumber.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "CPUSerialNumber field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.RAMSize.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "RAMSize field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.Harddisksize.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Harddisksize field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else if (this.KeyboardSerialNumber.value == "") {
            var alert_5 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "KeyboardSerialNumber field is empty",
                buttons: ['OK']
            });
            alert_5.present();
        }
        else if (this.mouseSerialNumber.value == "") {
            var alert_6 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "mouseSerialNumber field is empty",
                buttons: ['OK']
            });
            alert_6.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                SystemSerialNumber: this.SystemSerialNumber.value,
                CPUSerialNumber: this.CPUSerialNumber.value,
                RAMSize: this.RAMSize.value,
                Harddisksize: this.Harddisksize.value,
                KeyboardSerialNumber: this.KeyboardSerialNumber.value,
                mouseSerialNumber: this.mouseSerialNumber.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://192.168.0.5:8080/project/addIT.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "System details added  successfull") {
                        var alert_7 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_7.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                    else {
                        var alert_8 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_8.present();
                    }
                });
            });
        }
    };
    AddItPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddItPage');
    };
    AddItPage.prototype.item = function () {
        //this.barcodeScanner.scan().then(barcodeData => {
        // console.log('Barcode data', barcodeData);
        //}).catch(err => {
        //   console.log('Error', err);
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("SystemSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "SystemSerialNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("CPUSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "CPUSerialNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("RAMSize"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "RAMSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Harddisksize"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "Harddisksize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("KeyboardSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "KeyboardSerialNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mouseSerialNumber"),
        __metadata("design:type", Object)
    ], AddItPage.prototype, "mouseSerialNumber", void 0);
    AddItPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-it',template:/*ion-inline-start:"F:\ionic-app\src\pages\add-it\add-it.html"*/'<!--\n  Generated template for the AddItPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Add IT infrastructure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="System Serial Number" name="SystemSerialNumber" #SystemSerialNumber></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="CPUSerialNumber" name="CPUSerialNumber" #CPUSerialNumber></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="RAMSize" name="RAMSize" #RAMSize></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Harddisksize" name="Harddisksize" #Harddisksize></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="KeyboardSerialNumber" name="KeyboardSerialNumber" #KeyboardSerialNumber></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="mouseSerialNumber" name="mouseSerialNumber" #mouseSerialNumber></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="additem()"> ADD ITEM </button>\n  </div>\n  <button  (click)="item()"> read ITEM </button>\n  </ion-content>'/*ion-inline-end:"F:\ionic-app\src\pages\add-it\add-it.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AddItPage);
    return AddItPage;
}());

//# sourceMappingURL=add-it.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(474);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_add_it_add_it__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_newuser_newuser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_botabs_botabs__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_systems_systems__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_recruitment_recruitment__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_interview_details_interview_details__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_interview_summary_interview_summary__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var config = {
    apiKey: "AIzaSyCRDymxcDEMORc4U1TjW5_SKiB22G45buM",
    authDomain: "sopaa-b37c1.firebaseapp.com",
    databaseURL: "https://sopaa-b37c1.firebaseio.com",
    projectId: "sopaa-b37c1",
    storageBucket: "",
    messagingSenderId: "500138839182"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_it_add_it__["a" /* AddItPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_recruitment_recruitment__["a" /* RecruitmentPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_newuser_newuser__["a" /* NewuserPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_botabs_botabs__["a" /* BotabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_systems_systems__["a" /* SystemsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_interview_details_interview_details__["a" /* InterviewDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_interview_summary_interview_summary__["a" /* InterviewSummaryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chatbot/chatbot.module#ChatbotPageModule', name: 'ChatbotPage', segment: 'chatbot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-details/interview-details.module#InterviewDetailsPageModule', name: 'InterviewDetailsPage', segment: 'interview-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interview-summary/interview-summary.module#InterviewSummaryPageModule', name: 'InterviewSummaryPage', segment: 'interview-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/recruitment.module#RecruitmentPageModule', name: 'RecruitmentPage', segment: 'recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/systems/systems.module#SystemsPageModule', name: 'SystemsPage', segment: 'systems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newuser/newuser.module#NewuserPageModule', name: 'NewuserPage', segment: 'newuser', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_it_add_it__["a" /* AddItPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_newuser_newuser__["a" /* NewuserPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_botabs_botabs__["a" /* BotabsPage */], __WEBPACK_IMPORTED_MODULE_23__pages_systems_systems__["a" /* SystemsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_recruitment_recruitment__["a" /* RecruitmentPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_interview_details_interview_details__["a" /* InterviewDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_interview_summary_interview_summary__["a" /* InterviewSummaryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\ionic-app\src\app\app.html"*/'<ion-menu [content]="mycontent" persistent="true">\n    <ion-content>\n       <ion-list>\n        <ion-item style="text-align:center;">\n            <ion-thumbnail style="border:1px solid black; height:100px;width:100px;border-radius:50%;margin: auto">\n            </ion-thumbnail>\n            <h2>Tony Manuel</h2>\n            <h6>Intern</h6>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="images" item-end></ion-icon>\n            Change Image\n        </ion-item>\n       \n        <ion-item>\n            <ion-icon name="lock" item-end></ion-icon>\n            Change Password\n        </ion-item>\n        \n        <ion-item>\n            <ion-icon name="power" item-end></ion-icon>\n             Logout\n        </ion-item>\n\n      </ion-list>\n\n\n    </ion-content>\n  </ion-menu>\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    RegisterPage.prototype.Register = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.email.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Email field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.mobile.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Mobile number field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.password.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://192.168.0.13:8080/project/register.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert_5 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_5.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\ionic-app\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" name="fullname" #username></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="Email" name="email" #email></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="Mobile Number" name="mobile" #mobile></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="Register()">Register</button>\n  </div>\n  \n  </ion-content>\n\n'/*ion-inline-end:"F:\ionic-app\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__ = __webpack_require__(112);
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
 * Generated class for the BotabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BotabsPage = /** @class */ (function () {
    function BotabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__["a" /* NewuserPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__newuser_newuser__["a" /* NewuserPage */];
    }
    BotabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BotabsPage');
    };
    BotabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-botabs',template:/*ion-inline-start:"F:\ionic-app\src\pages\botabs\botabs.html"*/'<!--\n  Generated template for the BotabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="icons" color="secondary">\n      <ion-segment-button value="camera">\n        <ion-icon name="camera"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="bookmark">\n        <ion-icon name="bookmark"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="friends">\n      Friends\n    </ion-segment-button>\n    <ion-segment-button value="enemies">\n      Enemies\n    </ion-segment-button>\n    \n  </ion-segment>\n \n   Segment in a form \n  <form [formGroup]="myForm"> \n    <ion-segment formControlName="mapStyle" color="danger">\n      <ion-segment-button value="standard">\n        Standard\n      </ion-segment-button>\n      <ion-segment-button value="hybrid">\n        Hybrid\n      </ion-segment-button>\n      <ion-segment-button value="sat">\n        Satellite\n      </ion-segment-button>\n    </ion-segment>\n    </form> \n   \n    \n</ion-content>\n'/*ion-inline-end:"F:\ionic-app\src\pages\botabs\botabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BotabsPage);
    return BotabsPage;
}());

//# sourceMappingURL=botabs.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map