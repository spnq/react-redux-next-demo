import {CURRENT_CARDS_LOADED, TOTAL_CARDS_COUNTER_LOADED} from '../actionTypes';

export interface ICard {
  id?: number | string;
  title: string;
  description: string;
}

export interface ICardsState {
	current: ICard[];
	total: number;
}

export type CurrentCardsUpdateAction = {
	type: typeof CURRENT_CARDS_LOADED;
	cards: ICard[];
}

export type TotalCardsUpdateAction = {
	type: typeof TOTAL_CARDS_COUNTER_LOADED;
	total: number;
}

export type CardsAction = TotalCardsUpdateAction | CurrentCardsUpdateAction
