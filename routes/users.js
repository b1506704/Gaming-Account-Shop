import express from 'express';

import { login, getUsers, createUser, logout, addCredit, buyAccount } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/:userInfo', login);
router.post('/logout/:userInfo', logout);
router.post('/addCredit/:userName', addCredit);
router.post('/buyAccount/:userName', buyAccount);

export default router;