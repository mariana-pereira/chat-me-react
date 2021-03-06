/* eslint-disable implicit-arrow-linebreak */
import { action } from 'typesafe-actions';
import { AuthTypes, Credentials } from './types';
import { User } from '../user/types';

export const signInRequest = (credentials: Credentials) =>
  action(AuthTypes.SIGN_IN_REQUEST, credentials);

export const signInSuccess = (token: string, user: User) =>
  action(AuthTypes.SIGN_IN_SUCCESS, { token, user });

export const signUpRequest = (credentials: Credentials) =>
  action(AuthTypes.SIGN_UP_REQUEST, credentials);

export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);
