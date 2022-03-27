import { Component, OnInit } from '@angular/core';

import { Account } from 'app/core/user/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';
import { Course } from 'app/models/course.model';
import { CourseDeleteComponent } from '../course-delete/courseDelete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCourseComponent } from './newCourse.component';

@Component({
  selector: 'jhi-courses',
  templateUrl: './courseList.component.html',
  styleUrls: ['../../../../content/scss/layout/_courses.scss'],
})
export class CourseListComponent implements OnInit {
  account: Account | null = null;
  cardCourse: Course[] = [];
  authSubscription?: Subscription;
  courseSubscription?: Subscription;

  constructor(private accountService: AccountService, private courseService: CourseService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.courseSubscription = this.courseService.getAll().subscribe(course => (this.cardCourse = course));
  }

  newCourse(): void {
    const modalRef = this.modalService.open(NewCourseComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance;
  }

  deleteCourse(course: Course): void {
    const modalRef = this.modalService.open(CourseDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }
}
