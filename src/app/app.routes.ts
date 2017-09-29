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
import { AdvEdit } from './pages/adv/adv_edit';

import { Stroll } from './pages/stroll/stroll';
import { StrollShow} from './pages/stroll/stroll_show';
import { StrollInvite} from './pages/stroll/stroll_invite';
import { StrollEdit} from './pages/stroll/stroll-edit';

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
  { path: 'adv/edit/:id', component: AdvEdit },
  { path: 'adv/create', component: AdvCreate },
  // Stroll
  { path: 'stroll', component: Stroll},
  { path: 'stroll/invite/:id', component: StrollInvite},
  { path: 'stroll/edit/:id', component: StrollEdit},
  { path: 'stroll/:id', component: StrollShow},
  // other user
  { path: 'profile/:id', component: Profile},
  // no existing links
  { path: '**',     component: Profile},
];
// , canActivate: [AuthGuard] <- for autorized pages
