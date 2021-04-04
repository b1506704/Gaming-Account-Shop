import express from 'express';

import { getAccounts, createAccount, deleteAccount, updateAccount } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccounts);
router.post('/', createAccount);
router.post('/updateAccount/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;