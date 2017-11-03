import express from 'express';

import create from './services/create';
import update from './services/update';
import list from './services/list';
import remove from './services/remove';

const router = express.Router();

router.get('/:person/', list)
router.get('/:person/:id', list)
router.post('/:person/', create)
router.put('/:person/:id', update)
router.delete('/:person/:id', remove)


export default router