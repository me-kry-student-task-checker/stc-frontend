import { Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { Authority } from 'app/shared/constants/authority.constants';

export const coursesRoute: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      authorities: [Authority.ADMIN, Authority.TEACHER, Authority.STUDENT],
      pageTitle: 'Kurzusok',
    },
  },
];
