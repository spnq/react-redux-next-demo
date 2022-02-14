import {ActionsType} from '..';
import {UserState} from './types';

export const userReducer = (state: UserState = {settings: null}, action: ActionsType) => {
	switch (action.type) {
	case 'USER_SETTINGS_LOADED':
		return {
			...state,
			settings: action.settings
		};
	case 'USER_PHOTO_LOADED':
		return {
			...state,
			settings: {
				...state.settings,
				photoURL: action.photoURL
			}
		};
	default:
		return {...state};
	}
};