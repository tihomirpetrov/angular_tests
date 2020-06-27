import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isAuth = false;
  isAuthSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuthChanged.subscribe((data) => {
      this.isAuth = data;
    });
  }

  logout() {
    this.authService.logout();
  }
}
