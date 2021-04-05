import express from 'express';
import { getCards, createCard, deleteCard, updateCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:id', deleteCard);
router.post('/updateCard/:id', updateCard);

export default router;