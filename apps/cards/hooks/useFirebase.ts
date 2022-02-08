import { useState, useEffect } from 'react';
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, browserSessionPersistence } from 'firebase/auth';
import {firebase} from '../firebase';

interface User {
	email: string;
	uid: string;
}

const formatAuthUser = (user: User) => ({
	uid: user.uid,
	email: user.email
});

export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const authInstance = getAuth(firebase);
	authInstance.setPersistence(browserSessionPersistence);

	const clear = () => {
		setAuthUser(null);
		setLoading(true);
	};

	const signIn = (email: string, password: string) =>
		signInWithEmailAndPassword(authInstance, email, password);

	const create = (email: string, password: string) =>
		createUserWithEmailAndPassword(authInstance ,email, password);

	const signOutWrapper = () => signOut(authInstance).then(clear);

	const authStateChanged = async (authState: User) => {
		console.log(authState);
		if (!authState) {
			setAuthUser(null);
			setLoading(false);
			return;
		}

		setLoading(true);
		const formattedUser = formatAuthUser(authState);
		setAuthUser(formattedUser);    
		setLoading(false);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authInstance, () => authStateChanged);
		return () => unsubscribe();
	}, [authInstance]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(authInstance, () => authStateChanged);
		return () => unsubscribe();
	}, [authInstance]);

	return {
		authUser,
		loading,
		signIn,
		create,
		signOutWrapper
	};
}