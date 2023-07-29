import { Model, FindOptions } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

export interface Service<T extends Model> {
  findAll(options?: FindOptions): Promise<T[]>;
  findOne(id: number): Promise<T | null>;
  create(entity: MakeNullishOptional<T>): Promise<T>;
  update(id: number, entity: MakeNullishOptional<T>): Promise<T | null>;
  remove(id: number): Promise<number>;
}
