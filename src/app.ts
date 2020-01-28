import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';
import { router as api } from './api';
import * as config from 'config';

const PORT = config.get<number>('server.port') || 4000;

const app = new Koa();
const apiRouter = new Router();

apiRouter.get('/', (ctx: { body: string }, next) => {
  ctx.body = 'Here is my home!';
});

apiRouter.use('/api', api.routes());

// 도커 헬스체크(이거 그냥 배껴온거.)
const pingRouter = new Router();
pingRouter.get('/ping', async (ctx) => {
  ctx.status = 200;
});

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
// bodyparser 추가.
app.use(koaBody());

app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
