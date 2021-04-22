import { Component, OnInit } from '@angular/core';

import { Account } from 'app/core/user/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { Subscription } from 'rxjs';
import { CourseService } from 'app/layouts/courses/courses.service';
import { Course } from 'app/layouts/courses/course.model';

@Component({
  selector: 'jhi-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../../../content/scss/layout/_courses.scss'],
})
export class CoursesComponent implements OnInit {
  account: Account | null = null;
  cardcourse: Course[] = [];
  authSubscription?: Subscription;
  courseSubscription?: Subscription;
  swaggerEnabled?: boolean;
  inProduction?: boolean;

  constructor(private accountService: AccountService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.courseSubscription = this.courseService.getAll().subscribe(course => (this.cardcourse = course));
  }
}
