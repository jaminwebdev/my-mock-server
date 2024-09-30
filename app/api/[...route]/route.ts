import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { handle } from 'hono/vercel';
import users from './users';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.use('*', requestId());

const routes = app
	.route('/users', users)

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
