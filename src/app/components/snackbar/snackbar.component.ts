import {
  SnackBarTypes,
  SnackBarIconTypes,
  SnackBarIconClass,
} from "./../../shared/models";
import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent {
  icon: SnackBarIconTypes;
  message: string;
  action: string;

  constructor(
    @Inject(MatSnackBarRef) public MatSnackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: Pick<SnackBarTypes, 'icon' | 'message' | 'action'>
    ) {
    this.icon = data.icon;
    this.message = data.message;
    this.action = data.action;
  }

  onActionClick() {
    this.MatSnackBarRef.dismissWithAction();
  }
}
