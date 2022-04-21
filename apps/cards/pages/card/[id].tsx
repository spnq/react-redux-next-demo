import { CardPage } from '../../components/pages/card/card-page';
import Head from 'next/head';
import {AppProps} from 'next/dist/shared/lib/router/router';
import {getData} from '../api/fake/cards/[id]';

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
	const data = getData(parseInt(params.id));
	
	return {
		props: {
			title: data.title,
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