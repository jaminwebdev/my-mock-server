import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';
import { faker } from '@faker-js/faker';
import { flattenMapToArrayAndSortByDate } from '../../utils/helpers';

const MIN_TRANSACTIONS = 100
const MAX_TRANSACTIONS = 1500
const MIN_ACCOUNTS = 2
const MAX_ACCOUNTS = 15

const transactionSchema = z.object({
  uid: z.string().nonempty(),
  date: z.date(),
  accountNumber: z.string(),
  transactionType: z.string(),
  amount: z.string(),
});

type transactionType = z.infer<typeof transactionSchema>;

const transactionsCache = new Map<string, transactionType>();

const accountSchema = z.object({
  uid: z.string().nonempty(),
  accountName: z.string(),
  balance: z.number().min(0),
  date: z.date()
});

type accountType = z.infer<typeof accountSchema>;

const accountsCache = new Map<string, accountType>();

const generateAccount = () => {
  const mockAccount = generateMock(accountSchema)
  mockAccount.date = new Date()
  mockAccount.balance = parseFloat(faker.finance.amount({
    min: 100,
    max: 20000
  }))
  return mockAccount
}

const generateTransaction = () => {
  const mockTransaction  = generateMock(transactionSchema);
  mockTransaction.date = new Date()
  mockTransaction.amount = faker.finance.amount({
    min: 0,
    max: 750
  });
  mockTransaction.transactionType = Math.random() < 0.75 ? 'debit' : 'credit';
  if (accountsCache.size <= 0) {
    const mockAccount = generateAccount()
    accountsCache.set(mockAccount.uid, mockAccount);
    mockTransaction.accountNumber = mockAccount.uid
    return mockTransaction
  }
  const randomAccountUid = [...accountsCache.keys()][Math.floor(Math.random() * accountsCache.size)];
  mockTransaction.accountNumber = randomAccountUid;
  return mockTransaction
}

const app = new Hono()
	.get('/transactions', 
    async (c) => {
      const force = c.req.query('force_clear');

      if (force) transactionsCache.clear();
      
      if (transactionsCache.size < MIN_TRANSACTIONS) {
        for (let i = 0; i < MIN_TRANSACTIONS; i++) {
          const mockTransaction = generateTransaction()
          transactionsCache.set(mockTransaction.uid, mockTransaction)
        }
      }

      const transactionsArray = flattenMapToArrayAndSortByDate(transactionsCache)
      return c.json({ transactions: transactionsArray });
	})
  .get('/transactions/:uid', async (c) => {
    const { uid } = c.req.param();

    const transaction = transactionsCache.get(uid);

    if (!transaction) {
      return c.json({ error: 'Transaction not found' }, 404);
    }

    return c.json({ transaction });
  })
  .get('transactions/generate/:count', async (c) => {
    let count = parseInt(c.req.param().count);
    
    if (transactionsCache.size >= MAX_TRANSACTIONS) {
      const transactionsArray = flattenMapToArrayAndSortByDate(transactionsCache)
      return c.json({ transactions: transactionsArray });
    }

    if (count > MAX_TRANSACTIONS) count = MAX_TRANSACTIONS

    for (let i = 0; i <= count; i++) {
      const mockTransaction = generateTransaction();
      transactionsCache.set(mockTransaction.uid, mockTransaction);
    }

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
    const force = c.req.query('force_clear');

    if (force) accountsCache.clear();
    
    if (accountsCache.size < MIN_ACCOUNTS) {
      for (let i = 0; i < MIN_ACCOUNTS; i++) {
        const mockAccount = generateAccount()
        accountsCache.set(mockAccount.uid, mockAccount)
      }
    }

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
  .get('accounts/generate/:count', async (c) => {
    let count = parseInt(c.req.param().count);
    
    if (accountsCache.size >= MAX_ACCOUNTS) {
      const accountsArray = flattenMapToArrayAndSortByDate(accountsCache)
      return c.json({ transactions: accountsArray });
    }

    if (count > MAX_ACCOUNTS) count = MAX_ACCOUNTS

    for (let i = 0; i <= count; i++) {
      const mockAccount = generateAccount();
      accountsCache.set(mockAccount.uid, mockAccount);
    }

    const accountsArray = flattenMapToArrayAndSortByDate(accountsCache)
    return c.json({ accounts: accountsArray });
  })
	

export default app;
