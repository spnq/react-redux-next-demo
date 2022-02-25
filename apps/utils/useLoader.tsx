import {useRouter} from 'next/router';
import {useEffect} from 'react';
import NProgress from 'nprogress';

export const useLoader = (
	isActive = true,
	handleStart = () => NProgress.start(),
	handleComplete = () => NProgress.done(),
	handleError = () => NProgress.done()
): string[] => {
	const router = useRouter();

	useEffect(() => {

		if (isActive) {
			router.events.on('routeChangeStart', handleStart);
			router.events.on('routeChangeComplete', handleComplete);
			router.events.on('routeChangeError', handleError);

			return () => {
				router.events.off('routeChangeStart', handleStart);
				router.events.off('routeChangeComplete', handleComplete);
				router.events.off('routeChangeError', handleError);
			};
		}
	}, [router, handleStart, handleComplete, handleError, isActive]);

	return [router.route];
};
