import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcycleService {
  constructor(private model = new MotorcycleODM()) {}

  private createDoamin(moto: IMotorcycle) {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async createMoto(moto: IMotorcycle) {
    const newMoto = await this.model.create(moto);
    return this.createDoamin(newMoto);
  }

  public async getAllMoto() {
    const motos = await this.model.getAll();
    return motos.map((moto) => this.createDoamin(moto));
  }

  public async getMotoById(id: string) {
    const moto = await this.model.getById(id);
    return this.createDoamin(moto as IMotorcycle);
  }

  public async updateMoto(id: string, moto: IMotorcycle) {
    const updatedMoto = await this.model.update(id, moto);
    return this.createDoamin(updatedMoto as IMotorcycle);
  }
}