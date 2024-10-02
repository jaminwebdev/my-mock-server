import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { flattenMapToArrayAndSortByDate } from '../../utils/helpers';

import { transactions, categories, transactionType, transactionSchema } from '@/app/utils/data/transactions';
import { accounts, accountType } from '@/app/utils/data/accounts';

const transactionsCache = new Map<string, transactionType>();
transactions.map(tx => transactionsCache.set(tx.uid, tx))

const accountsCache = new Map<string, accountType>();
accounts.map(account => accountsCache.set(account.uid, account))

const app = new Hono()
	.get('/transactions', 
    async (c) => {
      let sortedTransactionsArray = flattenMapToArrayAndSortByDate(transactionsCache)
      return c.json({ transactions: sortedTransactionsArray });
	})
  .get('/transactions/:uid', async (c) => {
    const { uid } = c.req.param();

    const transaction = transactionsCache.get(uid);

    if (!transaction) {
      return c.json({ error: 'Transaction not found' }, 404);
    }

    return c.json({ transaction });
  })
  .get('transactions/reset', async (c) => {
    transactions.map(tx => transactionsCache.set(tx.uid, tx))

    const transactionsArray = flattenMapToArrayAndSortByDate(transactionsCache)
    return c.json({ transactions: transactionsArray });
  })
  .patch('/transactions/:uid', 
		zValidator(
			'param',
			z.object({
				uid: z.string().optional()
			})
		),
		zValidator('json', transactionSchema.partial()),
    async (c) => {
    const { uid } = c.req.valid('param');
		const values = c.req.valid('json');

    if (!uid) {
      return c.json({ error: 'Must provide a unique id' }, 400);
    }
    
    const transaction = transactionsCache.get(uid);

    if (!transaction) {
      return c.json({ error: 'User not found' }, 404);
    }

    transactionsCache.set(uid, { ...transaction, ...values });
    return c.json({ transaction: transactionsCache.get(uid) });
  })
  .delete('/transactions/:uid', async (c) => {
    const { uid } = c.req.param();
    const transaction = transactionsCache.get(uid);

    if (!transaction) {
      return c.json({ error: 'User not found' }, 404);
    }

    transactionsCache.delete(uid);

    return c.json({ message: 'Transaction deleted' });
  })
  .get('/accounts', async (c) => {
    const accountsArray = flattenMapToArrayAndSortByDate(accountsCache)
    return c.json({ accounts: accountsArray });
  })
  .get('/accounts/:uid', async (c) => {
    const { uid } = c.req.param();

    const account = accountsCache.get(uid);

    if (!account) {
      return c.json({ error: 'Account not found' }, 404);
    }

    return c.json({ account });
  })
  .get('accounts/reset', async (c) => {
    accounts.map(account => accountsCache.set(account.uid, account))
    const accountsArray = flattenMapToArrayAndSortByDate(accountsCache)
    return c.json({ accounts: accountsArray });
  })
	

export default app;
