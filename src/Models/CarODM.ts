import { Model, Schema, model, models, isValidObjectId } from 'mongoose';
import BadRequest from '../errors/BadRequest';
import NotFound from '../errors/NotFound';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar | undefined> {
    if (!isValidObjectId(id)) throw new BadRequest('Invalid mongo id');
  
    const cars = await this.model.findById({ _id: id });
    
    if (!cars) throw new NotFound('Car not found');

    return cars;
  }
}