import type {PageAction} from './page/types';
import type {NotificationAction} from './notifications/types';
import type {DarkModeToggleAction, DarkModeSetAction} from './dark-mode/types';
import type {CardsAction} from './cards/types';
import {SearchAction} from './search/types';
import {UserProfilePhotoAction, UserSettingsAction} from './user/types';

export type ActionsType = PageAction | NotificationAction | DarkModeToggleAction | DarkModeSetAction | CardsAction | SearchAction | UserSettingsAction | UserProfilePhotoAction;