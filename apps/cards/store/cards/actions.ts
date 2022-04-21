

import {ThunkAction} from 'redux-thunk';

import {CURRENT_CARDS_LOADED, TOTAL_CARDS_COUNTER_LOADED} from '../actionTypes';
import {RootState} from '../store';
import {CurrentCardsUpdateAction, TotalCardsUpdateAction} from './types';

// const LIMIT = 3;
const FAKE_API_CARDS_URL = '/api/fake/cards';


export const getCards = (): ThunkAction<void,RootState, unknown, CurrentCardsUpdateAction> => async dispatch => {
	const req = await fetch(FAKE_API_CARDS_URL);
	const cards = await req.json();
	dispatch({type: CURRENT_CARDS_LOADED, cards});
};


export const getTotalCards = (): ThunkAction<void,RootState, unknown, TotalCardsUpdateAction> => async dispatch => {
	const total = (await (await fetch(FAKE_API_CARDS_URL)).json()).length;
	dispatch({type: TOTAL_CARDS_COUNTER_LOADED, total});
};