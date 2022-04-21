import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../fakeDB.json';

export const getData = (query: string) => data.filter(card => card.title.includes(query));

export default function handler (req: NextApiRequest, res: NextApiResponse) {
	const {query} = req.query;
	console.log(query);
	res.status(200).json(getData(query as string));
}