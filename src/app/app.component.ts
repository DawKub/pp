import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Copyright } from './component/copyright/copyright';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  constructor(public router: Router) {}
}
