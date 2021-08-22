import { CategoryOnMemoryRepository } from '../../repositories/implementations/CategoryOnMemoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoryRepository = CategoryOnMemoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);
export { listCategoriesController };
