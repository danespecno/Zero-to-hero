import { LoginAuthGuard } from './services/firestore/login-auth.guard';
import { ToDoComponent } from './components/to-do/to-do.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard],
    data: { animation: 'login' },
  },
  {
    path: 'todo',
    component: ToDoComponent,
    canActivate: [AngularFireAuthGuard],
    data: { animation: 'todo' },
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
