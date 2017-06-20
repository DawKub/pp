import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, RequestOptions} from '@angular/http';
import { contentHeaders } from './../../common/headers';

@Component({
  selector: 'login',
  templateUrl: './html/form.html',
  styleUrls: [ './css/style.css' ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    console.log(contentHeaders);

    console.log(body);
    this.http.post('http://localhost:8080/rest/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          //localStorage.setItem('id_', response.json().sta tus);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
