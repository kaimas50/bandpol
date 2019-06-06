import Koa from 'koa';

const port = 3000;

const app = new Koa();

app.use(
    async (ctx): Promise<void> => {
        ctx.body = 'Hello World';
    },
);

app.listen(
    port,
    (): void => {
        console.log(`server is listening on ${port}`);
    },
);
