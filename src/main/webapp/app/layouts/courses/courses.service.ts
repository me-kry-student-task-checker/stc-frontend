import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { NewCourse } from './newcourse.model';
import { Course } from 'app/layouts/courses/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  course!: Course;

  constructor(private http: HttpClient) {}

  create(credentials: NewCourse): Observable<object> {
    return this.http.post(SERVER_API_URL + 'api/course/create', credentials);
  }

  get(id: Course['id']): Observable<Course> {
    return this.http.get<Course>(SERVER_API_URL + '/api/course/get/' + id);
  }

  getAll(): Observable<Course[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return this.http.get<Course[]>(SERVER_API_URL + '/api/course/getAll').toPromise();
  }

  edit(credentials: Course): Observable<object> {
    return this.http.put(SERVER_API_URL + 'api/course/edit', credentials);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${SERVER_API_URL + 'api/course/delete'}/${id}`);
  }
}
