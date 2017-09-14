import { Routes } from '@angular/router';

// pages
import { Welcome } from './pages/welcome/welcome';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { ProfileEdit } from './pages/profile-edit/profile_edit';
import { Friends } from './pages/friends/friends';
import { Adv } from './pages/adv/adv';
import { AdvShow } from './pages/adv-show/adv_show';
import { AdvCreate } from './pages/adv-create/adv_create';

// common
import { AuthGuard } from './common/auth.guard';

export const appRoutes: Routes = [
  // non logged
  { path: '',       component: Welcome},
  { path: 'login',  component: Login },
  { path: 'register', component: Register },
  // Logged
  { path: 'profile', component: Profile },
  { path: 'profile/edit', component: ProfileEdit},
  { path: 'friends', component: Friends},
  // Advertisement
  { path: 'adv', component: Adv },
  { path: 'adv/show/:id', component: AdvShow },
  { path: 'adv/create', component: AdvCreate },
  // Stroll
  // { path: 'stroll', component: Stroll},
  // { path: 'stroll/new', component: StrollCreate},
  // { path: 'stroll/:id', component: Stroll}
  // other user
  { path: 'profile/:id', component: Profile},
  // no existing links
  { path: '**',     component: Profile},
];
// , canActivate: [AuthGuard] <- for autorized pages
