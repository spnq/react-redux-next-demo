
import {TextField} from '@mui/material';
import {FormEvent, useState} from 'react';
import {SubmitForm} from 'visual-libs/awesome-lib';
// import Router from 'next/router';

export function Login() {
	const [ password, setPassword ] = useState('');
	const [ email, setEmail ] = useState('');



	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		// signIn(email, password)
		// 	.then(authUser => {
		// 		console.log('Loged in');
		// 		console.log(authUser);
		// 		Router.push({pathname: '/'});
		// 	})
		// 	.catch(error => {
		// 		console.log(error.message);
		// 	});
		// console.log({password, email});
	};
	return (

		<SubmitForm handleSubmit={handleSubmit} actionName={'LOGIN'} title={'LOGIN'}>
			<TextField value={password} onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" />
			<TextField value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
		</SubmitForm>);
}
