import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ActionsType} from '..';
import {ICardsState} from './types';

export const cardsReducer = (state: ICardsState = {current: [], total: 0}, action: ActionsType): ICardsState => {
	switch( action.type ) {
	case 'NEXT_PAGE_SELECTED':
	case 'PREVIOUS_PAGE_SELECTED':
	case 'CURRENT_CARDS_LOADED':
		return {
			...state,
			current: [...action.cards]
		};
	case 'TOTAL_CARDS_COUNTER_LOADED':
		return {
			...state,
			total: action.total
		};
	default:
		return {...state};
	}
};

const initialState = {current: [], total: 0};

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		CURRENT_CARDS_LOADED: {
			reducer: (state, action: PayloadAction<ActionsType>) => {
				return {...state, current: [...action.payload.cards]};
			}
		}
	}
});