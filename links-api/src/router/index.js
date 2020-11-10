import { Router } from 'express'

import authGuard from '../guards/token'
import insert from '../controllers/insert'
import remove from '../controllers/remove'
import find from '../controllers/find'
import update from '../controllers/update'

const router = new Router()

router.post('/', authGuard, insert)
router.delete('/:id', authGuard, remove)
router.get('/', authGuard, find)
router.put('/:id', authGuard, update)

export default router
