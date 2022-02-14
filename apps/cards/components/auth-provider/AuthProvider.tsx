import React, { useEffect } from 'react';
import nookies from 'nookies';
import {auth} from '../../firebase';
import {useDispatch} from 'react-redux';
import {setUserSettings} from '../../store/user/actions';

export function AuthProvider({ children }: {children: React.ReactNode}) {
	const dispatch = useDispatch();

	useEffect(() => {
		return auth.onIdTokenChanged(async (user) => {
			if (!user) {
				dispatch(setUserSettings(null));
				nookies.set(undefined, 'token', '', { path: '/' });
			} else {
				const token = await user.getIdToken();
				dispatch(setUserSettings(user));
				nookies.set(undefined, 'token', token, { path: '/' });
			}
		});
	}, [dispatch]);

	// force refresh the token every 10 minutes
	useEffect(() => {
		const handle = setInterval(async () => {
			const user = auth.currentUser;
			if (user) await user.getIdToken(true);
		}, 10 * 60 * 1000);

		// clean up setInterval
		return () => clearInterval(handle);
	}, []);


	return (
		<>{children}</>
	);
}