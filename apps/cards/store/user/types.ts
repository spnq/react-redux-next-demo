import {User} from 'firebase/auth';
import {USER_SETTINGS_LOADED, USER_PHOTO_LOADED} from '../actionTypes';

export interface UserState {
	settings: User | null;
}

export type UserSettingsAction = {
	type: typeof USER_SETTINGS_LOADED,
	settings: User;
}

export type UserProfilePhotoAction = {
	type: typeof USER_PHOTO_LOADED,
	photoURL: string;
}