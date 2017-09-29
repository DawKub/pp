import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';

@Component({
  selector: 'stroll',
  templateUrl: './stroll.html',
  styleUrls: [ './stroll.css' ]
})
export class StrollShow implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {
  }
  public profile = new ProfileData();
  public avatar: Object;
  private id = this.route.snapshot.paramMap.get('id');
  stroll: Object;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
    this.http.get('http://localhost:8080/stroll/' + this.id, {withCredentials: true}).subscribe(data => this.stroll = data.json());
  }

}
