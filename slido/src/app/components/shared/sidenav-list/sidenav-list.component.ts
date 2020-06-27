import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  // @Output() sidenavToggle = new EventEmitter<void>();
  sidenavToggle = false;
  isAuth = false;
  isAuthSub: Subscription;
  showFiller = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthSub = this.authService.isAuthChanged.subscribe((data) => {
      this.isAuth = data;
    });
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

  toggleSidenav() {
    // this.sidenavToggle.emit();
    debugger;
    // this.sidenavToggle = !this.sidenavToggle;
  }
}
