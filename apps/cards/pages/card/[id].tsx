import {Button, Paper, TextField, Typography} from '@mui/material';
import {cardsCollection} from '../../firebase';
import {getDocs, where, query} from 'firebase/firestore';
import {useRouter} from 'next/router';
import {ICard} from '../../components/CardDisplayList/CardDisplayList';
import Head from 'next/head';
import {AppProps} from 'next/dist/shared/lib/router/router';
import styles from './Card.module.css';

export default function CardPage ({title, description} : AppProps) {
	const router = useRouter();

	return (
		<div className={styles.card}>
			<Head>
				<title>aboba</title>
			</Head>
			{ description &&
			<Paper sx={{ minWidth: 350, minHeight: 250, padding: 8 }} elevation={3}>
				<Typography variant="h3" component="h3">
					{title}
				</Typography>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					minHeight: '250px',
					marginBottom: '10px'
				}}>
					<TextField disabled value={title} label="Title" variant="outlined" />
					<TextField disabled value={description} label="Description" variant="outlined" />
				</div>
				<div style={{
					display: 'flex',
					justifyContent: 'space-evenly'
				}}>
					<Button variant="contained" onClick={() => router.push({pathname: '/'})} >BACK</Button>
				</div>
			</Paper>
			}
		</div>
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