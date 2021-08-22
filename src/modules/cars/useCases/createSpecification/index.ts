import { SpecificationOnMemoryRepository } from '../../repositories/implementations/SpecificationOnMemoryRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = SpecificationOnMemoryRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
