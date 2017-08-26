import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router  } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: [ "profile.css" ]
})

export class Profile implements OnInit {
  profile: Object;
  token: string;
  canInvite = false;
  
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.token = localStorage.getItem('auth_token');
  }

  
  ngOnInit(): void {
    this.http.get('http://localhost:8080/user')
	.subscribe(
	data => {
      this.profile = data;
    },
	error => {
		alert(error.text());
	});
  }
  
  profile_edit()
  {
	  this.router.navigate(['profile/edit']);
  }
}
