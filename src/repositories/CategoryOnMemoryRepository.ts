import { Category } from '../models/Category';
import { ICategoryCreateDTO, ICategoryRepository } from './ICategoryRepository';

class CategoryOnMemoryRepository implements ICategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategoryCreateDTO): void {
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
