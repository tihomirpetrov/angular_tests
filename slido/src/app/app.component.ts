import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav>
        <app-sidenav-list></app-sidenav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-toolbar></app-toolbar>
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
    <app-footer></app-footer>`,
})
export class AppComponent implements OnInit {
  title = 'Sli.do';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.initializeAuthState();
  }
}
