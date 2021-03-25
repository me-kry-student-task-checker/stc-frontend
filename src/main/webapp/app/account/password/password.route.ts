import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { PasswordComponent } from './password.component';
import { Authority } from 'app/shared/constants/authority.constants';

export const passwordRoute: Route = {
  path: 'password',
  component: PasswordComponent,
  data: {
    authorities: [Authority.STUDENT, Authority.TEACHER, Authority.ADMIN],
    pageTitle: 'Password',
  },
  canActivate: [UserRouteAccessService],
};
