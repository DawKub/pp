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
  public isAlreadyFriend = 0;
  avatar = Object;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  friends: any[];
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
    }else {
      this.http.get('http://localhost:8080/user/' + this.id, {withCredentials: true})
        .subscribe(response => {
          this.profile = response.json();
          this.buttonEnabled = this.currentUser !== this.profile['user_id'];
        });
      this.http.get('http://localhost:8080/friends', {withCredentials: true})
        .subscribe(response => {
          console.log(response);

          response.json().forEach(element => {
            if (element.user_id === this.id) {
              this.isAlreadyFriend = 1;
            }
          });
          console.log(this.isAlreadyFriend);
        });
    }

    this.http.get('http://localhost:8080/profile/photo', {withCredentials: true})
      .subscribe(response => {
        this.avatar = response.json();
      });
  }

  editProfile() {
    this.router.navigate(['./profile/edit']);
  }

  addFriend(friendId) {
    const body = JSON.stringify({ friendId });
    this.http.post('http://localhost:8080/friends/invite/' + friendId, body, { headers: contentHeaders, withCredentials: true })
      .subscribe(
        response => {
          alert('Wysłano zaproszenie');
        },
        error => {
          alert('Wystąpił błąd. Spróbuj później');
        }
      );
  }

  inviteStroll(profileId) {
    this.router.navigate(['./stroll/new/' + profileId]);
  }

}
