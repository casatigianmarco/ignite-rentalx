import { Category } from '../models/Category';
import { ICategoryCreateDTO, ICategoryRepository } from './ICategoryRepository';

class CategoryPostgresRepository implements ICategoryRepository {
  create({ name, description }: ICategoryCreateDTO): void {
    console.log({ name, description });
  }
  findByName(name: string): Category {
    console.log({ name });
    return null;
  }
  list(): Category[] {
    return [];
  }
}

export { CategoryPostgresRepository };
