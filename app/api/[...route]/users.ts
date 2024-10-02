import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { flattenMapToArrayAndSortByDate } from '../../utils/helpers';
import { userSchema, users, userType } from '@/app/utils/data/users';

const MIN_USERS = 20
const MAX_USERS = 150

const usersCache = new Map<string, userType>();
users.map(user => usersCache.set(user.uid, user))

const app = new Hono()
	.get('/', 
    async (c) => {
      const usersArray = flattenMapToArrayAndSortByDate(usersCache)
      return c.json({ users: usersArray });
	})
  .get('/:uid', async (c) => {
    const { uid } = c.req.param();

    const user = usersCache.get(uid);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    return c.json({ user });
  })
  .get('/reset', async (c) => {
    const usersCache = new Map<string, userType>();
    users.map(user => usersCache.set(user.uid, user))

    const usersArray = flattenMapToArrayAndSortByDate(usersCache)
    return c.json({ users: usersArray });
  })
  .patch('/:uid', 
		zValidator(
			'param',
			z.object({
				uid: z.string().optional()
			})
		),
		zValidator('json', userSchema.partial()),
    async (c) => {
    const { uid } = c.req.valid('param');
		const values = c.req.valid('json');

    if (!uid) {
      return c.json({ error: 'Must provide a unique id' }, 400);
    }
    
    const user = usersCache.get(uid);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    usersCache.set(uid, { ...user, ...values });
    return c.json({ user: usersCache.get(uid) });
  })
  .delete('/:uid', async (c) => {
    const { uid } = c.req.param();
    const user = usersCache.get(uid);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    usersCache.delete(uid);

    return c.json({ message: 'User deleted' });
  })
	

export default app;
