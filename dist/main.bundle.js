webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aboutpage{margin:30px auto; color:#353535}\r\n.aboutpage h2{color:#1a84db; width: 100%; text-align: center;}\r\n.userimg{width:246px; height: 335px; border-radius: 10px; overflow: hidden; margin:10px; float:left;}\r\n.usertext{float: left; width: 600px; margin-left: 10px; color:#353535}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columnmd aboutpage\">\n\n    <h2>About Project</h2>\n\n\n    <span>\n        Hi! This is Ecommerce Shopping cart Website App for Demo purpose!. You can register online and buy and post product online.\n        This is Testimonial NodeJS and AngularJS based Product. Please use this for testing only and thanks of lot for not messup with this project :D\n        <br><br>\n\n        <strong>TECHNOLOGY</strong><br>\n        FrontEnd: AngularJS 4, ResponsiveWEB, CSS3, Jquery <br>\n        BackEnd: NodeJS, ExpressJS, MySQL, Knex + Bookshelf (ORM), PassportJS, Multer <br>\n        <br>\n        You can write for query amit0shakya@gmail.com\n    </span>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newproduct_newproduct_component__ = __webpack_require__("../../../../../src/app/newproduct/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__productpage_productpage_component__ = __webpack_require__("../../../../../src/app/productpage/productpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__newproduct_newproduct_component__["a" /* NewproductComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_12__productpage_productpage_component__["a" /* ProductpageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* AppRouter */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginwindow{max-width:450px; height: 300px; }\r\n.closebtn{position: absolute; top:5px; right: 5px; font-weight: 900; text-align: center;\r\n    color: #fff; display: block; width:30px; height: 30px;  background-color:transparent; \r\n    line-height: 30px; cursor: pointer;}\r\n\r\n.closebtn:hover{position: absolute; top:5px; right: 5px; font-weight: 900; text-align: center;\r\n        color: #fff; display: block; width:30px; height: 30px;  background-color: #1277c9; \r\n        line-height: 30px; cursor: pointer;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal\">\n    \n      <!-- Modal content -->\n      <div class=\"modal-content loginwindow\">\n      \n        <span class=\"closebtn\">X</span>\n      \n        <app-login></app-login>\n      </div>\n    \n</div>\n\n<div class=\"row\">\n  <app-nav (tick)=\"navclick()\"></app-nav>\n</div>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productpage_productpage_component__ = __webpack_require__("../../../../../src/app/productpage/productpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newproduct_newproduct_component__ = __webpack_require__("../../../../../src/app/newproduct/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
        this.bool = false;
    }
    HomeComponent.prototype.navclick = function () {
        this.bool = !this.bool;
        var color = 'transparent';
        console.log(this.bool, "<<<bool");
        if (this.bool) {
            color = 'red';
        }
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#myModal").css({ 'display': 'block' });
        //this.login.nativeElement.style.color='red';
    };
    HomeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__(".closebtn").click(function () {
                console.log("close login c  lick");
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#myModal").css({ 'display': 'none' });
            });
        });
    };
    HomeComponent.prototype.buyproduct = function (data) {
        console.log("buy product in home");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginbox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "login", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_2__productpage_productpage_component__["a" /* ProductpageComponent */], __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__newproduct_newproduct_component__["a" /* NewproductComponent */], __WEBPACK_IMPORTED_MODULE_5__web_service__["a" /* WebService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__web_service__["a" /* WebService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginhead{width: 100%; height:55px; text-align: center; line-height: 50px; \r\n    background-color: #1a84db; color:#fff;}\r\n\r\n.loginhead p{width:100%; height: 55px; font-weight: 600; color:#fff; \r\n    text-align: center; font-size: 18px; }\r\n\r\n.loginform form{width:90%; margin: 50px auto 0px auto;}\r\n\r\n.error{color: red; line-height: 45px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"loginhead\">\n      <p>User login</p>\n  </div>\n\n    <div class=\"row loginform\">\n    <form #login=\"ngForm\" >\n        <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"username\" class=\"form-control\" name=\"name\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <input type=\"password\" placeholder=\"password\" class=\"form-control\" name=\"pass\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"error\">Some error goes here</label>\n            <button type=\"button\" class=\"btn btn-primary pull-right\">Login</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{width:100%; min-height: 230px; background-color: #fff;}\r\n\r\n.navband{ background-color:#000;height:40px;}\r\n\r\n.navbandcontent{line-height: 40px;}\r\n\r\n.navmail{width:330px;float: left; overflow: hidden;}\r\n\r\n.navregister{float: right;}\r\n\r\n.navregister ul{margin:0px; padding: 0px;}\r\n\r\n.navregister ul li{margin: 0px; padding: 0px; float: right; margin:0px 10px; line-height: 40px; list-style: none}\r\n\r\n.navregister ul li a{color:#ececec; }\r\n\r\n.navregister ul li button{color:#fff}\r\n\r\n.headerbody{height:130px;}\r\n\r\n.headerlogo{width:300px; height:90px;float: left; margin:20px 0px; box-sizing: border-box; text-align: center; }\r\n\r\n.headersearch{float: left; height: 90px; margin-top: 20px; width:800px; box-sizing: border-box;}\r\n\r\n.headersearch input[type=\"text\"]{max-height: 40px; margin:25px 10px; max-width: 600px;}\r\n\r\n.shoppingcart{width:200px; height: 90px; margin: 20px 0px; float: left; box-sizing: border-box;}\r\n\r\n.shoppingcart i{font-size:40px; color:#1a84db; margin-top:20px;}\r\n\r\n.shoppingcart .buys{margin:15px 0px 0px 12px; color:#000; padding:0px;}\r\n\r\n.navlist{ min-height: 60px;}\r\n\r\n.navlist ul{margin:0px; padding: 0px;}\r\n\r\n.navlist ul li{float:left; height:60px;  list-style: none; line-height: 60px; background-color: transparent;}\r\n\r\n.navlist ul li:hover{float:left; height:60px; list-style: none; line-height: 60px; background-color: #3da822;}\r\n\r\n.navlist ul li a{color:#fff;  margin:0px 30px; display: block; font-weight: 900; text-align: center; text-decoration: none;}\r\n\r\n.navlist ul li:hover a{color:yellow;  margin:0px 30px; display: block; font-weight: 900; text-align: center; text-decoration: none;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"row navband\">\n    <div class=\"columnlg navbandcontent\">\n      <div class=\"navmail\">\n          <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> amit0shakya@gmail.com \n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> 9821671927\n      </div>\n\n      <div class=\"navregister\">\n        <ul>\n          <li (click)=\"login()\">\n              <button type=\"button\" class=\"btn btn-link\">Login</button>\n          </li>\n          <li>\n            <button type=\"button\" class=\"btn btn-link\" *ngIf=\"name!=undefine\">Logout</button>\n          </li>\n          <li>\n            <button type=\"button\" class=\"btn btn-link\" routerLink=\"register\" (click)=\"pageclick('register')\">Register</button>\n          </li>\n          <li><a href=\"#\" *ngIf=\"name!=undefine\">Hello Your Name</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"columnlg headerbody\">\n      <div class=\"headerlogo\">\n        <img src=\"./assets/images/logo.jpg\">\n      </div>\n\n      <div class=\"headersearch\">\n          \n        <div class=\"input-group col-md-12\">\n              \n          <div class=\"row\" *ngIf=\"pagename=='home'\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search for Products, Brands and more...\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon2\">\n              <div class=\"input-group-prepend\">\n                  <button type=\"button\" class=\"btn btn-primary\">Search</button>\n              </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"shoppingcart\">\n        <div class=\"row\">\n          <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i>\n          <div class=\"buys\">\n            <strong>Shopping Cart</strong><br>\n            0 items\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"background-color:#3fb125;\">\n    <div class=\"columnlg navlist\">\n      <ul>\n          <li><a routerLink=\"\" (click)=\"pageclick('home')\">Home</a></li>\n          <li><a href=\"#\">Men</a></li>\n          <li><a href=\"#\">Women</a></li>\n          <li><a href=\"#\">Kids</a></li>\n          <li><a href=\"#\">How</a></li>\n          <!--\n          <li><a href=\"#\" *ngIf=\"name!=undefine\">Add Product</a></li>\n          -->\n          <li><a routerLink=\"new\" (click)=\"pageclick('product')\">Add Product</a></li>\n          <li><a routerLink=\"about\" (click)=\"pageclick('about')\">About</a></li>\n\n      </ul>\n    </div>\n  </div>\n\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavComponent = (function () {
    function NavComponent(service) {
        this.service = service;
        this.tick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pagename = "home";
    }
    NavComponent.prototype.pageclick = function (page) {
        this.pagename = page;
    };
    NavComponent.prototype.ngOnInit = function () {
        //this.service.buyProduct({buy:this.addToCart,data:this.data});
        this.service.getdata()
            .subscribe(function (_d) {
            console.log(_d, "<<<data Recieve SUCCESS!");
        });
    };
    NavComponent.prototype.login = function () {
        this.tick.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "tick", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]],
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newproduct/newproduct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".offercheckbox{width:20%; float: left;}\r\n.offerdetail {width:80%; float: left;}\r\n.selectpicker{min-height:50px; padding:0px 10px; border-radius: 5px; border:1px solid #cecece; \r\n    box-sizing: border-box; line-height: 50px; color:#8b8b8b}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newproduct/newproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columnmd pagestart\">\n    <h2>Add New Product</h2><br>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-3\">\n        <p>Product Preview</p>\n        \n        <product [data]='_data'></product>\n        \n      </div>\n\n      <div class=\"col-md-9\">\n        \n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Product Name\" class=\"form-control\"  required [(ngModel)]=\"_data.name\">\n          </div>\n    \n          <div class=\"form-group row\">\n\n            <div class=\"form-group col-md-3\">\n              <input type=\"checkbox\" name=\"offers\" [(ngModel)]=\"offers\">\n              <label>Any Offers?</label>\n            </div>\n\n            <div class=\"form-group col-md-9\" >\n                <input type=\"text\" placeholder=\"Product Offers detail\" class=\"form-control\" name=\"lname\" *ngIf=\"offers\" [(ngModel)]=\"_data.offer\">\n            </div>\n        \n          </div>\n    \n          <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"Product cost\" class=\"form-control\" name=\"price\" required [(ngModel)]=\"_data.cost\">\n          </div>\n    \n          <div class=\"form-group row\">\n              \n            <div class=\"col-md-4 form-group\">\n                <input type=\"file\" placeholder=\"Input type\" ngModel (change)=\"getFiles($event)\">\n            </div>\n\n            <div class=\"col-md-4 form-group\">\n              <div class=\"row\">\n                <label class=\"col-sm-6\">Quantity</label>\n                <input type=\"text\" placeholder=\"total\" name=\"qty\" class=\"form-control col-sm-6\" required [(ngModel)]=\"_data.qty\">\n              </div>\n            </div>\n\n            <div class=\"col-md-4 form-group\">\n              <div class=\"row\">\n\n                <label class=\"col-md-6\">Catagoery:</label>\n\n                <select class=\"selectpicker form-group col-md-6\" data-style=\"btn-primary\" [(ngModel)]=\"_data.catagoery\">\n                    <option value=\"elecronics\">Electronics</option>\n                    <option value=\"grocery\">Grocery</option>\n                    <option value=\"footwear\">Footwear</option>\n                    <option value=\"garment\">Garment</option>\n                    <option value=\"books\">Books</option>\n                    <option value=\"watch\">Watches</option>\n                    <option value=\"other\">Others</option>\n                  </select>    \n              </div>              \n            </div>\n\n          </div>\n    \n          <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"Product Keywords like abc,xyz,..\" class=\"form-control\" name=\"kayword\" required [(ngModel)]=\"_data.keywords\">\n          </div>\n    \n          <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Register</button>\n          </div>\n          {{_data | json}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/newproduct/newproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewproductComponent = (function () {
    function NewproductComponent() {
        this._data = { name: '', cost: '', qty: '1', offer: '', catagoery: '', keywords: '', image: '' };
    }
    NewproductComponent.prototype.ngOnInit = function () {
    };
    NewproductComponent.prototype.getFiles = function (event) {
        console.log(event.target.files[0].name, "<<<filepath");
    };
    NewproductComponent.prototype.submit = function () {
    };
    NewproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newproduct',
            template: __webpack_require__("../../../../../src/app/newproduct/newproduct.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* ProductComponent */]],
            styles: [__webpack_require__("../../../../../src/app/newproduct/newproduct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewproductComponent);
    return NewproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".productbox{width:250px; height: 300px; border:1px solid #dfdede; border-radius: 3px; \r\n    box-sizing: border-box;margin:10px; position: relative;}\r\n.productimage{width:250px; height:200px; margin-top:25px; float: left; margin-bottom: 7px;}\r\n\r\n.pimage{width:150px; background-color: red; height:170px; margin: 15px auto;}\r\n\r\n.productname{width:250px; font-size: 20px; text-align: center; float: left; color:#9b9b9b; position: relative;}\r\n\r\n.buybutton{position: absolute; height: 30px; width:130px; text-align: center; display: block;\r\n    background-color: rgba(61, 60, 60, 0.5); color:#fff; line-height: 30px; left:0px; right:0px;\r\n    margin:0 auto; top:100px; display: none;}\r\n\r\n.buybutton p{color:#fff;}\r\n\r\n.productbox:hover .buybutton{position: absolute; height: 30px; width:130px; text-align: center; display: block;\r\n    background-color: rgba(61, 60, 60, 0.5); color:#fff; line-height: 30px; left:0px; right:0px;\r\n    margin:0 auto; top:100px; display: block; cursor: pointer;}\r\n\r\n.productcost{width:250px; color:green; text-align: center; font-size:20px; float:left; font-weight: 900;}\r\n.offer{height: 15px; color:#fff; background-color:green; font-size: 10px; position: absolute; \r\n    border-radius: 2px; overflow: hidden; padding: 0px 5px; line-height: 15px; text-align: center;\r\n    left:5px; top:5px;}\r\n\r\n.disable{height: 35px; color:#fff; background-color:rgb(117, 117, 117); font-size: 20px; position: absolute; \r\n        border-radius: 2px; overflow: hidden; padding: 0px 15px; line-height: 15px; text-align: center;\r\n        left:42px; top:110px; line-height: 35px; opacity: .7;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"productbox\">\n    \n    <div class=\"disable\" *ngIf='data.qty<1'>OUT OF STOCK</div>\n    <div class=\"offer\" *ngIf=\"data.offer!=''\">{{data.offer}}</div>\n    <div class=\"productimage\">\n        <div class=\"buybutton\" *ngIf='data.qty>0' (click)=\"buythis()\">\n          <p [hidden]='addToCart'>Add to Cart</p>\n          <p [hidden]='!addToCart'>Remove to Cart</p>\n          <!-- <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> -->\n        </div>\n        <div class=\"pimage\"></div>\n    </div>\n    <div class=\"productname\">{{data.name}}</div>\n    <div class=\"productcost\">Rs {{data.cost}}</div>\n</div>\n\n<!-- \n{name:'surf',cost:'Rs 150', offer:'1 bucket free', qty:200}\n-->"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = (function () {
    function ProductComponent(service) {
        this.service = service;
        this.addToCart = false;
        this.data = {};
        //we dont require EventEmitter for now we using Services insted of this
        this.buy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductComponent.prototype.buythis = function () {
        this.addToCart = !this.addToCart;
        this.service.setdata({ buy: this.addToCart, data: this.data });
        //.setdata({buy:this.addToCart,data:this.data});
        // this.customservice.getdata('product info');
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "buy", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]],
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/productpage/productpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner{height: 250px; overflow-x: hidden; background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner.jpg") + ");\r\n    background-position: center center; background-repeat: no-repeat; background-size: cover;\r\n} \r\n.products{margin-top:20px; background-color: #fff; color:rgb(77, 75, 75)}\r\n.products ul{margin:0px; padding: 0px;}\r\n.products ul li{margin:0px; padding: 0px; float: left; list-style: none;}\r\n\r\n.heading h2{ text-align: center; color: #424242; padding:10px 0px; width: 100%;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productpage/productpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row banner\">\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"columnmd products\">\n\n      <div class=\"row heading\">\n          <h2>Best Selling Products</h2>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"buyproduct('product page')\">Test Service</button>\n      </div>\n\n    <ul>\n      <li *ngFor=\"let p of dummyproducts \">\n        <product [data]='p'  (buy)=\"buyproduct($event)\"></product>\n      </li>\n    </ul>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/productpage/productpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_owl_carousel__ = __webpack_require__("../../../../ng2-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductpageComponent = (function () {
    function ProductpageComponent(wtf) {
        this.wtf = wtf;
        this.dummyproducts = [
            { id: '1', name: 'surf', cost: '150', offer: '1 bucket free', qty: 200 },
            { id: '2', name: 'coffee', cost: '150', offer: '5% off', qty: 10 },
            { id: '3', name: 'maggie', cost: '150', offer: '', qty: 100 },
            { id: '4', name: 'tata salt', cost: '10', offer: '', qty: 0 },
            { id: '5', name: 'corn flakes', cost: '350', offer: '30% off', qty: 10 },
            { id: '6', name: 'hmt watch', cost: '2580', offer: 'RS 80 Paytm cashback', qty: 10 },
        ];
        this.images = [{ img: "image1.jpg" }, { img: "image2.jpg" }, { img: "image3.jpg" }, { img: "image4.jpg" }, { img: "image5.jpg" }];
    }
    ProductpageComponent.prototype.ngOnInit = function () {
    };
    ProductpageComponent.prototype.buyproduct = function (data) {
        console.log(data, "<<<buyproduct Product page sending data");
        this.wtf.setdata(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('owlElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_owl_carousel__["OwlCarousel"])
    ], ProductpageComponent.prototype, "owlElement", void 0);
    ProductpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-productpage',
            template: __webpack_require__("../../../../../src/app/productpage/productpage.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]],
            styles: [__webpack_require__("../../../../../src/app/productpage/productpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__web_service__["a" /* WebService */]])
    ], ProductpageComponent);
    return ProductpageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register{margin:30px auto;}\r\n.register h2{width:100%; text-align: center; color:#1a84db; margin-bottom: 20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columnmd register\">\n    <h2>User Registeration</h2>\n    <form #register=\"ngForm\" (ngSubmit)=\"onSubmit(register.value)\">\n      \n      <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Your Name\" class=\"form-control\" name=\"name\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" name=\"lname\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <input type=\"password\" placeholder=\"password\" class=\"form-control\" name=\"pass1\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <input type=\"password\" placeholder=\"retype password\" class=\"form-control\" name=\"pass2\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <input type=\"email\" placeholder=\"Your Email\" class=\"form-control\" name=\"email\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n      </div>\n    </form>\n  \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productpage_productpage_component__ = __webpack_require__("../../../../../src/app/productpage/productpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newproduct_newproduct_component__ = __webpack_require__("../../../../../src/app/newproduct/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");





var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_1__productpage_productpage_component__["a" /* ProductpageComponent */], data: { title: 'some data' } },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_2__newproduct_newproduct_component__["a" /* NewproductComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] }
];
var AppRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebService = (function () {
    function WebService() {
        this.product = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.productservice = this.product.asObservable();
    }
    WebService.prototype.setdata = function (_data) {
        console.log(_data, "<<<data in webservice");
        this.product.next(_data);
    };
    WebService.prototype.getdata = function () {
        return this.product.asObservable();
    };
    WebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebService);
    return WebService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/banner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.55149310e2e2c27698cd.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map