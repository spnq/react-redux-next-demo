import {createServer, IncomingMessage, ServerResponse} from 'http';
import page from './index';
import * as reactDom from 'react-dom/server';

const port = 3000;


const requestListener = function (req: IncomingMessage, res: ServerResponse) {
	res.writeHead(200);
	reactDom.renderToNodeStream(page()).pipe(res);
};

const server = createServer(requestListener);

server.listen(port, () => {
	console.log(`Http server app listening on port ${port}`);
});