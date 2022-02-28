import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  // NOTE Fake database just for today
  Cats = [{ id: 1, name: 'Mr.Snibblysmith', color: 'Orange' }, { id: 2, name: 'Madam Blackwell', color: 'Calico' }]
}

export const dbContext = new DbContext()
