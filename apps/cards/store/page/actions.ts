// import {ThunkAction} from 'redux-thunk';
// import {ActionsType} from '..';
import {CURRENT_PAGE_UPDATED, 
	// CURSORS_UPDATED, NEXT_PAGE_SELECTED, PREVIOUS_PAGE_SELECTED
} from '../actionTypes';
// import {RootState} from '../store';
import {CurrentPageUpdateAction} from './types';

// const LIMIT = 3;

// export const setCursors = (): ThunkAction<void,RootState, unknown, ActionsType> => async dispatch => {
// 	const req = query(cardsCollection, orderBy('title'), limit(LIMIT));
// 	const snapshot = await getDocs(req);
// 	const firstVisible = snapshot.docs[0].data();
// 	const lastVisible = snapshot.docs[ snapshot.docs.length - 1 ].data();
// 	dispatch({type: CURSORS_UPDATED, firstVisible, lastVisible});
// };

// export const setNextPage = (): ThunkAction<void,RootState, unknown, ActionsType> => async (dispatch, getState: () => RootState) => {
// 	const currentLastVisible = getState().page.lastVisible;
// 	const req = query(cardsCollection, orderBy('id'), startAfter(currentLastVisible.id), limit(LIMIT));
// 	const snapshot = await getDocs(req);
// 	const cards = mapCards(snapshot);
// 	const firstVisible = snapshot.docs[0].data();
// 	const lastVisible = snapshot.docs[snapshot.docs.length-1].data();
// 	dispatch({type: NEXT_PAGE_SELECTED, firstVisible, lastVisible, cards});
// };
// export const setPrevPage = (): ThunkAction<void,RootState, unknown, ActionsType> => async (dispatch, getState: () => RootState) => {
// 	const currentFirstVisible = getState().page.firstVisible;
// 	const req = query(cardsCollection, orderBy('id'), endBefore(currentFirstVisible.id), limitToLast(LIMIT));
// 	const snapshot = await getDocs(req);
// 	const cards = mapCards(snapshot);
// 	const firstVisible = snapshot.docs[0].data();
// 	const lastVisible = snapshot.docs[snapshot.docs.length-1].data();
// 	dispatch({type: PREVIOUS_PAGE_SELECTED, cards, firstVisible, lastVisible});
// };

export const setCurrentPage = (currentPage: number): CurrentPageUpdateAction  => ({type: CURRENT_PAGE_UPDATED, currentPage});
