import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from 'app/layouts/courses/tasks/tasks.service';

@Component({
  selector: 'jhi-tasks-list',
  templateUrl: 'tasksList.component.html',
  styleUrls: ['../../../../content/scss/layout/_tasks.scss']
})
export class TasksListComponent implements OnInit {
  tasks: TaskModel[] = [];
  displayTask: string[] = ["id", "feladat", "leírás"];
  taskSubscription?: Subscription;

  constructor(private activeModal: NgbActiveModal, private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskSubscription = this.taskService.getAllTasks().subscribe(task => (this.tasks = task));
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
