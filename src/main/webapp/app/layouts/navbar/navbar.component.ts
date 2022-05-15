import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from 'app/core/auth/account.service';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { LoginService } from 'app/core/login/login.service';
import { SimpleAccountModel } from 'app/models/account.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../content/scss/components/_navbar.scss'],
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  swaggerEnabled?: boolean;
  account: SimpleAccountModel | null = null;
  authSubscription?: Subscription;

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
