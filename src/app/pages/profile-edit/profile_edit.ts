import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router  } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'profile_edit',
  templateUrl: './profile_edit.html',
  styleUrls: [ 'profile_edit.css' ]
})

export class ProfileEdit implements OnInit {
  profile: Object;
  token: string;
  buttonEnabled: boolean;
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.token = localStorage.getItem('auth_token');
  }

  
  ngOnInit(): void {

  }
}
