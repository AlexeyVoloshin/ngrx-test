import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[AUTH] login',
  props<{ email: string, password: string }>());

export const LoginSuccess = createAction(
  '[AUTH] login success',
  props<{accessToken: string}>()
);

export const LoginFailed = createAction(
  '[AUTH] login failed',
  props<{serverError: string}>()
);

