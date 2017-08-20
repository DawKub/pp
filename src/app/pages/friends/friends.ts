import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './../../common/headers';

@Component({
  selector: 'friends',
  templateUrl: './friends.html'
})
export class Friends implements OnInit {
  constructor(public router: Router, public http: Http) {
  }

  profile: Object;
  friends: Object;

  ngOnInit(): void {
    this.http.get('localhost:8080/user').subscribe(data => {
      this.profile = data;
    });
    this.http.get('localhost:8080/friends').subscribe(data => {
      this.friends = data;
    });
  }

}
