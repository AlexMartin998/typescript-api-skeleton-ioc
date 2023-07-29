import { FindOptions, Model, ModelStatic } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

export interface Repository<T extends Model> {
  create(entity: MakeNullishOptional<T>): Promise<T>;
  findAll(options?: FindOptions): Promise<T[]>;
  findOne(id: number): Promise<T | null>;
  update(id: number, entity: MakeNullishOptional<T>): Promise<T | null>;
  remove(id: number): Promise<number>;
  getModel(): ModelStatic<T>;
}
