import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';
import {contentHeaders} from '../../common/headers';

@Component({
  selector: 'stroll_invite',
  templateUrl: './stroll_invite.html',
  styleUrls: [ './stroll.css' ]
})
export class StrollInvite implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {
  }
  public profile = new ProfileData();
  public invited = new ProfileData();
  public avatar: Object;
  private id = this.route.snapshot.paramMap.get('id');
  stroll: Object;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
    this.http.get('http://localhost:8080/user/' + this.id, {withCredentials: true})
      .subscribe(response => this.invited = response.json());
    this.http.get('http://localhost:8080/stroll/' + this.id, {withCredentials: true}).subscribe(data => this.stroll = data.json());
  }

  inviteStroll(user_id, location_latitude, location_longtitude,  location_description, info, data_start, data_end, privacy) {
    const location = [];
    location['latitude'] = location_latitude;
    location['longtitude'] = location_longtitude;
    location['description'] = location_description;
    status = 'invited';

    const body = JSON.stringify({ user_id, location, info, data_start, data_end, privacy, status });
    this.http.post('http://localhost:8080/stroll/make', body, { headers: contentHeaders, withCredentials: true })
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
