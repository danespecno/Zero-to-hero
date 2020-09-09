import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './../../services/firestore/firestore.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  routerEventSubscription: Subscription;
  navbarText: string = 'Zero-to-Hero: a Firebase Introduction';
  authStateSubscription: Subscription;
  isLoggedIn = false;
  userDisplayName: string;

  constructor(
    private Router: Router,
    private FirestoreService: FirestoreService,
    private AngularFireAuth: AngularFireAuth
  ) {
    this.subscribeToRouterEvents();
    this.subscribeToAuthState();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.routerEventSubscription.unsubscribe();
    this.authStateSubscription.unsubscribe();
  }

  subscribeToRouterEvents() {
    this.routerEventSubscription = this.Router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navbarText = this.getTitle(event.url);
      }
    });
  }

  subscribeToAuthState() {}

  getTitle(url: string): string {
    return url === '/login'
      ? 'Zero-to-Hero: a Firebase Introduction'
      : url === '/todo'
      ? `Welcome to your ToDo List`
      : 'Zero-to-Hero: a Firebase Introduction';
  }

  signOut() {}
}
