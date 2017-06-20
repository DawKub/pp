import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {AUTH_PROVIDERS, AuthConfig, AuthHttp} from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';
import { routes } from './app.routes';

import { App } from './app.component';
import { Home } from './page/home/home';
import { Login } from './page/login/login';
import { Register } from './page/register/register';

//Elements
import { Navbar   } from './component/navbar/navbar';
import { About } from './component/about/about';
import { Copyright } from './component/copyright/copyright';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{'Content-Type':'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Register,

    Navbar,
    About,
    Copyright
  ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
