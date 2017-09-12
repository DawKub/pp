import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, RequestOptions} from '@angular/http';
import { contentHeaders } from './../../common/headers';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: [ './login.css' ]
})
export class Login {
  constructor(public router: Router, public http: Http, private _cookieService: CookieService) {
  }

  login(event, username, password) {
    event.preventDefault();
    const body = JSON.stringify({ username, password });

    console.log(body);
    this.http.post('http://localhost:8080/rest/login', body, { headers: contentHeaders, withCredentials: true })
      .subscribe(
        response => {
          this.http.get('http://localhost:8080/user', {withCredentials: true})
            .subscribe(user => {
              localStorage.setItem('currentUser', user.json().user_id);
              this.router.navigate(['profile']);
            });
          // this.router.navigate(['profile']);
        },
        error => {
          alert('Niepoprawny login lub niepoprawne hasło');
        }
      );
  }

  register(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
