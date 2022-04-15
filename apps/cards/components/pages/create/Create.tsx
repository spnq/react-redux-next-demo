import {TextField} from '@mui/material';
import Router from 'next/router';
import {FormEvent, useState} from 'react';
import SubmitForm from '../../submit-form/Submit-form';

export function CreatePage() {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault();
		const generateId = () => {
			return new Date().getTime();
		};
		await fetch('/api/submit-form', {
			method: 'POST',
			body: JSON.stringify({title, description, id: generateId()}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() => Router.push({pathname: '/'})).catch(error => console.log(error));
	};
	return (
		<SubmitForm handleSubmit={handleSubmit} title={'CREATE'} actionName={'CREATE'}>
			<TextField value={title} onChange={e => setTitle(e.target.value)} label="Title" variant="outlined" />
			<TextField value={description} onChange={e => setDescription(e.target.value)} label="Description" variant="outlined" />
		</SubmitForm>
	);
}
  