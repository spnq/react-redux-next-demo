import { CardPage } from '../../components/pages/card/CardPage';
import {cardsCollection} from '../../firebase';
import {getDocs, where, query} from 'firebase/firestore';
import {ICard} from '../../components/card-display-list/CardDisplayList';
import Head from 'next/head';
import {AppProps} from 'next/dist/shared/lib/router/router';

export default function Card ({title, description} : AppProps) {

	return (
		<>
			<Head>
				<title>aboba</title>
			</Head>
			{ description && title && <CardPage title={title} description={description} /> }
		</>
	);
}

// SSR
// get on every request
export async function getServerSideProps({params}: {params: {id : string}}) {
	const docRef = query(cardsCollection, where('id', '==', parseInt(params.id)));
	const document = await getDocs(docRef);
	const nextPage = await (await getDocs(query(cardsCollection, where('id', '==', 2)))).docs[0].data();
	const data = await document.docs[0].data() as ICard;
	return {
		props: {
			title: data.title,
			nextPage,
			description: data.description
		}
	};
}


// // SSG
// // get on build
// export async function getStaticProps({params}: {params: {id : number | string}}) {
// 	const docRef = doc(db, 'cards', params.id as string);
// 	const document = await getDoc(docRef);
// 	const data = await document.data() as ICard;
// 	return {
// 		props: {
// 			title: data.title,
// 			description: data.description
// 		}
// 	};
// }

// // need only on build with getStaticProps to get all url paths
// export async function getStaticPaths() {
// 	const collectionRef = collection(db, 'cards');
// 	const data = await getDocs(collectionRef);
// 	const paths = data.docs.map(doc => ({params: {id: doc.id.toString()}}));

// 	return {
// 		fallback: false,
// 		paths
// 	};
// }