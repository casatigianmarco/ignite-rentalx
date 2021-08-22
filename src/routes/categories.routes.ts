import { Router } from 'express';

import { CategoryOnMemoryRepository } from '../repositories/CategoryOnMemoryRepository';
import { CategoryPostgresRepository } from '../repositories/CategoryPostgresRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoryRoutes = Router();
const categoryRepository = new CategoryPostgresRepository();

categoryRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoryRepository);
  createCategoryService.execute({ name, description });
  return response.status(201).send();
});

categoryRoutes.get('/', (request, response) => {
  return response.json(categoryRepository.list());
});

export { categoryRoutes };
