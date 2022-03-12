import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from 'app/layouts/courses/tasks/tasks.service';
import { Account } from 'app/core/user/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { Course } from 'app/models/course.model';

@Component({
  selector: 'jhi-tasks-list',
  templateUrl: 'tasksList.component.html',
  styleUrls: ['../../../../content/scss/layout/course.scss'],
})
export class TasksListComponent implements OnInit {
  account: Account | null = null;
  tasks: TaskModel[] = [];
  course!: Course;
  displayTask: string[] = ['id', 'feladat', 'leírás', 'részletek'];
  authSubscription?: Subscription;
  taskSubscription?: Subscription;

  constructor(private accountService: AccountService, private activeModal: NgbActiveModal, private taskService: TasksService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.taskSubscription = this.taskService.getAllTasks(this.course.id).subscribe(task => (this.tasks = task));
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
