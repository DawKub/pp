"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var angular2_jwt_1 = require("angular2-jwt");
var auth_guard_1 = require("./common/auth.guard");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var home_1 = require("./page/home/home");
var login_1 = require("./page/login/login");
var register_1 = require("./page/register/register");
//Elements
var navbar_1 = require("./component/navbar/navbar");
var about_1 = require("./component/about/about");
function authHttpServiceFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        tokenName: 'token',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http, options);
}
exports.authHttpServiceFactory = authHttpServiceFactory;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.App,
            home_1.Home,
            login_1.Login,
            register_1.Register,
            navbar_1.Navbar,
            about_1.About
        ],
        imports: [
            http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(app_routes_1.routes, {
                useHash: true
            })
        ],
        providers: [
            auth_guard_1.AuthGuard,
            {
                provide: angular2_jwt_1.AuthHttp,
                useFactory: authHttpServiceFactory,
                deps: [http_1.Http, http_1.RequestOptions]
            }
        ],
        bootstrap: [app_component_1.App]
    })
], AppModule);
exports.AppModule = AppModule;
