import reducer, { INITIAL_STATE } from '../../../store/modules/theme/reducer';

import * as themeActions from '../../../store/modules/theme/actions';
import dark from '../../../styles/themes/dark';

describe('Theme reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('APPLY_THEME', () => {
    const state = reducer(INITIAL_STATE, themeActions.applyTheme(dark));

    expect(state.theme.title).toStrictEqual('dark');
  });
});
