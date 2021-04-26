import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'app/core/auth/account.service';
import { CourseService } from 'app/layouts/courses/courses.service';
import { EditCourse } from 'app/layouts/editcourse/editcourse.model';
import { Course } from 'app/layouts/courses/course.model';

@Component({
  selector: 'jhi-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['../../../content/scss/layout/_editcourse.scss'],
})
export class EditcourseComponent implements OnInit {
  editCourse: EditCourse | null = null;
  course!: Course;
  editForm = this.fb.group({
    id: [''],
    name: [''],
    description: [''],
  });

  constructor(private accountService: AccountService, private fb: FormBuilder, private coursesService: CourseService) {}

  edit(): void {
    this.coursesService
      .edit({
        id: this.editForm.get('id')!.value,
        name: this.editForm.get('name')!.value,
        description: this.editForm.get('description')!.value,
      })
      .subscribe();
  }

  ngOnInit(): void {}
}
