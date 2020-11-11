import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from '../store/reducers/auth/auth.actions';
import * as loginUser from '../store/reducers/auth/auth.selectors';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(loginUser.getLoading));
  loaded$: Observable<boolean> = this.store$.pipe(select(loginUser.getLoaded));
  serverError$: Observable<string> = this.store$.pipe(select(loginUser.getServerError));

  serverError = '';

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {email: string, password: string}): void {
    this.store$.dispatch(Login(loginPayload));
  }

}
