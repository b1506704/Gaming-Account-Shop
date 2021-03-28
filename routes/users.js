import express from 'express';

import { getUser, getUsers, createUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

export default router;