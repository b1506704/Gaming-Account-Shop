import express from 'express';

import { getCategories, createCategory, deleteCategory } from '../controllers/categories.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.delete('/:name', deleteCategory);

export default router;