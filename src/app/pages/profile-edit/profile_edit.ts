import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router  } from '@angular/router';
import { contentHeaders } from './../../common/headers';
import {ProfileData} from '../../model/profileData';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'profile_edit',
  templateUrl: './profile_edit.html',
  styles: [ 'profile_edit.css' ]
})

export class ProfileEdit implements OnInit {
  public profile = new ProfileData();
  avatar = [];
  constructor(public router: Router, public http: Http) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user', {withCredentials: true})
      .subscribe(response => {
        this.profile = response.json();
      });
    this.http.get('http://localhost:8080/profile/photo', {withCredentials: true})
      .subscribe(response => {
        this.avatar = response.json();
      });
  }

  updateMail(mail) {
    const body = JSON.stringify({ mail});
    console.log(body);
    this.http.post('http://localhost:8080/user/updateMail', body, { headers: contentHeaders, withCredentials: true})
      .subscribe(
        response => {
          alert('Mail zmieniony');
        },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

  updatePassword(oldPassword, newPassword, confirmPassword) {
    const body = JSON.stringify({ oldPassword, newPassword, confirmPassword});
    console.log(body);
    this.http.post('http://localhost:8080/user/updatePassword', body, { headers: contentHeaders, withCredentials: true})
      .subscribe(
        response => {
          alert('Hasło zmieniony');
        },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

  updateData(event, user_id, firstName, lastName, city, date) {
    event.preventDefault();
    const body = JSON.stringify({ user_id, firstName, lastName, city, date });
    console.log(body);
    this.http.post('http://localhost:8080/user/updateData', body, { withCredentials: true, headers: contentHeaders})
      .subscribe(
        response => {
          alert('Dane zmieniony');
        },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

  updateDescription(description) {
    const body = JSON.stringify({ description });
    console.log(body);
    this.http.put('http://localhost:8080/profile/description', description, { withCredentials: true})
      .subscribe(
        response => {
          alert('Opis zmieniony');
        },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

}
