import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'app/layouts/courses/tasks/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from 'app/layouts/courses/tasks/tasks.service';

@Component({
  selector: 'jhi-tasks-list',
  templateUrl: 'tasksList.component.html',
})
export class TasksListComponent implements OnInit {
  tasks: TaskModel[] = [];
  taskSubscription?: Subscription;

  constructor(private activeModal: NgbActiveModal, private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskSubscription = this.taskService.getAll().subscribe(task => (this.tasks = task));
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
