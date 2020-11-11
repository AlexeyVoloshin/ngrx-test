import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, switchMap} from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Login, LoginFailed, LoginSuccess } from '../reducers/auth/auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(Login),
    switchMap(({email, password}) => this.authService.login({
      email,
      password
    }).pipe(
      map(loginSuccessData => LoginSuccess(loginSuccessData)),
      catchError(
        error =>  of(LoginFailed({
            serverError: error.message
          }))

      )
    ))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
