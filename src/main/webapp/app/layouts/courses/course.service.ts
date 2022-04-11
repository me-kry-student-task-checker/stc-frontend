import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_API_URL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { NewCourse } from 'app/models/newcourse.model';
import { Course } from 'app/models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  course!: Course;

  constructor(private http: HttpClient) {}

  create(newCourse: NewCourse): Observable<NewCourse> {
    return this.http.post<NewCourse>(SERVER_API_URL + 'api/course/create', newCourse);
  }

  get(id: number): Observable<Course> {
    return this.http.get<Course>(SERVER_API_URL + '/api/course/get/' + id);
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_URL + '/api/course/getAll');
  }

  edit(course: Course): Observable<Course> {
    return this.http.put<Course>(SERVER_API_URL + 'api/course/edit', course);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${SERVER_API_URL + 'api/course/delete'}/${id}`);
  }

  inviteStudents(id: number, emails: string[]): Observable<any> {
    return this.http.post(SERVER_API_URL + 'api/user/assignStudentsToCourse', { courseId: id, studentEmails: emails });
  }

  uploadFiles(files: any, service: string, tagId: any): Observable<any> {
    const fileData: FormData = new FormData();
    files.forEach((file: any) => {
      fileData.append('files', file);
    });
    fileData.append('serviceType', service);
    fileData.append('tagId', tagId);
    return this.http.post(SERVER_API_URL + 'api/filemanagement/uploadFiles', fileData);
  }
}
