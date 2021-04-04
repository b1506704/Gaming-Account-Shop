import express from 'express';

import { getAccounts, createAccount, deleteAccount } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccounts);
router.post('/', createAccount);
router.delete('/:id', deleteAccount);

export default router;