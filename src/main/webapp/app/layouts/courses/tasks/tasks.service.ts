import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from './task.model';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  create(taskModel: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(SERVER_API_URL + '/api/task/create', taskModel);
  }
}
