import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class CatsService {
  removeCat(catId) {
    logger.log('catId form user', typeof catId)
    const index = dbContext.Cats.findIndex(c => c.id.toString() === catId)
    if (index === -1) {
      throw new Error('no cat at that id')
    }
    dbContext.Cats.splice(index, 1)
    return 'she gone'
  }

  async createCat(body) {
    const cat = await dbContext.Cats.push(body)
    return body
  }

  async getAllCats() {
    const cats = await dbContext.Cats
    return cats
  }
}

export const catsService = new CatsService()
