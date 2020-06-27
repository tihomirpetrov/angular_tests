import {Component, EventEmitter, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../core/auth.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  toggle = false;
  isAuth = false;
  isAuthSub: Subscription;
  sidenav: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuthChanged.subscribe((data) => {
      this.isAuth = data;
    });
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }

  toggleSidenav() {
    // this.toggle = !this.toggle;
  }

  logout() {
    this.authService.logout();
  }
}
