import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { flattenMapToArray } from '../../utils/helpers';

const userSchema = z.object({
  uid: z.string().nonempty(),
  fullName: z.string(),
  email: z.string().email().optional(),
  phoneNumber: z.string().min(10).optional(),
  jobTitle: z.string().optional(),
  address: z.object({
    buildingNumber: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  age: z.number().min(18).max(120),
  dateAdded: z.date().default(new Date()),
});

type userType = z.infer<typeof userSchema>;

const usersCache = new Map<string, userType>();

const app = new Hono()
	.get('/', 
    async (c) => {
      const force = c.req.query('force_clear');

      const mockUser = generateMock(userSchema);

      if (usersCache.size >= 150) {
        const usersArray = flattenMapToArray(usersCache);
        return c.json({ users: usersArray });
      }

      if (force) usersCache.clear();

      usersCache.set(mockUser.uid, mockUser);

      const usersArray = flattenMapToArray(usersCache);
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
  .get('/generate/:count', async (c) => {
    const { count } = c.req.param();

    for (let i = 0; i <= parseInt(count); i++) {
      const mockUser = generateMock(userSchema);
      usersCache.set(mockUser.uid, mockUser);
    }

    const usersArray = flattenMapToArray(usersCache);
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
