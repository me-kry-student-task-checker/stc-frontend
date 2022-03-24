import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course.model';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from '../../tasks/newTask.component';
import { ActivatedRoute } from '@angular/router';
import { TasksListComponent } from '../../tasks/tasksList.component';
import { CourseInviteComponent } from "app/layouts/courses/course-invite/courseInvite.component";

@Component({
  selector: 'jhi-tasks',
  templateUrl: './course.component.html',
  styleUrls: ['../../../../content/scss/layout/course.scss'],
})
export class CourseComponent implements OnInit {
  course!: Course;
  courseSubscription?: Subscription;
  courseId!: Course

  constructor(private courseService: CourseService, private modalService: NgbModal, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ course }) => {
      this.course = course;
    });
  }
  newTask(course: Course): void {
    const modalRef = this.modalService.open(NewTaskComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

  taskList(course: Course): void {
    const modalRef = this.modalService.open(TasksListComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

  courseInvite(courseId: Course): void {
    const modalRef = this.modalService.open(CourseInviteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = courseId;
  }
}
