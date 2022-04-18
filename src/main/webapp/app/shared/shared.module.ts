import { NgModule } from '@angular/core';
import { StchFrontendSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { ErrorDialogComponent } from 'app/shared/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoadingDialogComponent } from 'app/shared/loading/loading-dialog.componenet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ShowFileComponent } from 'app/shared/showFile/showFile.component';

@NgModule({
  imports: [StchFrontendSharedLibsModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    ErrorDialogComponent,
    LoadingDialogComponent,
    ShowFileComponent,
  ],
  entryComponents: [LoginModalComponent],
  exports: [StchFrontendSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
})
export class StchFrontendSharedModule {}
