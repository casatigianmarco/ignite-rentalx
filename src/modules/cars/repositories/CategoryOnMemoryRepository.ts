import { Category } from '../models/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

class CategoryOnMemoryRepository implements ICategoryRepository {
  private static INSTANCE: CategoryOnMemoryRepository;
  private categories: Category[];
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryOnMemoryRepository {
    if (!CategoryOnMemoryRepository.INSTANCE) {
      CategoryOnMemoryRepository.INSTANCE = new CategoryOnMemoryRepository();
    }
    return CategoryOnMemoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  findByName(name: string): Category {
    return this.categories.find(category => category.name === name);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoryOnMemoryRepository };
