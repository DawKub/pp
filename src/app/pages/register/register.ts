import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './../../common/headers';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: [ './register.css' ]
})
export class Register {
  constructor(public router: Router, public http: Http) {
  }

  register(event, nick, password, mail, fistName, lastName, city, date) {
	  
    event.preventDefault();
    const body = JSON.stringify({ nick, password, mail, fistName, lastName, city, date });
	alert(body);
    this.http.post('http://localhost:8080/registration', body, { headers: contentHeaders })
      .subscribe(
        response => {
			alert("Konto zostało utworzone");
          this.router.navigate(['']);
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
