import {Button, Card, CardActions, CardContent, TextField} from '@mui/material';
import {addDoc} from 'firebase/firestore';
import {FormEvent, useState} from 'react';
import Router from 'next/router';
import Head from 'next/head';
import {cardsCollection} from '../firebase';

export default function SubmitForm (): JSX.Element {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		const generateId = () => {
			return new Date().getTime();
		};
		addDoc(cardsCollection, {title, description, id: generateId()});
		Router.push({
			pathname: '/'
		});
	};
  

	return (
		<div style={{
			maxHeight: '1200px'
		}}>
			{typeof window === 'undefined' ? '' : console.log('submit-form')}
			<Head>
				<title>boba</title>
				<meta property="og:title" content="Page title" key="title" />
			</Head>
			<h2>Create</h2>
			<Card sx={{ minWidth: 275 }}>
				<form onSubmit={handleSubmit}>
					<CardContent style={{flexDirection: 'column'}}>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-evenly',
							minHeight: '132px',
							marginBottom: '8px'
						}}>
							<TextField value={title} onChange={e => setTitle(e.target.value)} label="Title" variant="outlined" />
							<TextField value={description} onChange={e => setDescription(e.target.value)} label="Description" variant="outlined" />
						</div>
						<CardActions>
							<Button type='submit' variant="contained">Submit</Button>
						</CardActions>
					</CardContent>
				</form>
			</Card>
		</div>
	);
}
