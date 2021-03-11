import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs/operators';
import { AccountService } from './account.service';
import { AuthServerProvider } from './auth-jwt.service';
import { Login } from '../login/login.model';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AuthHelperComponent {
  constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {}
  getHeader(credentials: Login): any {
    this.authServerProvider
      .login(credentials)
      .pipe(first())
      .subscribe((response: any) => {
        if (response.headers.authorization) {
          localStorage.setItem('access_token', response.headers.authorization);
        } else {
          throw new Error('There is no token in the response!');
        }
      });
  }
}
