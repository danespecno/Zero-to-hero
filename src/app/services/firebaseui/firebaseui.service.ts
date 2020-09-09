import { SnackbarService } from "./../snackbar/snackbar.service";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase/app";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseuiService {
  firebaseUIAuthInstance: firebaseui.auth.AuthUI;
  hasLoadedFirebaseUI: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private AngularFireAuth: AngularFireAuth,
    private SnackbarService: SnackbarService,
  ) {}

  initializeFirebaseUI() {
    return this.hasLoadedFirebaseUI;
  }
  signInSuccess = (authResult: any, redirectUrl?: string): boolean => {};
  signInFailure = async (error: firebaseui.auth.AuthUIError) => {};
  uiShown = () => {};

  getFirebaseUIAuthInstance(): Promise<firebaseui.auth.AuthUI> {}
}
