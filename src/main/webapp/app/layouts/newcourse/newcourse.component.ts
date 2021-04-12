import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { CourseService } from 'app/layouts/courses/courses.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['../../../content/scss/layout/_newcourse.scss'],
})
export class NewcourseComponent implements OnInit {
  createForm = this.fb.group({
    id: [1],
    name: [''],
    description: [''],
  });
  constructor(private coursesService: CourseService, private accountService: AccountService, private fb: FormBuilder) {}

  create(): void {
    this.coursesService
      .create({
        id: this.createForm.get('id')!.value,
        name: this.createForm.get('name')!.value,
        description: this.createForm.get('description')!.value,
      })
      .subscribe();
  }

  ngOnInit(): void {}
}
