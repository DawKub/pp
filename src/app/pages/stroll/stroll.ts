import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';

@Component({
  selector: 'stroll',
  templateUrl: './stroll.html',
  styleUrls: [ './stroll.css' ]
})
export class Stroll implements OnInit {
  constructor(public router: Router, public http: Http) {
  }
  public profile = new ProfileData();
  public avatar: Object;
  public strolls: any[];

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
    this.http.get('http://localhost:8080/stroll/get', {withCredentials: true}).subscribe(data => this.strolls = data.json());
  }

  strollShow(strollId) {
    this.router.navigate(['./stroll/show/' + strollId]);
  }

}
