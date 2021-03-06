import { useMemo } from 'react';
import { Store } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {cardsReducer} from './cards/cardsReducer';
import {updateNotificationsReducer} from './notifications/notificationsReducer';
import {updatePageReducer} from './page/pageReducer';
import {updateThemeReducer} from './dark-mode/darkModeReducer';
import {ActionsType} from '.';
import {searchReducer} from './search/searchReducer';

const rootReducer = combineReducers({
	isDarkMode: updateThemeReducer,
	page: updatePageReducer,
	notifications: updateNotificationsReducer,
	cards: cardsReducer,
	search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>

let store: Store<RootState, ActionsType> | undefined;

function initStore(initialState: RootState): Store<RootState, ActionsType> {
	return configureStore(
		{
			reducer: rootReducer,
			devTools: process.env.NODE_ENV !== 'production',
			preloadedState: initialState
		}
	);
}

export const initializeStore = (preloadedState: RootState = {} as RootState): Store<RootState, ActionsType> => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,   //order of those states matters: in that case preloaded(existed) store will override store from getServerSideProps when possible
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState: RootState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}