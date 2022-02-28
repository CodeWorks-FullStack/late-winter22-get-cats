import { catsService } from '../services/CatsService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class CatsController extends BaseController {
  constructor() {
    // NOTE the super here defines what the base url of this controller is located at (http://localhost:3000/api/cats)
    super('api/cats')
    this.router
    // NOTE these define our routes in each controller, what to do when the client .get or .post
      .get('', this.getAllCats)
      .post('', this.createCat)
      // NOTE the ':catId' add a parameter called catId we can then access in the method to get a value the client passed in the URL
      .delete('/:catId', this.removeCat)
  }

  // NOTE Req => is the request from the client, the knight coming in
  // NOTE Res => is the response back to the client, the knight going back out
  // NOTE next is what moves the knight down the hallway.
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
      // NOTE req.body is the info sent from the client or user
      logger.log(req.body)
      const cat = await catsService.createCat(req.body)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async removeCat(req, res, next) {
    try {
      // NOTE req.params reaches into the url and pulls the information the client sent in one of the registered parameter spots
      logger.log(req.params.catId)
      const message = await catsService.removeCat(req.params.catId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
