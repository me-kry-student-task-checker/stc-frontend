import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'app/models/task.model';
import { Subscription } from 'rxjs';
import { TasksService } from '../tasks.service';
import { Account } from 'app/core/user/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { Course } from 'app/models/course.model';
import { EditTaskComponent } from "app/layouts/tasks/edit-task/editTask.component";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'jhi-tasks-list',
  templateUrl: 'tasksList.component.html',
  styleUrls: ['../../../../content/scss/layout/_course.scss'],
})
export class TasksListComponent implements OnInit {
  account: Account | null = null;
  tasks: TaskModel[] = [];
  course!: Course;
  displayTask: string[] = ['id', 'feladat', 'leírás', 'részletek', 'szerkesztés'];
  authSubscription?: Subscription;
  taskSubscription?: Subscription;
  faPenSquare = faPenSquare;

  constructor(
    private accountService: AccountService,
    private activeModal: NgbActiveModal,
    private taskService: TasksService,
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.taskSubscription = this.taskService.getAllTasks(this.course.id).subscribe(task => (this.tasks = task));
  }

  editTask(task: TaskModel): void {
    const modalRef = this.modalService.open(EditTaskComponent, {size: "lg", backdrop: "static"});
    modalRef.componentInstance.task = task;
    this.activeModal.dismiss()
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
