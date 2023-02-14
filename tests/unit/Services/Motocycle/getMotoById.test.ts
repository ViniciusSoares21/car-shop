import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import Motorcycle from '../../../../src/Domains/Motorcycle';

describe('Teste getCarById', function () {
  it('Deve retornar carro pelo id', async function () {
    const motoInput: IMotorcycle = {
      id: '63eb97fa451b8b28985c58e7',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    const MotoOutput = new Motorcycle(motoInput);

    sinon.stub(Model, 'findById').resolves(MotoOutput);

    const service = new MotorcycleService();
    const result = await service.getMotoById('63eb97fa451b8b28985c58e7');

    expect(result).to.be.deep.equal(MotoOutput);
    sinon.restore();
  });
});