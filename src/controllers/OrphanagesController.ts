import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Orphanage from '@models/Orphanage'

export default {
  async index(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanages = await orphanageRepository.find()

    return response.json(orphanages)
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const orphanageRepository = getRepository(Orphanage)
    const orphanage = await orphanageRepository.findOneOrFail(id)

    return response.json(orphanage)
  },

  async create(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanage = orphanageRepository.create(request.body)
    await orphanageRepository.save(orphanage)

    return response.status(201).json(orphanage)
  }
}
