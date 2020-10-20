import express, { Router } from 'express'
import multer from 'multer'
import path from 'path'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

export default routes
