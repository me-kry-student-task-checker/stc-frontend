import { Component, OnInit } from '@angular/core';
import { Course } from '../courses/course.model';
import { Subscription } from 'rxjs';
import { CourseService } from 'app/layouts/courses/courses.service';

@Component({
  selector: 'jhi-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../../content/scss/layout/_tasks.scss'],
})
export class TasksComponent implements OnInit {
  c: Course[] = [];
  courseSubscription?: Subscription;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseSubscription = this.courseService.getAll().subscribe(course => (this.c = course));
  }
}
