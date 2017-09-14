import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { contentHeaders } from './../../common/headers';
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
  avatar = Object;
  messages: any[];


  constructor(private route: ActivatedRoute, public router: Router, public http: Http) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => {
        this.profile = response.json();
      });

    this.http.get('http://localhost:8080/profile/photo', {withCredentials: true})
      .subscribe(response => {
        this.avatar = response.json();
      });
    this.http.get('http://localhost:8080/message/', {withCredentials: true})
      .subscribe(response => {
        this.messages = response.json();
      });
  }

  sendMessage(user, deliver, status, date, text ) {
    const body = JSON.stringify({user, deliver, status, date, text});
    this.http.post('http://localhost:8080/message/add', body, { headers: contentHeaders, withCredentials: true })
      .subscribe(
        response => { },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

}
