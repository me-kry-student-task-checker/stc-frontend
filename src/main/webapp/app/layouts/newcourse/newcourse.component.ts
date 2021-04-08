import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { NewCourseService } from 'app/layouts/newcourse/newcourse.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['../../../content/scss/layout/_newcourse.scss'],
})
export class NewcourseComponent implements OnInit {
  createForm = this.fb.group({
    name: [''],
    description: [''],
  });

  constructor(private newcourseService: NewCourseService, private accountService: AccountService, private fb: FormBuilder) {}

  create(): void {
    this.newcourseService.create({
      name: this.createForm.get('name')!.value,
      description: this.createForm.get('description')!.value,
    });
  }

  ngOnInit(): void {}
}
