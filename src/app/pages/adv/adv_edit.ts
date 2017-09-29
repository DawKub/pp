import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';
import { contentHeaders } from './../../common/headers';
@Component({
  selector: 'adv_edit',
  templateUrl: './adv_edit.html'
})
export class AdvEdit implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {}
  public profile = new ProfileData();
  avatar: Object;
  adv: Object;
  public id = this.route.snapshot.paramMap.get('id');

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
    this.http.post('http://localhost:8080/adv/' + this.id, body, { headers: contentHeaders, withCredentials: true })
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
