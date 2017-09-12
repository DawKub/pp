import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ProfileData} from '../../model/profileData';
@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styles: [ 'profile.css' ]
})

export class Profile implements OnInit {
  public profile = new ProfileData();
  private id = this.route.snapshot.paramMap.get('id');
  avatar = [];
  adv = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  buttonEnabled: boolean;

  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {

  }

  ngOnInit(): void {
    if (this.id === null) {
      this.http.get('http://localhost:8080/user', {withCredentials: true})
        .subscribe(response => {
          this.profile = response.json();
          this.buttonEnabled = this.currentUser !== this.profile['user_id'];
        });
      this.http.get('http://localhost:8080/adv', {withCredentials: true})
        .subscribe(response => {
          this.adv = response.json();
        });
    }else {
      this.http.get('http://localhost:8080/user/' + this.id, {withCredentials: true})
        .subscribe(response => {
          this.profile = response.json();
          this.buttonEnabled = this.currentUser !== this.profile['user_id'];
        });
      this.http.get('http://localhost:8080/adv/' + this.id, {withCredentials: true})
        .subscribe(response => {
          this.adv = response.json();
        });
    }

    this.http.get('http://localhost:8080/profile/photo', {withCredentials: true})
      .subscribe(response => {
        this.avatar = response.json();
      });
  }

}
