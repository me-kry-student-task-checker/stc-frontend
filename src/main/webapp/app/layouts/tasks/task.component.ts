import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskModel } from 'app/models/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute } from '@angular/router';
import { faCommentDots, faFile, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskFileUploadComponent } from 'app/layouts/tasks/task-file-upload/taskFileUpload.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'app/core/auth/account.service';
import { Subscription } from 'rxjs';
import { SimpleAccountModel } from 'app/models/account.model';
import { FormBuilder, Validators } from '@angular/forms';
import Timeout = NodeJS.Timeout;
import { TaskFileListComponent } from './task-file-list/taskFileList.component';

@Component({
  selector: 'jhi-task',
  templateUrl: './task.component.html',
  styleUrls: ['../../../content/scss/layout/_task.scss'],
})
export class TaskComponent implements OnInit, OnDestroy {
  faCommentDots = faCommentDots;
  faFile = faFile;
  faTrash = faTrash;
  task!: TaskModel;
  authSubscription?: Subscription;
  taskSubscription?: Subscription;
  account: SimpleAccountModel | null = null;
  interval: Timeout | undefined;

  commentForm = this.formBuilder.group({
    comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
  });

  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ task }) => {
      this.task = task;
    });
    this.interval = setInterval(() => {
      this.taskSubscription = this.taskService.getTask(this.task.id).subscribe(task => (this.task = task));
    }, 5000);
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  fileUpload(task: TaskModel): void {
    const modalRef = this.modalService.open(TaskFileUploadComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.task = task;
  }

  onSubmit(): void {
    this.taskService
      .createTaskComment({
        taskId: this.task.id,
        text: this.commentForm.get('comment')!.value,
      })
      .subscribe();
  }

  allowDelete(author: string): boolean {
    return author === this.account?.email;
  }

  deleteComment(taskId: number): void {
    this.taskService.removeTaskComment(taskId).subscribe();
  }

  taskDone(taskId: number): void {
    this.taskService.setTaskDone(taskId).subscribe();
  }

  taskComplete(taskId: number): void {
    this.taskService.setTaskComplete(taskId).subscribe();
  }

  needHelp(taskId: number): void {
    this.taskService.helpNeeded(taskId).subscribe();
  }

  taskFileList(task: TaskModel): void {
    const modalRef = this.modalService.open(TaskFileListComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.task = task;
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
