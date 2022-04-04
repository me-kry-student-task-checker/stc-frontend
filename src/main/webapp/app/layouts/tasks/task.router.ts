import {Injectable} from '@angular/core';
import {TaskModel} from 'app/models/task.model';
import {TasksService} from './tasks.service';
import {ActivatedRouteSnapshot, Resolve, Routes} from '@angular/router';
import {Observable} from 'rxjs';
import {TaskComponent} from './task.component';
import {Authority} from 'app/shared/constants/authority.constants';

@Injectable({ providedIn: 'root' })
export class TaskResolver implements Resolve<TaskModel> {
  constructor(private service: TasksService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<TaskModel> {
    const id = route.params['id'];
    return this.service.get(id);
  }
}

export const taskRoute: Routes = [
  {
    path: 'task/:id',
    component: TaskComponent,
    resolve: {
      task: TaskResolver,
    },
    data: {
      authorities: [Authority.ADMIN, Authority.TEACHER, Authority.STUDENT],
      pageTitle: 'Feladat',
    },
  },
];
