import express from 'express';

import { login, getUsers, createUser, logout } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/:userInfo', login);
router.post('/logout/:userInfo', logout);

export default router;