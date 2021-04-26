import { Routes } from '@angular/router';

import { EditcourseComponent } from './editcourse.component';
import { Authority } from 'app/shared/constants/authority.constants';

export const editCourseRoute: Routes = [
  {
    path: 'editCourse',
    component: EditcourseComponent,
    data: {
      authorities: [Authority.TEACHER],
      pageTitle: 'Kurzus módosítása',
    },
  },
];
