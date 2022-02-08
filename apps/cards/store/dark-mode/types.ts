import {DARKMODE_TOGGLED, SET_DARKMODE} from '../actionTypes';

export type DarkModeToggleAction = {
  type: typeof DARKMODE_TOGGLED;
};

export type DarkModeSetAction = {
  type: typeof SET_DARKMODE;
  isDarkMode: boolean;
};
