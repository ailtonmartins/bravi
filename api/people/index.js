import express from 'express';

import create from './services/create';
import update from './services/update';
import list from './services/list';
import remove from './services/remove';

const router = express.Router();

router.get('/', list)
router.get('/:id', list)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)


export default router