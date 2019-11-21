import Koa from 'koa';
import serve from 'koa-static';
import { getClientResourcePath } from './utils';

const port = 3000;

const app = new Koa();

app.use(serve(getClientResourcePath()));

app.listen(port, (): void => {
    console.log(`server is listening on ${port} --> http://localhost:3000`);
});
