import { initializeApp } from 'firebase/app';
import {collection, CollectionReference, DocumentData, getFirestore} from 'firebase/firestore';
import {ICard} from './components/CardDisplayList/CardDisplayList';
import {INotification} from './store/notifications/types';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_PORJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID
};

export const firebase = initializeApp(firebaseConfig);

const firestore = getFirestore(firebase);

const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(firestore, collectionName) as CollectionReference<T>;
};

export const cardsCollection = createCollection<ICard>('cards');
export const notificationCollection = createCollection<INotification>('notifications');
export const themeCollection = createCollection<INotification>('theme');

export default firestore;