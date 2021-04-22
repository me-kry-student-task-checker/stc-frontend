import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { NewCourse } from '../newcourse/newcourse.model';
import { Course } from 'app/layouts/courses/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  create(credentials: NewCourse): Observable<object> {
    return this.http.post(SERVER_API_URL + 'api/course/create', credentials);
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_URL + '/api/course/getAll');
  }
}
