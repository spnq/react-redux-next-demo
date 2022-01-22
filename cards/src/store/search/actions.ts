import {query, orderBy, where, limit, getDocs, endBefore, limitToLast} from 'firebase/firestore';
import {ThunkAction} from 'redux-thunk';
import {cardsCollection} from '../../firebase';
import {NEW_SEARCH_PAGE_LOADED} from '../actionTypes';
import {RootState} from '../store';
import {SearchAction} from './types';

export const loadNewSearchPage = (page: string, title: string): ThunkAction<void, RootState, unknown, SearchAction> => async dispatch => {
	const docRef = query(
		cardsCollection,
		orderBy('title'),
		where('title', '>=', title), 
		limit(3* parseInt(page))
	);
	const document = await getDocs(docRef);
	const lastDoc = document.docs[document.docs.length-1];
	const paginatedRef = query(
		cardsCollection, 
		orderBy('title'),
		where('title', '>=', title), 
		where('title', '<=', title+ '~'),
		endBefore(lastDoc), 
		limitToLast(3));
	const snapshot = await getDocs(parseInt(page) === 1 ? docRef : paginatedRef);
	const cards = await snapshot.docs.map(doc => doc.data());
	dispatch({type: NEW_SEARCH_PAGE_LOADED, currentPage: page, cards});
};
