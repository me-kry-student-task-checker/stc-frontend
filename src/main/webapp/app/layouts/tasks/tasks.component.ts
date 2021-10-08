import { Component } from '@angular/core';
import { Course } from '../courses/course.model';

@Component({
  selector: 'jhi-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  course?: Course;

  constructor() {}
}
