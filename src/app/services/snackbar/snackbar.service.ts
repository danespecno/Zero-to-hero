import {
  SnackBarTypes,
  SnackBarSuccess,
  SnackBarFailure,
  SnackBarInfo,
} from "./../../shared/models";
import { Injectable, Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "./../../components/snackbar/snackbar.component";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private MatSnackBar: MatSnackBar) {}

  openSnackBar(
    { icon, panelClass, message, action, duration }: SnackBarTypes,
    e?: any
  ) {
    if (e) {
      console.log(e);
    }
    return this.MatSnackBar.openFromComponent(SnackbarComponent, {
      duration: duration,
      data: {
        icon,
        message,
        action,
      },
      panelClass: [panelClass, "text-white"],
    });
  }
  openSuccessSnackBar(message: string = "Success!", duration: number = 3000) {
    return this.openSnackBar(new SnackBarSuccess(message, duration));
  }
  openFailureSnackBar(
    message: string = "Failure!",
    error: any = undefined,
    duration: number = 3000,
  ) {
    return this.openSnackBar(new SnackBarFailure(message, duration), error);
  }
  openInfoSnackBar(message: string, duration: number = 3000) {
    return this.openSnackBar(new SnackBarInfo(message, undefined, duration));
  }
  openConfirmationSnackBar(message: string = 'Are you sure?', action: string = 'Yes', duration: number = 3000) {
    return this.openSnackBar(new SnackBarInfo(message, action, duration));
  }
}
