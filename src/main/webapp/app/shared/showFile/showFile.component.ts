import {Component} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'app/models/course.model';
import { Subscription } from 'rxjs'

@Component({
  selector: 'jhi-show-file',
  templateUrl: 'showFile.component.html',
})
export class ShowFileComponent {
  course!: Course;
  courseSubscription?: Subscription;
  showFile: string[] = [];

  constructor(private activeModal: NgbActiveModal ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }
}
