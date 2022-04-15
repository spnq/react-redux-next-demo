
import {TextField} from '@mui/material';
import Router from 'next/router';
import React, {FormEvent, useState} from 'react';
import useFirebaseAuth from '../../../hooks/useFirebase';
import SubmitForm from '../../submit-form/Submit-form';

export function Login() {
	const [ password, setPassword ] = useState('');
	const [ email, setEmail ] = useState('');

	const {signIn} = useFirebaseAuth();


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

		<SubmitForm handleSubmit={handleSubmit} actionName={'LOGIN'} title={'LOGIN'}>
			<TextField value={password} onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" />
			<TextField value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
		</SubmitForm>);
}
