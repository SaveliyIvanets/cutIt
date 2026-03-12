import {
  Model,
  ModelStatic,
  WhereOptions,
  FindOptions,
  CreationAttributes,
  Attributes,
} from 'sequelize';
export default class sequelizeRepository<T extends Model> {
  private model: ModelStatic<T>;
  constructor(model: ModelStatic<T>) {
    this.model = model;
  }
  public async findOne(filter: WhereOptions<Attributes<T>>): Promise<T | null> {
    const record = await this.model.findOne({
      where: filter,
    });
    return record;
  }
  public async findById(id: number, options: FindOptions = {}): Promise<T | null> {
    const record = await this.model.findByPk(id, options);
    return record;
  }
  public async create(data: CreationAttributes<T>): Promise<T | null> {
    return await this.model.create(data);
  }
  public async delete(id: number): Promise<number> {
    const whereClause: WhereOptions<Attributes<T>> = { id } as any;
    return await this.model.destroy({ where: whereClause });
  }
  public async update(id: number, data: Partial<Attributes<T>>): Promise<void> {
    const whereClause: WhereOptions<Attributes<T>> = { id } as any;
    await this.model.update(data, { where: whereClause });
  }
}
