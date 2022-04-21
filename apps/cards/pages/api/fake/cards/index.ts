import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

	const response = await fetch('https://my-json-server.typicode.com/spnq/fake-api/cards');
	const cards = await response.json();
	res.status(200).json(cards);
}