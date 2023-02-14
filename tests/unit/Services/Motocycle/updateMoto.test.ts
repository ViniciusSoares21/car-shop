import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import Motorcycle from '../../../../src/Domains/Motorcycle';

describe('updateMoto', function () {
  it('Deve atualizar a moto pelo id', async function () {
    const motoInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    const motoOutput = new Motorcycle(motoInput);

    sinon.stub(Model, 'findById').resolves(motoOutput);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motoOutput);

    const service = new MotorcycleService();
    const result = await service.updateMoto('63eb97fa451b8b28985c58e7', motoInput);

    expect(result).to.deep.equal(motoOutput);
    sinon.restore();
  });
});