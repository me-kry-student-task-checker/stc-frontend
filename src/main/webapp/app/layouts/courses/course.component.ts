import { Component, OnInit } from '@angular/core';
import { Course } from 'app/models/course.model';
import { Subscription } from 'rxjs';
import { CourseService } from './course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from './tasks/newTask.component';
import { ActivatedRoute } from '@angular/router';
import { TasksListComponent } from './tasks/tasksList.component';

@Component({
  selector: 'jhi-tasks',
  templateUrl: './course.component.html',
  styleUrls: ['../../../content/scss/layout/course.scss'],
})
export class CourseComponent implements OnInit {
  course!: Course;
  courseSubscription?: Subscription;

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
}
