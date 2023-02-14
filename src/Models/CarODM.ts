import { Schema, isValidObjectId } from 'mongoose';
import BadRequest from '../errors/BadRequest';
import NotFound from '../errors/NotFound';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'cars');
  }

  public async getById(id: string): Promise<ICar | undefined> {
    if (!isValidObjectId(id)) throw new BadRequest('Invalid mongo id');

    const cars = await this.model.findById({ _id: id });

    if (!cars) throw new NotFound('Car not found');

    return cars;
  }

  public async update(id: string, car: ICar): Promise<ICar | null> {
    await this.getById(id);

    return this.model.findByIdAndUpdate({ _id: id }, { ...car }, { new: true });
  }

  public async deleteCar(id: string): Promise<void> {
    await this.getById(id);
    await this.model.findByIdAndDelete({ _id: id });
  }
}