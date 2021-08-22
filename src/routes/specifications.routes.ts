import { Router } from 'express';

import { SpecificationOnMemoryRepository } from '../modules/cars/repositories/SpecificationOnMemoryRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();
const specificationOnMemoryRepository = new SpecificationOnMemoryRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationOnMemoryRepository,
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationRoutes };
