import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';
import { Course } from '../courses/course.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewCourseService {
  constructor(private http: HttpClient) {}

  create(credentials: Course): Observable<object> {
    return this.http.post(SERVER_API_URL + 'api/course/create', credentials);
  }
}
