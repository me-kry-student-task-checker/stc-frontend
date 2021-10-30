import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-new-task',
  templateUrl: './newTask.component.html',
})
export class NewTaskComponent {
  createForm = this.fb.group({
    name: [''],
    description: [''],
  });

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) {}

  newTask(): void {}

  cancel(): void {
    this.activeModal.dismiss();
  }
}
