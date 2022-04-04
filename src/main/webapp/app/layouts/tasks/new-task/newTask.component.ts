import {Component} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { TasksService } from '../tasks.service';
import {Course} from "app/models/course.model";

@Component({
  selector: 'jhi-new-task',
  templateUrl: './newTask.component.html',
})
export class NewTaskComponent {
  course!: Course;
  createForm = this.fb.group({
    name: [''],
    description: [''],
  });

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private taskService: TasksService) {}

  submit(): void {
    this.taskService
      .create({
        id: null,
        courseId: this.course.id,
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
