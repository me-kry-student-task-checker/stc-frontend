import { Component, OnInit } from '@angular/core';

import { Account } from 'app/core/user/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { Subscription } from 'rxjs';
import { CourseService } from 'app/layouts/courses/courses.service';
import { Course } from 'app/layouts/courses/course.model';
import { DeleteCourseComponent } from 'app/layouts/courses/delete-course.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../../../content/scss/layout/_courses.scss'],
})
export class CoursesComponent implements OnInit {
  account: Account | null = null;
  cardCourse: Course[] = [];
  authSubscription?: Subscription;
  courseSubscription?: Subscription;

  constructor(private accountService: AccountService, private courseService: CourseService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.courseSubscription = this.courseService.getAll().subscribe(course => (this.cardCourse = course));
  }

  deleteCourse(course: Course): void {
    const modalRef = this.modalService.open(DeleteCourseComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }
}
