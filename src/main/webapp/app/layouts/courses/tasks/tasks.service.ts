import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from './task.model';
import { NewTaskModel } from './newTask.model';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  create(taskModel: NewTaskModel): Observable<NewTaskModel> {
    return this.http.post<NewTaskModel>(SERVER_API_URL + '/api/task/create', taskModel);
  }

  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(SERVER_API_URL + '/api/task/getAll/1');
  }
}
