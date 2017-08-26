import { Routes } from '@angular/router';

// pages
import { Welcome } from './pages/welcome/welcome';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { ProfileEdit } from './pages/profile-edit/profile_edit';
import { Friends } from './pages/friends/friends';
import { Adv } from './pages/adv/adv';

// common
import { AuthGuard } from './common/auth.guard';

export const appRoutes: Routes = [
  // non logged
  { path: '',       component: Welcome},
  { path: 'login',  component: Login },
  { path: 'register', component: Register },
  // Logged
  { path: 'profile', component: Profile },
  { path: 'profile/edit', component: ProfileEdit },
  { path: 'friends', component: Friends, canActivate: [AuthGuard] },
  { path: 'adv', component: Adv, canActivate: [AuthGuard] },

  // other links
  { path: '**',     component: Profile, canActivate: [AuthGuard] },
];
// , canActivate: [AuthGuard] <- for autorized pages
