import * as Router from 'koa-router';
import { router as authenticate } from './authenticate';

export const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Here is API';
});

router.use(authenticate.routes());
