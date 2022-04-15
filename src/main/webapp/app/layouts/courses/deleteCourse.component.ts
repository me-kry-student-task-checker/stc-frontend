import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'app/models/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'jhi-delete-course',
<<<<<<<< HEAD:src/main/webapp/app/layouts/courses/course-delete/courseDelete.component.ts
  templateUrl: './courseDelete.component.html',
  styleUrls: ['../../../../content/scss/layout/_delete-course.scss'],
========
  templateUrl: './deleteCourse.component.html',
  styleUrls: ['../../../content/scss/layout/_delete-course.scss'],
>>>>>>>> 8712c6c (Kurzus szerkesztés frissitve):src/main/webapp/app/layouts/courses/deleteCourse.component.ts
})
export class DeleteCourseComponent {
  course?: Course;

  constructor(private activeModal: NgbActiveModal, private courseService: CourseService) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.courseService.delete(id).subscribe(() => {
      this.activeModal.close();
      window.location.reload();
    });
  }
}
