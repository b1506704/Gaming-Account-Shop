import express from 'express';

import { getAccount, getAccounts, createAccount } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccounts);
router.post('/', createAccount);
router.get('/:id', getAccount);

export default router;