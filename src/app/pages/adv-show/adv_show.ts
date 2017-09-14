import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileData} from '../../model/profileData';
import { contentHeaders } from './../../common/headers';
@Component({
  selector: 'adv_show',
  templateUrl: './adv_show.html'
})
export class AdvShow implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {}
  private id = this.route.snapshot.paramMap.get('id');
  public profile = new ProfileData();
  avatar: Object;
  adv: any[];
  location: any[];
  author = new ProfileData();

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => this.profile = response.json());
    this.http.get('http://localhost:8080/adv/' + this.id, {withCredentials: true})
      .subscribe(response => {
        this.adv = response.json();
        this.location = response.json().location;
        this.author = response.json().user_id;

        }
      );
    this.http.get('http://localhost:8080/user/' + this.adv['userId'], {withCredentials: true})
      .subscribe(response => this.author = response.json());
  }

  advEdit() {
    this.router.navigate(['./adv/edit/', this.adv['adId']]);
  }

  advJoin(adv) {
    const body = JSON.stringify({ adv });
    this.http.post('http://localhost:8080/friends/invite/' + this.profile.user_id, body, { headers: contentHeaders, withCredentials: true })
      .subscribe(
        response => {
          alert('Wysłano zaproszenie');
        },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

}
