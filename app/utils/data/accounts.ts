import { z } from 'zod';

export const accounts = [
  {
    "uid": "7babb6df-f14c-47bd-8605-cc1192c11337",
    "accountName": "Credit Card Account",
    "balance": 5027.29,
    "date": "2024-10-02T14:52:14.593Z"
  },
  {
    "uid": "06bdc7d3-3341-4abd-819a-d0f58f815f99",
    "accountName": "Money Market Account",
    "balance": 15521.03,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "7a89457d-3fff-41d5-b976-794495b9ceab",
    "accountName": "Investment Account",
    "balance": 13295.83,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "911e3903-0708-44bc-84e3-253a9416c6ce",
    "accountName": "Home Loan Account",
    "balance": 15834.01,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "867b7b02-50b1-4296-b314-a9add5d03037",
    "accountName": "Personal Loan Account",
    "balance": 17605.55,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "724ef492-c336-4dc2-bb6e-ea93651f248a",
    "accountName": "Checking Account",
    "balance": 15889.16,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "8a432f84-f114-4db5-95c3-0d50575845eb",
    "accountName": "Home Loan Account",
    "balance": 5398.52,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "ae40340e-8b2e-488d-ad80-ebbe75113a9c",
    "accountName": "Auto Loan Account",
    "balance": 6086.23,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "85de8e46-db74-4cfe-bc24-6ec6c51e93f9",
    "accountName": "Home Loan Account",
    "balance": 12732.8,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "c4dfbac2-0a92-4fbb-b208-46eac2201a67",
    "accountName": "Home Loan Account",
    "balance": 18215.68,
    "date": "2024-10-02T14:52:33.077Z"
  },
  {
    "uid": "cdf66f7c-35f6-4739-9bf6-9b014016f704",
    "accountName": "Money Market Account",
    "balance": 4938.18,
    "date": "2024-10-02T14:52:33.078Z"
  },
  {
    "uid": "d00f3983-225c-4a03-80ab-0d5e3960fe59",
    "accountName": "Savings Account",
    "balance": 16224.94,
    "date": "2024-10-02T14:52:33.078Z"
  },
  {
    "uid": "ca813245-7e34-4a36-ad4d-32c061143bb3",
    "accountName": "Checking Account",
    "balance": 10238.48,
    "date": "2024-10-02T14:52:33.078Z"
  },
  {
    "uid": "2d3c58c9-2725-4174-bf1c-cfecca72b265",
    "accountName": "Home Loan Account",
    "balance": 10776.54,
    "date": "2024-10-02T14:52:33.078Z"
  },
  {
    "uid": "496398d0-cdc2-49fb-9840-59abad7a2558",
    "accountName": "Money Market Account",
    "balance": 13394.55,
    "date": "2024-10-02T14:52:33.078Z"
  },
  {
    "uid": "19f4b785-af4b-4534-b42f-33175bd72bb6",
    "accountName": "Personal Loan Account",
    "balance": 10441.32,
    "date": "2024-10-02T14:52:33.078Z"
  },
  {
    "uid": "5dcaf3a7-5858-4d83-86a2-20bc1d9e033f",
    "accountName": "Home Loan Account",
    "balance": 10706.7,
    "date": "2024-10-02T14:52:33.078Z"
  }
]

const accountSchema = z.object({
  uid: z.string(),
  accountName: z.string(),
  balance: z.number().min(0),
  date: z.string()
});

export type accountType = z.infer<typeof accountSchema>;
