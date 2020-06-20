import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { SignInRequestAction } from './types';

import { signInSuccess } from './actions';

export function* signIn(action: SignInRequestAction) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}