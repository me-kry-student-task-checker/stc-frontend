import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { SimpleAccountModel } from 'app/models/account.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCourseComponent } from 'app/layouts//courses/course-new/newCourse.component';
import { DeleteCourseComponent } from 'app/layouts/courses/course-delete/deleteCourse.component';
import { Course } from 'app/models/course.model';
import { CourseService } from 'app/layouts/courses/course.service';
import { EditCourseComponent } from 'app/layouts/courses/course-edit/editCourse.component';
import Timeout = NodeJS.Timeout;

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  account: SimpleAccountModel | null = null;
  authSubscription?: Subscription;
  courseSubscription?: Subscription;
  cardCourse: Course[] = [];
  interval: Timeout | undefined;

  constructor(
    private accountService: AccountService,
    private courseService: CourseService,
    private modalService: NgbModal,
    private loginModalService: LoginModalService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.courseSubscription = this.courseService.getAll().subscribe(course => (this.cardCourse = course));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  newCourse(): void {
    const modalRef = this.modalService.open(NewCourseComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance;
  }

  deleteCourse(course: Course): void {
    const modalRef = this.modalService.open(DeleteCourseComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

  editCourse(course: Course): void {
    const modalRef = this.modalService.open(EditCourseComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
