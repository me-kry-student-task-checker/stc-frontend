import { Routes, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CourseListComponent } from './course-list/courseList.component';
import { Authority } from 'app/shared/constants/authority.constants';
import { NewCourseComponent } from './course-new/newCourse.component';
import { EditCourseComponent } from './course-edit/editCourse.component';
import { Injectable } from '@angular/core';
import { Course } from 'app/models/course.model';
import { CourseService } from 'app/layouts/courses/course.service';
import { Observable } from 'rxjs';
import { CourseComponent } from 'app/layouts/courses/course/course.component';

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<Course> {
  constructor(private service: CourseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const id = route.params['id'];
    return this.service.get(id);
  }
}

export const courseRoute: Routes = [
  {
    path: 'courses',
    component: CourseListComponent,
    data: {
      authorities: [Authority.ADMIN, Authority.TEACHER, Authority.STUDENT],
      pageTitle: 'Kurzusok',
    },
  },
  {
    path: 'newCourse',
    component: NewCourseComponent,
    data: {
      authorities: [Authority.TEACHER],
      pageTitle: 'Új kurzus',
    },
  },
  {
    path: 'editCourse/:id',
    component: EditCourseComponent,
    resolve: {
      course: CourseResolver,
    },
    data: {
      authorities: [Authority.TEACHER],
      pageTitle: 'Kurzus módosítása',
    },
  },
  {
    path: 'course/:id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
    data: {
      authorities: [Authority.ADMIN, Authority.TEACHER, Authority.STUDENT],
      pageTitle: 'Kurzus',
    },
  },
];
