import {cardsCollection} from '../../firebase';
import {addDoc} from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const {title, description, id} = req.body;
	addDoc(cardsCollection, {title, description, id}).then( () =>
		res.status(201).json({ statusCode: 'CREATED' })
	).catch(error => res.status(400).json({ error }));
};