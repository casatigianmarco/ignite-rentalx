import { CategoryOnMemoryRepository } from '../../repositories/implementations/CategoryOnMemoryRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoryRepository = CategoryOnMemoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
