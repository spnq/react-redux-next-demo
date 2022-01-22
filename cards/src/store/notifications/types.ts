import {NOTIFICATIONS_LOADED, SET_NOTIFICATIONS, UPDATE_NOTIFICATIONS} from '../actionTypes';


type NotificationsActionType = typeof SET_NOTIFICATIONS | typeof NOTIFICATIONS_LOADED | typeof UPDATE_NOTIFICATIONS;


export interface INotification {
	id: number;
	message: string;
}

export type NotificationAction = {
  type: NotificationsActionType;
  notifications: INotification[];
};
