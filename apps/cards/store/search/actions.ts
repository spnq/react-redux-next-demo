
import {ThunkAction} from 'redux-thunk';
import {NEW_SEARCH_PAGE_LOADED} from '../actionTypes';
import {RootState} from '../store';
import {SearchAction} from './types';

const SEARCH_FAKE_API = '/api/fake/search';

export const loadNewSearchPage = (page: string, title: string): ThunkAction<void, RootState, unknown, SearchAction> => async dispatch => {
	const req = await fetch(`${SEARCH_FAKE_API}?title=${title}`);
	const cards = await req.json();
	dispatch({type: NEW_SEARCH_PAGE_LOADED, currentPage: page, cards});
};
