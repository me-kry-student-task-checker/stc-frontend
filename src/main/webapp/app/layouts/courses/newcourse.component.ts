import { Component } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { CourseService } from './courses.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'jhi-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['../../../content/scss/layout/_newcourse.scss'],
})
export class NewcourseComponent {
  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(5)]],
    description: ['', Validators.maxLength(220)],
  });

  constructor(
    private coursesService: CourseService,
    private accountService: AccountService,
    private fb: FormBuilder,
    private location: Location
  ) {}

  create(): void {
    this.coursesService
      .create({
        name: this.createForm.get('name')!.value,
        description: this.createForm.get('description')!.value,
      })
      .subscribe();
    this.location.back();
  }

  backTo(): void {
    this.location.back();
  }
}
