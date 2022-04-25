import '@config/environment'
import { database } from '@config/database'
import logger from '@config/logger'
import bodyParser from 'body-parser'
import express from 'express'
import { AppUtils } from '@utils/AppUtils'
import mountRoutes from './routes'
import httpHeader from './middleware/http.middleware'

(async () => {
  try {
    if (AppUtils.isDBSync()) {
      await database.sync()
    }
  } catch (error) {
    logger.error(error)
  }
})()

const app = express()
app.use(bodyParser.json())
app.use(httpHeader)
mountRoutes(app)

export default app
