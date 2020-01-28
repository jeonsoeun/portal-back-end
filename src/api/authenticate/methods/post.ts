import * as Koa from 'koa';
import * as Router from 'koa-router';
import { inputNewMember } from '../../../controller/members';

export const router = new Router();

router.post('register', '/register/:env/:id/:name', register);
router.post('login', '/login/:env/:id', login);

async function register(ctx: Koa.Context): Promise<void> {
  inputNewMember(ctx.params.id, ctx.params.name);

  ctx.status = 200;
  ctx.body = 'register';
}

async function login(ctx: Koa.Context): Promise<void> {}
