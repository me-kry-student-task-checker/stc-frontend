import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'app/models/course.model';

@Component({
  selector: 'jhi-newcourse',
  templateUrl: './newCourse.component.html',
})
export class NewCourseComponent {
  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(5)]],
    description: ['', Validators.maxLength(220)],
  });
  cardCourse: Course[] = [];

  constructor(private activeModal: NgbActiveModal, private coursesService: CourseService, private fb: FormBuilder) {}

  create(): void {
    this.coursesService
      .create({
        name: this.createForm.get('name')!.value,
        description: this.createForm.get('description')!.value,
      })
      .subscribe();
    this.activeModal.close();
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
