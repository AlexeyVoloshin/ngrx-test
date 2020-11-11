import { createReducer, on } from '@ngrx/store';
import { Login, LoginFailed, LoginSuccess } from './auth.actions';

export const AUTH_REDUCER_NODE = 'auth';

export interface AuthData {
  accessToken: string;
}

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: AuthData;
}

const initialState: AuthState = {
  loaded: true,
  loading: false,
  serverError: ''
};

export const authReducer = createReducer(
  initialState,
  on(Login, state => ({
    ...state,
    loading: true
  })),
  on(LoginSuccess, (
    state, {
      type,
    ...authData
  }: {type: string} & AuthData) => ({
    ...state,
    authData,
    loaded: true,
    loading: false,
    serverError: ''
  })),
  on(LoginFailed, (state, {serverError}) => ({
    ...state,
    authData: null,
    loaded: true,
    loading: false,
    serverError
  }))
);
