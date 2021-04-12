import { NgModule } from '@angular/core';
import { StchFrontendSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [StchFrontendSharedLibsModule, MatCardModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, CoursecardComponent],
  entryComponents: [LoginModalComponent],
  exports: [StchFrontendSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
})
export class StchFrontendSharedModule {}
