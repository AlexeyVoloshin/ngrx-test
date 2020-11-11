import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, AUTH_REDUCER_NODE } from './auth.reducer';

const getFeature = createFeatureSelector<AuthState>(AUTH_REDUCER_NODE); // извлекае корневой элемент

export const getLoading = createSelector(
  getFeature,
  state => state.loading
);

export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
);

export const getServerError = createSelector(
  getFeature,
  state => state.serverError
);

export const getAuthData = createSelector(
  getFeature,
  state => state.authData
);

export const getAccessToken = createSelector(
  getAuthData,
  authData => authData && authData.accessToken
);

export const isAuth = createSelector(
  getAccessToken,
  accessToken => !!accessToken
);

export const isGuest = createSelector(
  isAuth,
  isAuth => !!isAuth
)
