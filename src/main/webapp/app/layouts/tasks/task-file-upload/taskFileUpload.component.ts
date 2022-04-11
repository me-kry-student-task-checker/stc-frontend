import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'app/models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'jhi-task-file-upload',
  templateUrl: 'taskFileUpload.component.html',
})
export class TaskFileUploadComponent {
  loading = false;
  file: string[] = [];
  task!: TaskModel;

  constructor(private activeModal: NgbActiveModal, private taskService: TasksService) {}

  onChange(event: any): void {
    for (let i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
  }

  upload(): void {
    this.loading = !this.loading;
    const service = 'TASK';
    this.taskService.uploadFiles(this.file, service, this.task.id).subscribe((event: any) => {
      if (typeof event === 'object') {
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
