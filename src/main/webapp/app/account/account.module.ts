import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StchFrontendSharedModule } from 'app/shared/shared.module';

import { PasswordStrengthBarComponent } from './password/password-strength-bar.component';
import { RegisterComponent } from './register/register.component';
import { accountState } from './account.route';

@NgModule({
  imports: [StchFrontendSharedModule, RouterModule.forChild(accountState)],
  declarations: [RegisterComponent, PasswordStrengthBarComponent],
})
export class AccountModule {}
