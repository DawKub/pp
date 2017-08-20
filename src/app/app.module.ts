import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthGuard } from './common/auth.guard';
import { AuthModule } from './common/auth.module';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { Welcome } from './pages/welcome/welcome';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

import { Profile } from './pages/profile/profile';
import { ProfileEdit } from './pages/profile-edit/profile_edit';
import { Friends } from './pages/friends/friends';
import { Adv } from './pages/adv/adv';

// Elements
import { Navbar   } from './component/navbar/navbar';
import { Navigation   } from './component/navigation/navigation';
import { About } from './component/about/about';
import { Copyright } from './component/copyright/copyright';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    // pages not logged in
    Welcome,
    Login,
    Register,
    // pages logged in
    Profile,
    ProfileEdit,
    Friends,
    Adv,
    // additional components
    Navbar,
    Navigation,
    About,
    Copyright
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    AuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthModule
  ]

})
export class AppModule { }
