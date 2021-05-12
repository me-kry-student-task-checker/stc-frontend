import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorDialogService } from '../../shared/error-dialog/error-dialog.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService, private zone: NgZone) {}

  // eslint-disable-next-line @typescript-eslint/tslint/config
  // tslint:disable-next-line:typedef
  handleError(error: Error) {
    this.zone.run(() => this.errorDialogService.openDialog(error.message || 'Undefined client error'));

    console.error('Error from global error handler', error);
  }
}
