import {Card, CardContent,Typography, TextField, CardActions, Button} from '@mui/material';
import Router from 'next/router';
import React, {FormEvent, useState} from 'react';
import useFirebaseAuth from '../hooks/useFirebase';
import styles from '../styles/App.module.css';

function Login() {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const { signIn } = useFirebaseAuth();

	
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		
		signIn(email, password)
			.then(authUser => {
				console.log('Loged in');
				console.log(authUser);
				Router.push({pathname: '/'});
			})
			.catch(error => {
				console.log(error.message);
			});
		console.log({password, email});
	};
	return (
		<div className={styles.App}>
			<Typography variant="h2" component="h2">
				LOGIN
			</Typography>
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
							<TextField value={password} onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" />
							<TextField value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
						</div>
						<CardActions>
							<Button type='submit' variant="contained">LOGIN</Button>
						</CardActions>
					</CardContent>
				</form>
			</Card>
		</div>
	);
}

export default Login;
