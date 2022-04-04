import {Component} from "@angular/core";
import {TaskModel} from "app/models/task.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TasksService} from "app/layouts/tasks/tasks.service";


@Component({
  selector: 'jhi-delete-task',
  templateUrl: 'deleteTask.component.html',
})

export class DeleteTaskComponent {
  task!: TaskModel;

  constructor(private activeModal: NgbActiveModal, private taskService: TasksService) {
  }

  confirmTaskDelete(id: number): void {
    this.taskService.delete(id).subscribe(() => {
      this.activeModal.close();
    })
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
