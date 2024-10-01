import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { flattenMapToArrayAndSortByPrice } from '../../utils/helpers';

const MIN_PROPERTIES = 20
const MAX_PROPERTIES = 150


const propertySchema = z.object({
  uid: z.string().nonempty(),
  address: z.object({
    buildingNumber: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    latitude: z.number(),
    longitude: z.number()
  }),
  date: z.date(),
  price: z.number()
});

type propertyType = z.infer<typeof propertySchema>;

const propertyCache = new Map<string, propertyType>();

const generateProperty = () => {
  const mockProperty = generateMock(propertySchema)
  mockProperty.date = new Date()
  mockProperty.price = parseInt(faker.finance.amount({
    min: 200000,
    max: 1500000
  }))
  mockProperty.address.latitude = faker.location.latitude({
    min: 19.5,
    max: 64.8
  })
  mockProperty.address.longitude = faker.location.longitude({
    min: -161.7,
    max: -68.0
  })
  return mockProperty
}

const app = new Hono()
	.get('/properties', 
    async (c) => {
      const force = c.req.query('force_clear');

      if (force) propertyCache.clear();
      
      if (propertyCache.size < MIN_PROPERTIES) {
        for (let i = 0; i < MIN_PROPERTIES; i++) {
          const mockProperty = generateProperty()
          propertyCache.set(mockProperty.uid, mockProperty)
        }
      }

      const propertiesArry = flattenMapToArrayAndSortByPrice(propertyCache)
      return c.json({ properties: propertiesArry });
	})
	

export default app;
