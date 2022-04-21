import {ThunkAction} from 'redux-thunk';
import {ActionsType} from '..';
import {DARKMODE_TOGGLED, SET_DARKMODE} from '../actionTypes';
import {RootState} from '../store';
import {DarkModeToggleAction} from './types';

const FAKE_API_IS_DARK_MODE_URL = '/api/fake/theme';

export const toggleDarkMode = (): DarkModeToggleAction => ({type: DARKMODE_TOGGLED});

export const setDarkMode = (): ThunkAction<void,RootState, unknown, ActionsType> => async dispatch => {
	const {isDarkMode} = await (await fetch(FAKE_API_IS_DARK_MODE_URL)).json();
	dispatch({isDarkMode, type: SET_DARKMODE});
};