import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { Subscription } from 'rxjs';
import { CourseService } from '../courses.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from 'app/layouts/courses/tasks/newTask.component';

@Component({
  selector: 'jhi-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../../../content/scss/layout/_tasks.scss'],
})
export class TasksComponent implements OnInit {
  c: Course[] = [];
  courseSubscription?: Subscription;

  constructor(private courseService: CourseService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.courseSubscription = this.courseService.getAll().subscribe(course => (this.c = course));
  }

  newTask(): void {
    this.modalService.open(NewTaskComponent, { size: 'lg', backdrop: 'static' });
  }
}
