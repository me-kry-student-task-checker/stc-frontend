import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from 'app/layouts/courses/tasks/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jhi-task',
  templateUrl: './task.component.html',
  styleUrls: ['../../../../content/scss/layout/_task.scss'],
})
export class TaskComponent implements OnInit {
  faCommentDots = faCommentDots;
  faFile = faFile;
  task!: TaskModel;
  taskSubscription?: Subscription;

  constructor(private taskService: TasksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ task }) => {
      this.task = task;
    });
  }
}
