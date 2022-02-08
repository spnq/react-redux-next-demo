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