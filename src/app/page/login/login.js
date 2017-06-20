"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var headers_1 = require("./../../common/headers");
var Login = (function () {
    function Login(router, http) {
        this.router = router;
        this.http = http;
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        this.http.post('http://localhost:8080/rest/login', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.json().id_token);
            _this.router.navigate(['profile']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    Login.prototype.signup = function (event) {
        event.preventDefault();
        this.router.navigate(['register']);
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './html/form.html',
        styleUrls: ['./css/style.css']
    })
], Login);
exports.Login = Login;
