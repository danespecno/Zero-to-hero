// #region Firestore Models
export interface ToDoCollection {
  [header: string]: ToDo[];
}
export interface ToDo {
  text: string;
  isComplete: boolean;
  uid: string;
}
// #endregion

// #region SnackBar
class SnackBarBaseModel {
  icon: SnackBarIconTypes;
  panelClass: SnackBarIconClass;
  message: string;
  action: string;
  duration: number = 3000;
  constructor(
    icon: SnackBarIconTypes,
    panelClass: SnackBarIconClass,
    message: string,
    action: string = undefined,
    duration: number = 3000
  ) {
    this.icon = icon;
    this.panelClass = panelClass;
    this.message = message;
    this.action = action;
    this.duration = duration;
  }
}
export class SnackBarSuccess extends SnackBarBaseModel {
  constructor(message: string = 'Success!', duration: number = 3000) {
    super(
      'check_circle',
      'bg-success',
      message || 'Success!',
      undefined,
      duration || 3000
    );
  }
}
export class SnackBarFailure extends SnackBarBaseModel {
  constructor(message: string = 'Failure!', duration: number = 3000) {
    super(
      'cancel',
      'bg-danger',
      message || 'Failure!',
      undefined,
      duration || 3000
    );
  }
}
export class SnackBarInfo extends SnackBarBaseModel {
  constructor(
    message: string,
    action: string = undefined,
    duration: number = 3000
  ) {
    super('info', 'bg-primary', message, action, duration || 3000);
  }
}
export type SnackBarTypes = SnackBarSuccess | SnackBarFailure | SnackBarInfo;
export type SnackBarIconTypes = 'check_circle' | 'cancel' | 'info';
export type SnackBarIconClass = 'bg-success' | 'bg-danger' | 'bg-primary';
// #endregion
