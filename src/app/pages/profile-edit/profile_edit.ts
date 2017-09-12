import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router  } from '@angular/router';

import {ProfileData} from '../../model/profileData';

@Component({
  selector: 'profile_edit',
  templateUrl: './profile_edit.html',
  styles: [ 'profile_edit.css' ]
})

export class ProfileEdit implements OnInit {
  public profile = new ProfileData();
  avatar = [];
  constructor(public router: Router, public http: Http) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => {
        this.profile = response.json();
        console.log(this.profile);
      });
    this.http.get('http://localhost:8080/profile/photo', {withCredentials: true})
      .subscribe(response => {
        this.avatar = response.json();
      });
  }
}
