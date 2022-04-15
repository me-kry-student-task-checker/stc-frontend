import { Routes, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Authority } from 'app/shared/constants/authority.constants';
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
