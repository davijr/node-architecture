import logger from '@config/logger'
import { EditionService } from '@services/EditionService'
import express from 'express'
import { can } from 'src/middleware/authorization.middleware'
import httpMiddleware from 'src/middleware/http.middleware'

const editionRoutes = express.Router()
editionRoutes.use(httpMiddleware)

const editionService = new EditionService()

editionRoutes.get('/model/:model', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info('GET /' + req.params?.model)
  try {
    const items = await editionService.find({ model: modelName, searchOptions: req.query })
    if (!items) {
      return res.status(400).json({ message: 'No content.' })
    }
    return res.status(200).json(items)
  } catch (message) {
    return res.status(400).json({ message })
  }
})

editionRoutes.get('/model/:model/:param', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  const params = req.query
  logger.info(`GET /model/${modelName}/${JSON.stringify(params)}`)
  res.status(200).json(await editionService.find({ model: modelName, data: params }))
})

editionRoutes.get('/model-attributes/:model', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info(`GET /model-attributes/${modelName}`)
  res.status(200).json(await editionService.getAttributes(modelName))
})

editionRoutes.get('/menu-options', async (req: any, res: any) => {
  logger.info('GET /menu-options')
  res.status(200).json(await editionService.getMenuOptions())
})

editionRoutes.post('/model/:model/search', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  const searchOptions = req.query
  logger.info(`POST /model/${modelName}/search`)
  try {
    res.status(200).json(await editionService.search({ model: modelName, data: req.body, searchOptions }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

editionRoutes.post('/model/:model', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info(`POST /model/${modelName}`)
  try {
    res.status(200).json(await editionService.create({ model: modelName, data: req.body, userId: req.userId }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

editionRoutes.put('/model/:model', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  logger.info(`PUT /model/${modelName}`)
  try {
    res.status(200).json(await editionService.update({ model: modelName, data: req.body, userId: req.userId }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

editionRoutes.delete('/model/:model/:param', can([]), async (req: any, res: any) => {
  const modelName = req.params.model
  const param = req.params.param
  logger.info(`DELETE /model/${modelName}/${param}`)
  try {
    res.status(200).json(await editionService.delete({ model: modelName, data: param, userId: req.userId }))
  } catch (error) {
    return res.status(400).json(error)
  }
})

export default editionRoutes
