import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './../../services/firestore/firestore.service';
import { FirebaseuiService } from './../../services/firebaseui/firebaseui.service';
import {
  opacityInOut,
  SlideInRight,
  SlideInLeft,
} from './../../shared/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [opacityInOut, SlideInRight, SlideInLeft],
})
export class LoginComponent implements OnInit, OnDestroy {
  hasLoadedFirebaseUI: boolean = false;
  FirebaseuiSubscription: Subscription;
  FirestoreAuthStateSubscription: Subscription;

  constructor(
    private AngularFireAuth: AngularFireAuth,
    private FirebaseuiService: FirebaseuiService,
    private FirestoreService: FirestoreService,
    private Router: Router
  ) {
    this.initializeFirebaseUI();
    this.checkIfUserIsAlreadyLoggedIn();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.FirestoreAuthStateSubscription?.unsubscribe();
    this.FirebaseuiSubscription?.unsubscribe();
  }

  checkIfUserIsAlreadyLoggedIn() {}

  initializeFirebaseUI() {}

  signInWithGoogle() {}
}
