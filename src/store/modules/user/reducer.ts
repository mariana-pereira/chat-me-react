/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { AuthTypes } from '../auth/types';
import { UserState } from './types';

const INITIAL_STATE: UserState = {
  user: {
    id: '',
    name: '',
    email: '',
  },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.user = action.payload.user;
      });
    default:
      return state;
  }
};

export default reducer;
