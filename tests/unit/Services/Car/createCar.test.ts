import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';
import Car from '../../../../src/Domains/Car';

describe('Teste CreateCar', function () {
  it('Deve criar um car', async function () {
    const carInput: ICar = {
      model: 'Ford',
      year: 2019,
      color: 'Vermelho',
      status: true,
      buyValue: 1000,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = new Car(carInput);

    sinon.stub(Model, 'create').resolves({ ...carOutput });

    const service = new CarService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });
});