import {User} from 'firebase/auth';
import {UserProfilePhotoAction, UserSettingsAction} from './types';

export const setUserProfilePhoto = (photoURL: string): UserProfilePhotoAction => ({type: 'USER_PHOTO_LOADED', photoURL});
export const setUserSettings = (settings: User): UserSettingsAction => ({type: 'USER_SETTINGS_LOADED', settings});