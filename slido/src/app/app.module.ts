import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidenavListComponent } from './components/shared/sidenav-list/sidenav-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './components/shared/footer/footer.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './components/auth/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/auth/signup/signup.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UserTabComponent } from './components/user/user-tab/user-tab.component';
import { EventCreateComponent } from './components/user/event-create/event-create.component';
import { EventListComponent } from './components/user/event-list/event-list.component';
import { EventLiveComponent } from './components/event/event-live/event-live.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EventPostQuestionComponent } from './components/event/event-post-question/event-post-question.component';
import { EventQuestionComponent } from './components/event/event-question/event-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavListComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserTabComponent,
    EventCreateComponent,
    EventListComponent,
    EventLiveComponent,
    ToolbarComponent,
    EventPostQuestionComponent,
    EventQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
