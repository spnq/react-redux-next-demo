import {ICard} from '../../components/card-display-list/CardDisplayList';
import {CURSORS_UPDATED, CURRENT_PAGE_UPDATED, NEXT_PAGE_SELECTED, PREVIOUS_PAGE_SELECTED} from '../actionTypes';


export interface IPage {
	lastVisible: ICard;
	firstVisible: ICard;
	currentPage: number;
}


export type CursorsUpdateAction = {
	type: typeof CURSORS_UPDATED;
	firstVisible: ICard,
	lastVisible: ICard,
}

export type CurrentPageUpdateAction = {
	type: typeof CURRENT_PAGE_UPDATED;
	currentPage: number;
}

export type NextPageSelectedAction = {
	type: typeof NEXT_PAGE_SELECTED;
	firstVisible: ICard,
	lastVisible: ICard,
	cards: ICard[]
}

export type PreviousePageSelectedAction = {
	type: typeof PREVIOUS_PAGE_SELECTED;
	firstVisible: ICard,
	lastVisible: ICard,
	cards: ICard[]
}

export type PageAction = CursorsUpdateAction | CurrentPageUpdateAction | NextPageSelectedAction | PreviousePageSelectedAction;
