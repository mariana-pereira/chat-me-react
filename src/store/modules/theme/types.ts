/**
 * Action types
 */

export enum ThemeTypes {
   APPLY_THEME = '@theme/APPLY_THEME',
 }

export interface ApplyThemeAction {
  type: typeof ThemeTypes.APPLY_THEME
  payload: Theme;
}

/**
  * Data types
  */

export interface Theme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    gray: string;
    background: string;
    text: string;
    primaryText: string;
  },
}

/**
 * State type
 */

export interface ThemeState {
  readonly theme: Theme;
}
