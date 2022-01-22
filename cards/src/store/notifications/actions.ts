import {SET_NOTIFICATIONS, NOTIFICATIONS_LOADED, UPDATE_NOTIFICATIONS} from '../actionTypes';
import {INotification, NotificationAction} from './types';

export const updateNotifications = (notifications: INotification[]): NotificationAction => ({type: UPDATE_NOTIFICATIONS, notifications});

export const setNotifications = (notifications: INotification[]): NotificationAction => ({type: SET_NOTIFICATIONS, notifications});

export const getNotifications = (notifications: INotification[]): NotificationAction  => ({type: NOTIFICATIONS_LOADED, notifications});