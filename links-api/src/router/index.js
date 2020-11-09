import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
    return res.json({ 'msg': 'links api working' })
})

export default router
