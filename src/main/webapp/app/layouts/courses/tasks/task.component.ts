import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from 'app/layouts/courses/tasks/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  task!: TaskModel;
  taskSubscription?: Subscription;

  constructor(private taskService: TasksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ task }) => {
      this.task = task;
    });
  }
}
