import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, RequestOptions} from '@angular/http';
import { contentHeaders } from './../../common/headers';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: [ './login.css' ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    const body = JSON.stringify({ username, password });

    console.log(body);
    this.http.post('http://localhost:8080/rest/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('auth_token', 'log');
          this.router.navigate(['profile']);
        },
        error => {
          alert('Niepoprawny login lub niepoprawne hasło');
          console.log(error.text());
        }
      );
  }

  register(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
