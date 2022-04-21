import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from 'app/models/task.model';
import { NewTaskModel } from 'app/models/newTask.model';
import { SERVER_API_URL } from 'app/app.constants';
import {TaskComment} from "app/models/comment.model";

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

  uploadFiles(files: any, service: string, tagId: any): Observable<any> {
    const fileData: FormData = new FormData();
    files.forEach((file: any) => {
      fileData.append('files', file);
    });
    fileData.append('serviceType', service);
    fileData.append('tagId', tagId);
    return this.http.post(SERVER_API_URL + 'api/filemanagement/uploadFiles', fileData);
  }

  createTaskComment(comment: TaskComment): Observable<TaskComment> {
    return this.http.post<TaskComment>(SERVER_API_URL + '/api/feedback/createTaskComment', comment)
  }

  removeTaskComment(id: number): Observable<{}>{
    return this.http.delete(`${SERVER_API_URL + 'api/feedback/delete/task'}/${id}`);
  }
}
