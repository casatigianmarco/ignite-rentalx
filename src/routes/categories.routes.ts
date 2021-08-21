import { request, response, Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

const categoryRoutes = Router();
const categoryRepository = new CategoryRepository();

categoryRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const categoryExists = categoryRepository.findByName(name);
  if (categoryExists) {
    return response.status(400).json({ error: 'category_already_exists' });
  }
  categoryRepository.create({ name, description });
  return response.status(201).send();
});

categoryRoutes.get('/', (request, response) => {
  return response.json(categoryRepository.list());
});

export { categoryRoutes };
