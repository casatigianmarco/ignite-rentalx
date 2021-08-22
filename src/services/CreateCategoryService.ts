import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoryRepository.findByName(name);
    if (categoryExists) {
      throw new Error('category_already_exists');
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
