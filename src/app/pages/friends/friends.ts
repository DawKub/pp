import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './../../common/headers';
import {ProfileData} from '../../model/profileData';
@Component({
  selector: 'friends',
  templateUrl: './friends.html'
})
export class Friends implements OnInit {
  public profile = new ProfileData();
  avatar = [];
  friends = Object;
  constructor(public router: Router, public http: Http) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => {
        this.profile = response.json();
      },
        error => {
          this.router.navigate(['login']);
        });
    this.http.get('http://localhost:8080/profile/photo', {withCredentials: true})
      .subscribe(response => {
        this.avatar = response.json();
      });
    this.http.get('http://localhost:8080/friends', {withCredentials: true})
      .subscribe(response => {
        this.friends = response.json();
      });
  }

}
