import {NEW_SEARCH_PAGE_LOADED} from '../actionTypes';
import {ICard} from '../cards/types';

export interface SearchState {
	currentPage: string;
	cards: ICard[];
}

export type SearchAction = {
	type: typeof NEW_SEARCH_PAGE_LOADED,
	currentPage: string;
	cards: ICard[];
}