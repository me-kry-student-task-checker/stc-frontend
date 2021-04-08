import { Routes } from '@angular/router';

import { NewcourseComponent } from './newcourse.component';
import { Authority } from '../../shared/constants/authority.constants';

export const newCourseRoute: Routes = [
  {
    path: 'newcourse',
    component: NewcourseComponent,
    data: {
      authorities: [Authority.TEACHER],
      pageTitle: 'Új kurzus',
    },
  },
];
