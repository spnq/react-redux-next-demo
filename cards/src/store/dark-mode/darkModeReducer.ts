import {ActionsType} from '..';

export const updateThemeReducer = (state = false, action: ActionsType): boolean => {
	switch (action.type) {
	case 'DARKMODE_TOGGLED':
		return !state;
	case 'SET_DARKMODE':
		return action.isDarkMode;
	default:
		return state;
	}
};
