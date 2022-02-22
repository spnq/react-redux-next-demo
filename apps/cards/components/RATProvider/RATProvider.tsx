import {useState} from 'react';

function RATProvider({children} : {children: React.ReactNode}) {
	const [url, setUrl] = useState('');
	const checkRouter = () => {
		if (typeof window !== 'undefined' && document.location.href !== url) {
			setUrl(document.location.href);
			console.log(document.location.href);
		} return;
	};

	return (
		<>
			{checkRouter()}
			{children}
		</>
	);
}

export default RATProvider;