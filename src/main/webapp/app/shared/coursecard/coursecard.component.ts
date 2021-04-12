import { Component, OnInit } from '@angular/core';
import { Course } from 'app/layouts/courses/course.model';

@Component({
  selector: 'jhi-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['../../../content/scss/components/_coursecard.scss'],
})
export class CoursecardComponent implements OnInit {
  course: Course | null = null;

  constructor() {}

  ngOnInit(): void {}
}
