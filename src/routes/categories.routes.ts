import { Router } from 'express';

import { CategoryOnMemoryRepository } from '../modules/cars/repositories/CategoryOnMemoryRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoryRoutes = Router();
const categoryRepository = new CategoryOnMemoryRepository();

categoryRoutes.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoryRoutes.get('/', (request, response) => {
  return response.json(categoryRepository.list());
});

export { categoryRoutes };
