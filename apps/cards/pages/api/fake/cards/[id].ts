import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../fakeDB.json';

export const getData = (id: number) => data.filter(card => card.id === id)[0];

export default function handler (req: NextApiRequest, res: NextApiResponse) {
	const {id} = req.query;
	res.status(200).json(getData(parseInt(id as string)));
}