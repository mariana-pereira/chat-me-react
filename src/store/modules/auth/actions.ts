import { action } from 'typesafe-actions';
import { AuthTypes, AuthData } from './types';

export const authRequest = () => action(AuthTypes.AUTH_REQUEST);
