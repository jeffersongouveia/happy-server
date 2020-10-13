import multer from 'multer'
import path from 'path'
import { Request } from 'express'

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename(request: Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
      const fileName = `${Date.now()}-${file.originalname}`
      callback(null, fileName)
    }
  })
}
