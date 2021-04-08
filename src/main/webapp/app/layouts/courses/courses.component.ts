import { Component, OnInit } from '@angular/core';

import { Account } from '../../core/user/account.model';
import { AccountService } from '../../core/auth/account.service';
import { Subscription } from 'rxjs';
import { ProfileService } from '../profiles/profile.service';

@Component({
  selector: 'jhi-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../../../content/scss/layout/_courses.scss'],
})
export class CoursesComponent implements OnInit {
  account: Account | null = null;
  authSubscription?: Subscription;
  isNavbarCollapsed = true;
  swaggerEnabled?: boolean;
  inProduction?: boolean;

  constructor(private accountService: AccountService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }
}
