import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/auth/login/login.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {UserTabComponent} from './components/user/user-tab/user-tab.component';
import {EventListComponent} from './components/user/event-list/event-list.component';
import {EventCreateComponent} from './components/user/event-create/event-create.component';
import {EventLiveComponent} from './components/event/event-live/event-live.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  {
    path: 'event', children: [
      { path: ':id/live', component: EventLiveComponent }
    ]
  },
  {
    path: 'user', children: [
      { path: '', component: UserTabComponent },
      { path: 'create', component: EventCreateComponent },
      { path: 'list', component: EventListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
