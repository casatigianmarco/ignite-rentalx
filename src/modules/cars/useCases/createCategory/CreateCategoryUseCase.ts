import { ICategoryRepository } from '../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoryRepository.findByName(name);
    if (categoryExists) {
      throw new Error('category_already_exists');
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
