import express from 'express';

import { login, createUser, getUser, logout, addCredit, buyAccount, sellAccount } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:userName', getUser);
router.post('/:userInfo', login);
router.post('/logout/:userInfo', logout);
router.post('/addCredit/:userName', addCredit);
router.post('/buyAccount/:userName', buyAccount);
router.post('/sellAccount/:userName', sellAccount);

export default router;