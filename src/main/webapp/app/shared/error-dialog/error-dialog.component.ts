import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'jhi-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['../../../content/scss/layout/_error-dialog.scss'],
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; status?: number }
  ) {}
}
