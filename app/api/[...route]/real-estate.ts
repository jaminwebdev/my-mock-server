import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { flattenMapToArrayAndSortByPrice } from '../../utils/helpers';
import { properties, propertyType, propertySchema } from '@/app/utils/data/properties';


const propertyCache = new Map<string, propertyType>();
properties.map(property => propertyCache.set(property.uid, property))

const app = new Hono()
	.get('/properties', 
    async (c) => {
      const force = c.req.query('force_clear');
      const propertiesArry = flattenMapToArrayAndSortByPrice(propertyCache)
      return c.json({ properties: propertiesArry });
	})
	

export default app;
