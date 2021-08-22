import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationOnMemoryRepository implements ISpecificationRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationOnMemoryRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationOnMemoryRepository {
    if (!SpecificationOnMemoryRepository.INSTANCE) {
      SpecificationOnMemoryRepository.INSTANCE =
        new SpecificationOnMemoryRepository();
    }
    return SpecificationOnMemoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      specification => specification.name === name,
    );
  }
}

export { SpecificationOnMemoryRepository };
