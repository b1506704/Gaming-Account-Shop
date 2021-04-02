import express from 'express';

import { getAccount, getAccounts, createAccount, deleteAccount } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccounts);
router.post('/', createAccount);
router.get('/:id', getAccount);
router.delete('/:id', deleteAccount);

export default router;