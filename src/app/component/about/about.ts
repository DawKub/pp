import { Component } from '@angular/core';

//import { Login_Bar } from './../login/login_bar.component';

@Component({
  selector: 'about',
  templateUrl: './html/about.html',
  styleUrls: ['./css/style.css'],
})

export class About {
  header = "Walk with me";
  pageDescription = 'Serwis społeczniościowy służący do organizowania spacerów z innymi użytkownikami serwisu.' +
    'Twórz ogłoszenia by odnaleźć ludzi, zapraszaj znajomych na spacery oraz szukaj ciekawych miejsc';
}
