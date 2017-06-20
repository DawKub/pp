"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
//import { Login_Bar } from './../login/login_bar.component';
var About = (function () {
    function About() {
        this.header = "Walk with me";
        this.pageDescription = 'Serwis społeczniościowy służący do organizowania spacerów z innymi użytkownikami serwisu.' +
            'Twórz ogłoszenia by odnaleźć ludzi, zapraszaj znajomych na spacery oraz szukaj ciekawych miejsc';
    }
    return About;
}());
About = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: './html/about.html',
        styleUrls: ['./css/style.css']
    })
], About);
exports.About = About;
