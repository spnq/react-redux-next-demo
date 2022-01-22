import {query, orderBy, limit, getDocs, QuerySnapshot} from 'firebase/firestore';
import {ThunkAction} from 'redux-thunk';
import {cardsCollection} from '../../firebase';
import {CURRENT_CARDS_LOADED, TOTAL_CARDS_COUNTER_LOADED} from '../actionTypes';
import {RootState} from '../store';
import {CurrentCardsUpdateAction, ICard, TotalCardsUpdateAction} from './types';

const LIMIT = 3;

export const mapCards = (snapshot: QuerySnapshot<ICard>) => snapshot.docs.map(doc => doc.data());

export const getCards = (): ThunkAction<void,RootState, unknown, CurrentCardsUpdateAction> => async dispatch => {
	const req = query(cardsCollection, orderBy('title'), limit(LIMIT));
	const snapshot = await getDocs(req);
	const cards = mapCards(snapshot);
	dispatch({type: CURRENT_CARDS_LOADED, cards});
};


export const getTotalCards = (): ThunkAction<void,RootState, unknown, TotalCardsUpdateAction> => async dispatch => {
	const total = await (await getDocs(cardsCollection)).docs.length;
	dispatch({type: TOTAL_CARDS_COUNTER_LOADED, total});
};