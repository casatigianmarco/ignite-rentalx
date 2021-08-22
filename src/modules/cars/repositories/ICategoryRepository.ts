import { Category } from '../models/Category';

interface ICategoryCreateDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: ICategoryCreateDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { ICategoryRepository, ICategoryCreateDTO };
