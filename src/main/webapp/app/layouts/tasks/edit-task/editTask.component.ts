import {Component, OnInit} from "@angular/core";
import {TaskModel} from "app/models/task.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "app/layouts/tasks/tasks.service";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'jhi-edit-task',
  templateUrl:'editTask.component.html'
})

export class EditTaskComponent implements OnInit {
  task!: TaskModel;
  editForm = this.fb.group({
    id: [],
    name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(5)]],
    description: ['', Validators.maxLength(220)],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private taskService: TasksService,
    private activeModal: NgbActiveModal) {
  }

  ngOnInit():void {
    this.updateForm(this.task)
    }

  private updateForm(task: TaskModel): void {
    this.editForm.patchValue({
      id: task.id,
      name: task.name,
      description: task.description
    });
  }

  private updateTask(task: TaskModel):void {
    task.id = this.editForm.get(['id'])!.value;
    task.name = this.editForm.get(['name'])!.value;
    task.description = this.editForm.get(['description'])!.value;
  }

  edit(): void {
    this.updateTask(this.task)
    if (this.task.id !== undefined){
      this.taskService.edit(this.task).subscribe();
      this.activeModal.close();
    }
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
