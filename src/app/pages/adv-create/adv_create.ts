import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';
import { contentHeaders } from './../../common/headers';
@Component({
  selector: 'adv_create',
  templateUrl: './adv_create.html'
})
export class AdvCreate implements OnInit {
  constructor(public router: Router, public http: Http) {}
  public profile = new ProfileData();
  avatar: Object;
  advUser: Object;
  advFriends: Object;
  advAll: Object;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
  }

  createAdv(user_id, location_latitude, location_longtitude,  location_description, description, strollStartTime, strollEndTime, privacy, adEndTime) {
    const location = [];
    location['latitude'] = location_latitude;
    location['longtitude'] = location_longtitude;
    location['description'] = location_description;

    const body = JSON.stringify({ user_id, location, description, strollStartTime, strollEndTime, privacy, adEndTime });
    this.http.post('http://localhost:8080/adv', body, { headers: contentHeaders, withCredentials: true })
      .subscribe(
        response => {
          alert('Utworzono');
        },
        error => {
          alert('Nie powiodło się. Spróbuj ponownie później');
        }
      );
  }

}
