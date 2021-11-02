import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { TasksService } from 'app/layouts/courses/tasks/tasks.service';

@Component({
  selector: 'jhi-new-task',
  templateUrl: './newTask.component.html',
})
export class NewTaskComponent {
  createForm = this.fb.group({
    name: [''],
    description: [''],
  });

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private taskService: TasksService) {}

  create(): void {
    this.taskService
      .create({
        name: this.createForm.get('name')!.value,
        description: this.createForm.get('description')!.value,
      })
      .subscribe();
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
