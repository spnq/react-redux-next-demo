import {SearchAction, SearchState} from './types';

const initialState: SearchState = {
	currentPage: '1',
	cards: [{id: 1, title: '', description: ''}]
};

export const searchReducer = (state: SearchState = initialState, action: SearchAction) => {
	switch (action.type) {
	case 'NEW_SEARCH_PAGE_LOADED':
		return {
			currentPage: action.currentPage,
			cards: [...action.cards]
		};
	default:
		return {...state};
	}
};