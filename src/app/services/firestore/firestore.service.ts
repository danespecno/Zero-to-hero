import { Router } from '@angular/router';
import { SnackbarService } from "./../snackbar/snackbar.service";
import { ToDoCollection } from "./../../shared/models";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  currentAuthState: firebase.User;
  toDoSubscription: Subscription;
  toDos: ToDoCollection;
  // Manually Set
  saveOnChange: boolean = false;
  persistenceStrategy: firebase.auth.Auth.Persistence =
    firebase.auth.Auth.Persistence.LOCAL;

  constructor(
    private AngularFireAuth: AngularFireAuth,
    private AngularFirestore: AngularFirestore,
    private SnackbarService: SnackbarService,
    private Router: Router,
  ) {
    this.setPersistenceMethod();
    this.subscribeToAuthState();
  }

  //#region Firebase Authentication
  setPersistenceMethod() {}

  subscribeToAuthState() {}

  signInWithGoogle(redirectUrl: string = "/todo") {}

  signOut(redirectUrl: string = "/login") {}
  //#endregion

  //#region Firestore
  subscribeToFirestoreCollection(user: firebase.User) {}

  getTodo(header: string, uid: string) {}

  addToDoHeader(header: string) {}

  removeToDoHeader(header: string) {}

  addToDo(header: string, text: string) {}

  removeToDo(header: string, uid: string) {}

  toggleToDoIsComplete(header: string, uid: string) {}

  removeCompletedToDos() {}

  handleSave() {}
  saveChanges() {}
  //#endregion
}
