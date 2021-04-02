import express from 'express';

import { getCards, createCard, deleteCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:id', deleteCard);

export default router;