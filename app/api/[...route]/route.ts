import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { handle } from 'hono/vercel';
import users from './users';
import finance from './finance'
import realEstate from './real-estate'

const app = new Hono().basePath('/api');

app.use('*', requestId());

const routes = app
	.route('/users', users)
  .route('/finance', finance)
  .route('/real-estate', realEstate)

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
