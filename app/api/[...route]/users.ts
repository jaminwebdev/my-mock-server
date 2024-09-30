import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';

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
        const usersArray = [...usersCache.entries()].map(([_, value]) => ({ ...value }));

        return c.json({ users: usersArray });
      }

      if (force) {
        usersCache.clear();
      }

      usersCache.set(mockUser.uid, mockUser);

      const usersArray = [...usersCache.entries()].map(([_, value]) => ({ ...value }));

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
	

export default app;
