import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';

@Component({
  selector: 'adv',
  templateUrl: './adv.html',
  styleUrls: [ './adv.css' ]
})
export class Adv implements OnInit {
  constructor(public router: Router, public http: Http) {
  }
  public profile = new ProfileData();
  public avatar: Object;
  advUser: Object;
  advFriends: Object;
  advAll: Object;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
    this.http.get('http://localhost:8080/adv', {withCredentials: true}).subscribe(data => this.advUser = data.json());
    this.http.get('http://localhost:8080/adv/friends', {withCredentials: true}).subscribe(data => this.advFriends = data.json());
    this.http.get('http://localhost:8080/adv/all', {withCredentials: true}).subscribe(data => this.advAll = data.json());
  }

  create() {
    this.router.navigate(['./adv/create']);
  }
  advShow(adId) {
    this.router.navigate(['./adv/show/' + adId]);
  }

}
