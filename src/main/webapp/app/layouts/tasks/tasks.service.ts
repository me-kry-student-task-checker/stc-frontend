import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from 'app/models/task.model';
import { NewTaskModel } from 'app/models/newTask.model';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  create(taskModel: NewTaskModel): Observable<NewTaskModel> {
    return this.http.post<NewTaskModel>(SERVER_API_URL + '/api/task/create', taskModel);
  }

  getAllTasks(id: number): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(SERVER_API_URL + '/api/task/getAll/' + id);
  }

  get(id: number): Observable<TaskModel> {
    return this.http.get<TaskModel>(SERVER_API_URL + '/api/task/get/' + id);
  }

  edit(task: TaskModel): Observable<TaskModel> {
    return this.http.put<TaskModel>(SERVER_API_URL + 'api/task/edit', task);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${SERVER_API_URL + 'api/task/delete'}/${id}`);
  }
}
