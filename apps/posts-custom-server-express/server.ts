import express from 'express';
import page from './index';
import * as reactDom from 'react-dom/server';

const port = 3000;

const app = express();

app.get('/', (req, res) => {
	reactDom.renderToNodeStream(page()).pipe(res);
});

app.listen(port, () => {
	console.log(`Express server app listening on port ${port}`);
});