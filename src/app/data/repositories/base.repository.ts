import { FindOptions, Model, ModelStatic } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

import { Repository } from '../interfaces';

export abstract class BaseRepository<T extends Model> implements Repository<T> {
  protected readonly model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async findOne(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async findAll(options?: FindOptions): Promise<T[]> {
    return this.model.findAll(options);
  }

  async create(data: MakeNullishOptional<T>): Promise<T> {
    return this.model.create(data);
  }

  async update(id: number, data: MakeNullishOptional<T>): Promise<T | null> {
    const record = await this.findOne(id);
    if (!record) return null;

    record.set({ ...data });

    return await record.save();
  }

  async remove(id: number): Promise<number> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.model.destroy({ where: { id } as any });
  }

  getModel(): ModelStatic<T> {
    return this.model;
  }
}
