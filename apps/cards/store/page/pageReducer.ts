import {ActionsType} from '..';
import {IPage} from './types';

const initialState: IPage = {
	currentPage: 1,
	firstVisible: {id: 1, title: '', description: ''},
	lastVisible: {id: 1, title: '', description: ''},
} ;

export const updatePageReducer = (state: IPage = initialState, action: ActionsType): IPage => {
	switch (action.type) {
	case 'CURRENT_PAGE_UPDATED':
		return {
			...state,
			currentPage: action.currentPage,
		};
	case 'CURSORS_UPDATED':
		return {
			...state,
			firstVisible: action.firstVisible,
			lastVisible: action.lastVisible,
		};
	case 'NEXT_PAGE_SELECTED':
		return {
			...state,
			currentPage: state.currentPage + 1,
			firstVisible: action.firstVisible,
			lastVisible: action.lastVisible,
		};
	case 'PREVIOUS_PAGE_SELECTED':
		return {
			...state,
			currentPage: state.currentPage - 1,
			firstVisible: action.firstVisible,
			lastVisible: action.lastVisible,
		};
	default:
		return {...state};
	}
};
