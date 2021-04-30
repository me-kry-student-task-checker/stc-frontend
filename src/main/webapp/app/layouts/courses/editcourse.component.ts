import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'app/core/auth/account.service';
import { CourseService } from './courses.service';
import { Course } from './course.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'jhi-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['../../../content/scss/layout/_editcourse.scss'],
})
export class EditcourseComponent implements OnInit {
  course!: Course;
  editForm = this.fb.group({
    id: [],
    name: [''],
    description: [''],
  });

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private coursesService: CourseService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ course }) => {
      this.course = course;
      this.updateForm(course);
    });
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
    }
  }

  backTo(): void {
    this.location.back();
  }
}
