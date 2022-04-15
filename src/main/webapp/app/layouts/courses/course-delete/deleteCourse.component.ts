import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from '../../../models/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'jhi-delete-course',
  templateUrl: './deleteCourse.component.html',
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
