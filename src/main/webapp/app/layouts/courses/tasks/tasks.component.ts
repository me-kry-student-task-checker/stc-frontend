import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { Subscription } from 'rxjs';
import { CourseService } from '../courses.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from 'app/layouts/courses/tasks/newTask.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../../../content/scss/layout/_tasks.scss'],
})
export class TasksComponent implements OnInit {
  course!: Course;
  courseSubscription?: Subscription;

  constructor(private courseService: CourseService, private modalService: NgbModal, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ course }) => {
      this.course = course;
    });
  }
  newTask(): void {
    this.modalService.open(NewTaskComponent, { size: 'lg', backdrop: 'static' });
  }
}
