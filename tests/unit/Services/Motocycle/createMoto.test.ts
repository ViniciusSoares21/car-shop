import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import Motorcycle from '../../../../src/Domains/Motorcycle';

describe('Teste createMoto', function () {
  it('Deve criar uma moto', async function () {
    const motoInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motoOutput = new Motorcycle(motoInput);

    sinon.stub(Model, 'create').resolves(motoOutput);

    const service = new MotorcycleService();
    const result = await service.createMoto(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
    sinon.restore();
  });
});