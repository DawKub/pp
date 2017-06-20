import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './../../common/headers';

@Component({
  selector: 'register',
  templateUrl: './html/form.html',
  styleUrls: [ './css/style.css' ]
})
export class Register {
  constructor(public router: Router, public http: Http) {
  }

  register(event, nick, password, mail, fistName, lastName, city, date) {
    event.preventDefault();
    let body = JSON.stringify({ nick, password, mail, fistName, lastName, city, date });
    this.http.post('http://localhost:8080/register', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}
