import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
<<<<<<< HEAD:src/main/webapp/app/layouts/courses/course-edit/editCourse.component.ts
import { AccountService } from 'app/core/auth/account.service';
import { CourseService } from '../course.service';
=======
import { CourseService } from './course.service';
>>>>>>> 8712c6c (Kurzus szerkesztés frissitve):src/main/webapp/app/layouts/courses/editCourse.component.ts
import { Course } from 'app/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-edit-course',
  templateUrl: './editCourse.component.html',
  styleUrls: ['../../../../content/scss/layout/_editcourse.scss'],
})
export class EditCourseComponent implements OnInit {
  course!: Course;
  editForm = this.fb.group({
    id: [],
    name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(5)]],
    description: ['', Validators.maxLength(220)],
  });

  constructor(
    private fb: FormBuilder,
    private coursesService: CourseService,
    private route: ActivatedRoute,
    private location: Location,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.updateForm(this.course);
  }

  private updateForm(course: Course): void {
    this.editForm.patchValue({
      id: course.id,
      name: course.name,
      description: course.description,
    });
  }

  private updateCourse(course: Course): void {
    course.id = this.editForm.get(['id'])!.value;
    course.name = this.editForm.get(['name'])!.value;
    course.description = this.editForm.get(['description'])!.value;
  }

  edit(): void {
    this.updateCourse(this.course);
    if (this.course.id !== undefined) {
      this.coursesService.edit(this.course).subscribe();
      this.location.back();
    }
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
