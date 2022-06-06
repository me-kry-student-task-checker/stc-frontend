import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from '../tasks.service';
import { SimpleAccountModel } from 'app/models/account.model';
import { AccountService } from 'app/core/auth/account.service';

@Component({
  selector: 'jhi-task-file-list',
  templateUrl: 'taskFileList.component.html',
})
export class TaskFileListComponent implements OnInit {
  account: SimpleAccountModel | null = null;
  task!: TaskModel;
  displayTask: string[] = ['id', 'fájl_név', 'kiterjesztés'];
  authSubscription?: Subscription;
  taskSubscription?: Subscription;

  constructor(private accountService: AccountService, private activeModal: NgbActiveModal, private taskService: TasksService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.taskSubscription = this.taskService.getTask(this.task.id).subscribe(task => (this.task = task));
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
