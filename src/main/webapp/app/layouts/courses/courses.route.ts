import { Routes, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { Authority } from 'app/shared/constants/authority.constants';
import { NewcourseComponent } from '../courses/newcourse.component';
import { EditcourseComponent } from '../courses/editcourse.component';
import { Injectable } from '@angular/core';
import { Course } from 'app/layouts/courses/course.model';
import { CourseService } from 'app/layouts/courses/courses.service';
import { Observable } from 'rxjs';
import { TasksComponent } from 'app/layouts/courses/tasks/tasks.component';

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<Course> {
  constructor(private service: CourseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const id = route.params['id'];
    return this.service.get(id);
  }
}

export const coursesRoute: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      authorities: [Authority.ADMIN, Authority.TEACHER, Authority.STUDENT],
      pageTitle: 'Kurzusok',
    },
  },
  {
    path: 'newCourse',
    component: NewcourseComponent,
    data: {
      authorities: [Authority.TEACHER],
      pageTitle: 'Új kurzus',
    },
  },
  {
    path: 'editCourse/:id',
    component: EditcourseComponent,
    resolve: {
      course: CourseResolver,
    },
    data: {
      authorities: [Authority.TEACHER],
      pageTitle: 'Kurzus módosítása',
    },
  },
  {
    path: 'tasks/:id',
    component: TasksComponent,
    resolve: {
      course: CourseResolver,
    },
    data: {
      authorities: [Authority.ADMIN, Authority.TEACHER, Authority.STUDENT],
      pageTitle: 'Feladat',
    },
  },
];
