import { Router } from 'express'

import SignUp from '../controllers/signup'
import SignIn from '../controllers/signin'

const router = new Router()

router.post('/signup', SignUp)
router.post('/signin', SignIn)

export default router
