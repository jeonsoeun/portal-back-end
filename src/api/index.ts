import * as Router from 'koa-router';

export const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Here is API';
});
