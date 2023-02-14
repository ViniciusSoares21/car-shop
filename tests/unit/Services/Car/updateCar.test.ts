import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';
import Car from '../../../../src/Domains/Car';

describe('updateCar', function () {
  it('Deve atualizar um carro pelo id', async function () {
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

    sinon.stub(Model, 'findById').resolves(carOutput);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const service = new CarService();
    const result = await service.updateCar('63eac9d296b502ec53213b80', carInput);

    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });
});