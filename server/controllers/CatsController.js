import { catsService } from '../services/CatsService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAllCats)
      .post('', this.createCat)
      .delete('/:catId', this.removeCat)
  }

  async getAllCats(req, res, next) {
    try {
      const cats = await catsService.getAllCats()
      return res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async createCat(req, res, next) {
    try {
      logger.log(req.body)
      const cat = await catsService.createCat(req.body)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async removeCat(req, res, next) {
    try {
      logger.log(req.params.catId)
      const message = await catsService.removeCat(req.params.catId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
