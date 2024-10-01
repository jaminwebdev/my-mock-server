import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { flattenMapToArrayAndSortByDate } from '../../utils/helpers';

const userSchema = z.object({
  uid: z.string().nonempty(),
  fullName: z.string(),
  displayName: z.string(),
  avatar: z.string(),
  image: z.string(),
  bio: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  jobTitle: z.string(),
  jobType: z.string(),
  company: z.string(),
  address: z.object({
    buildingNumber: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  age: z.number().min(18).max(120),
  gender: z.string(),
  date: z.date(),
  favoriteSong: z.string(),
});

type userType = z.infer<typeof userSchema>;

const usersCache = new Map<string, userType>();

const generateUser = () => {
  const mockUser = generateMock(userSchema, {
    stringMap:{
      favoriteSong: () => faker.music.songName(),
      avatar: () => faker.image.avatar()
    }
  });
  mockUser.date = new Date()
  return mockUser
}

const app = new Hono()
	.get('/', 
    async (c) => {
      const force = c.req.query('force_clear');
      
      if (usersCache.size >= 150) {
        const usersArray = flattenMapToArrayAndSortByDate(usersCache)
        return c.json({ users: usersArray });
      }

      if (force) usersCache.clear();

      const mockUser = generateUser()

      usersCache.set(mockUser.uid, mockUser);

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
  .get('/generate/:count', async (c) => {
    const { count } = c.req.param();

    if (usersCache.size >= 150) {
      const usersArray = flattenMapToArrayAndSortByDate(usersCache)
      return c.json({ users: usersArray });
    }

    for (let i = 0; i <= parseInt(count); i++) {
      const mockUser = generateUser();
      usersCache.set(mockUser.uid, mockUser);
    }

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
