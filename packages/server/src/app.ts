import Koa from 'koa';
import { createReadStream } from 'fs';
import { appendRootPath } from './utils';

const port = 3000;

const app = new Koa();

app.use(
    async (ctx): Promise<void> => {
        ctx.type = 'html';
        ctx.body = createReadStream(appendRootPath('packages/client/index.html'));
    },
);

app.listen(port, (): void => {
    console.log(`server is listening on ${port} --> http://localhost:3000`);
});
