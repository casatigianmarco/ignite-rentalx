import { Category } from '../models/Category';

interface ICategoryCreateDTO {
  name: string;
  description: string;
}

class CategoryRepository {
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
}

export { CategoryRepository };
