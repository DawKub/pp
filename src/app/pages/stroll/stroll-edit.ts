import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';
import {contentHeaders} from '../../common/headers';

@Component({
  selector: 'stroll',
  templateUrl: './stroll_edit.html',
  styleUrls: [ './stroll.css' ]
})
export class StrollEdit implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {
  }
  public profile = new ProfileData();
  public avatar: Object;
  public id = this.route.snapshot.paramMap.get('id');
  public stroll: any[];

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
    this.http.get('http://localhost:8080/stroll/get/' + this.id, {withCredentials: true}).subscribe(data => this.stroll = data.json());
  }

  inviteStroll(user_id, location_latitude, location_longtitude,  location_description, info, data_start, data_end, privacy) {
    const location = [];
    location['latitude'] = location_latitude;
    location['longtitude'] = location_longtitude;
    location['description'] = location_description;
    status = 'invited';

    const body = JSON.stringify({ user_id, location, info, data_start, data_end, privacy, status });
    this.http.post('http://localhost:8080/stroll/update', body, { headers: contentHeaders, withCredentials: true })
      .subscribe(
        response => {
          alert('Zaktualizowano');
        },
        error => {
          alert('Nie powiodło się. Spróbuj ponownie później');
        }
      );
  }

}
