import { FindOptions, Model } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

import { Repository } from '../data/interfaces';
import { Service } from './interfaces';

export abstract class BaseService<T extends Model> implements Service<T> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async findAll(options?: FindOptions): Promise<T[]> {
    return this.repository.findAll(options);
  }

  async findOne(id: number): Promise<T | null> {
    const record = await this.repository.findOne(id);
    // if (!record) throw new NotFoundException('Record not found');

    return record;
  }

  async create(entity: MakeNullishOptional<T>): Promise<T> {
    return this.repository.create(entity);
  }

  async update(id: number, entity: MakeNullishOptional<T>): Promise<T | null> {
    return this.repository.update(id, entity);
  }

  async remove(id: number): Promise<number> {
    await this.findOne(id);

    return this.repository.remove(id);
  }
}
