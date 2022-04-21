import {useRouter} from 'next/router';
import {Card} from 'visual-libs/awesome-lib';

export function CardPage({title, description} : {title: string, description: string}): JSX.Element {
	const router = useRouter();

	return (
		<Card title={title} description={description} backAction={() => router.push({pathname: '/'})} />
	);
}
