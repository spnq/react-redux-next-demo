import {ActionsType} from '..';
import {INotification} from './types';


export const updateNotificationsReducer = (state: INotification[] = [], action: ActionsType) => {
	switch (action.type) {
	case 'SET_NOTIFICATIONS': 
		return [
			...action.notifications
		];
	case 'NOTIFICATIONS_LOADED':
		return [...state];
	default:
		return [...state];
	}
};