import * as Router from 'koa-router';

export const router = new Router();

import { router as post } from './methods/post';

router.use(post.routes());
