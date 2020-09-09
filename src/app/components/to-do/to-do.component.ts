import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { AddHeaderComponent } from './add-header/add-header.component';
import { SnackbarService } from './../../services/snackbar/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from './../../services/firestore/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  get toDos() {
    return this.FirestoreService.toDos;
  }
  FirestoreAuthStateSubscription: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private Location: Location,
    private SnackbarService: SnackbarService,
    private FirestoreService: FirestoreService,
    private MatDialog: MatDialog,
    private AngularFireAuth: AngularFireAuth,
    private Router: Router
  ) {
    this.checkForAndRemoveQueryParams();
    this.checkIfUserIsLoggedOut();
  }

  ngOnInit(): void {}

  checkIfUserIsLoggedOut() {}

  checkForAndRemoveQueryParams() {
    if (this.ActivatedRoute.snapshot.queryParams['fromRedirect']) {
      this.Location.replaceState('todo');
      this.SnackbarService.openSuccessSnackBar('Successfully Signed In');
    }
  }

  addHeader() {}

  removeHeader(header: string) {}

  addToDo(header: string) {}

  removeToDo(header: string, uid: string) {}

  toggleToDoIsComplete(header: string, uid: string) {}

  removeCompletedToDos() {}
}
