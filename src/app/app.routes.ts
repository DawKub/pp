import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '',       component: Home },
  { path: 'login',  component: Login },
  { path: 'register', component: Register },
  { path: 'home',   component: Home },
  { path: '**',     component: Login },
];
// , canActivate: [AuthGuard]
