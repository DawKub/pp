import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './../../common/headers';

@Component({
  selector: 'adv',
  templateUrl: './adv.html',
  styleUrls: [ './adv.css' ]
})
export class Adv implements OnInit {
  constructor(public router: Router, public http: Http) {
  }

  advUser: Object;
  advFriends: Object;
  advAll: Object;

  ngOnInit(): void {
    this.http.get('localhost:8080/adv').subscribe(data => {
      this.advUser = data;
    });
    this.http.get('localhost:8080/adv/friends').subscribe(data => {
      this.advFriends = data;
    });
    this.http.get('localhost:8080/adv/all').subscribe(data => {
      this.advAll = data;
    });
  }

}
