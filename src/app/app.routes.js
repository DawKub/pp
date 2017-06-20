"use strict";
exports.__esModule = true;
var home_1 = require("./page/home/home");
var login_1 = require("./page/login/login");
var register_1 = require("./page/register/register");
var auth_guard_1 = require("./common/auth.guard");
exports.routes = [
    { path: '', component: login_1.Login },
    { path: 'login', component: login_1.Login },
    { path: 'register', component: register_1.Register },
    { path: 'home', component: home_1.Home, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', component: login_1.Login },
];
