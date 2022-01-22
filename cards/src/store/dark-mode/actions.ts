import {doc, getDoc} from 'firebase/firestore';
import {ThunkAction} from 'redux-thunk';
import {ActionsType} from '..';
import firestore from '../../firebase';
import {DARKMODE_TOGGLED, SET_DARKMODE} from '../actionTypes';
import {RootState} from '../store';
import {DarkModeToggleAction} from './types';

export const toggleDarkMode = (): DarkModeToggleAction => ({type: DARKMODE_TOGGLED});

export const setDarkMode = (): ThunkAction<void,RootState, unknown, ActionsType> => async dispatch => {
	
	const document = doc(firestore, 'theme', 'i4rvUCzDwhn98drBrAkp');
	const isDarkMode = await (await getDoc(document))?.data()?.isDarkMode;
	dispatch({isDarkMode, type: SET_DARKMODE});
};