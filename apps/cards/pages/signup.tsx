import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {FormEvent, useState} from 'react';
import {auth} from '../firebase';

function Signup() {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		
		createUserWithEmailAndPassword(auth,email, password)
			.then(authUser => {
				console.log('Success. The user is created in Firebase');
				console.log(authUser);
			})
			.catch(error => {
				// An error occurred. Set error message to be displayed to user
				console.log(error.message);
			});
		console.log({password, email});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={password} onChange={e => setPassword(e.target.value)} type="text" />
				<input value={email} onChange={e => setEmail(e.target.value)} type="text" />
				<button type='submit'>SUBMIT</button>
			</form>
		</div>
	);
}

export default Signup;
