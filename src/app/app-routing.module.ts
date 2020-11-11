import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'auth/login', component: UserAuthComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
