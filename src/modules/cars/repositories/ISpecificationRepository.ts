import { Specification } from '../models/Specification';

interface ISpecificationCreateDTO {
  name: string;
  description: string;
}
interface ISpecificationRepository {
  create({ name, description }: ISpecificationCreateDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}
export { ISpecificationRepository, ISpecificationCreateDTO };
