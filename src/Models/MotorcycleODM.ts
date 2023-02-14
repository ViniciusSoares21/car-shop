import { Schema, isValidObjectId } from 'mongoose';
import BadRequest from '../errors/BadRequest';
import NotFound from '../errors/NotFound';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'motorcycle');
  }

  public async getById(id: string): Promise<IMotorcycle | undefined> {
    if (!isValidObjectId(id)) throw new BadRequest('Invalid mongo id');

    const cars = await this.model.findById({ _id: id });

    if (!cars) throw new NotFound('Motorcycle not found');

    return cars;
  }

  public async update(id: string, moto: IMotorcycle): Promise<IMotorcycle | null> {
    await this.getById(id);

    return this.model.findByIdAndUpdate({ _id: id }, { ...moto }, { new: true });
  }

  public async deleteMotorcycle(id: string): Promise<void> {
    await this.getById(id);
    await this.model.findByIdAndDelete({ _id: id });
  }
}

export default MotorcycleODM;