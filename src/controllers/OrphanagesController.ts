import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Orphanage from '@models/Orphanage'
import orphanagesView from '../views/orphanages_view'

export default {
  async index(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.find({
      relations: ['images'],
    })

    return response.json(orphanagesView.renderMany(orphanages))
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const orphanageRepository = getRepository(Orphanage)
    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ['images'],
    })

    return response.json(orphanagesView.render(orphanage))
  },

  async create(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage)

    const requestImages = request.files as Express.Multer.File[]
    const orphanageData = {
      ...request.body,
      images: requestImages.map((file) => ({ path: file.filename })),
    }

    const orphanage = orphanageRepository.create(orphanageData)
    await orphanageRepository.save(orphanage)

    return response.status(201).json(orphanage)
  },
}
