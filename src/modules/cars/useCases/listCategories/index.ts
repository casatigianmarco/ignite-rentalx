import { CategoryOnMemoryRepository } from '../../repositories/CategoryOnMemoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoryRepository = new CategoryOnMemoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);
export { listCategoriesController };
