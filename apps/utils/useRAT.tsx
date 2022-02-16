import {useRouter} from 'next/router';
import {useEffect} from 'react';

export function useRAT () {
	const router = useRouter();

	useEffect(() => {
		// https://git.rakuten-it.com/projects/DUI/repos/dynamic-ui/browse/components-library/utils/tracking/index.ts#4
		const handleComplete = () => {
			console.log('useRAT', document.location.href);
		}; //resetRAL

		router.events.on(
			'routeChangeComplete',
			handleComplete
		);

		return () => {
			router.events.off('routeChangeComplete', handleComplete);
		};
	}, [router]);
}
