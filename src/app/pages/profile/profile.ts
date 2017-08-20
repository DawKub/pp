import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router  } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styles: [ 'profile.css' ]
})

export class Profile implements OnInit {
  profile: Object;
  token: string;
  buttonEnabled: boolean;
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.token = localStorage.getItem('auth_token');
  }

  ngOnInit(): void {
    this.http.get('localhost:8080/user').subscribe(data => {
      this.profile = data;
    });
  }
}
