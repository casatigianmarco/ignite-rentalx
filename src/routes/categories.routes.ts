import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

const categoryRoutes = Router();
const categoryRepository = new CategoryRepository();
categoryRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  categoryRepository.create({ name, description });
  return response.status(201).send();
});

export { categoryRoutes };
