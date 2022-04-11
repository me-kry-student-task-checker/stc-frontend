import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from './tasks.service';
import { ActivatedRoute } from '@angular/router';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { TaskFileUploadComponent } from 'app/layouts/tasks/task-file-upload/taskFileUpload.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-task',
  templateUrl: './task.component.html',
  styleUrls: ['../../../content/scss/layout/_task.scss'],
})
export class TaskComponent implements OnInit {
  faCommentDots = faCommentDots;
  faFile = faFile;
  task!: TaskModel;
  taskSubscription?: Subscription;

  constructor(private taskService: TasksService, private route: ActivatedRoute, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ task }) => {
      this.task = task;
    });
  }

  fileUpload(task: TaskModel): void {
    const modalRef = this.modalService.open(TaskFileUploadComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.task = task;
  }
}
