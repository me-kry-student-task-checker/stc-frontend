import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../course.service';
import { Course } from 'app/models/course.model';

@Component({
  selector: 'jhi-course-file-upload',
  templateUrl: 'courseFileUpload.component.html',
})
export class CourseFileUploadComponent {
  loading = false;
  file: string[] = [];
  course!: Course;

  constructor(private activeModal: NgbActiveModal, private courseService: CourseService) {}

  onChange(event: any): void {
    for (let i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
  }

  upload(): void {
    this.loading = !this.loading;
    const service = 'COURSE';
    this.courseService.uploadFiles(this.file, service, this.course.id).subscribe((event: any) => {
      if (typeof event === 'object') {
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
