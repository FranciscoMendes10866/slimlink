import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

import router from './router'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(compression())
app.use('/api/auth', router)

export default app
