import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';
import Car from '../../../../src/Domains/Car';

describe('Teste getCarById', function () {
  it('Deve retornar carro pelo id', async function () {
    const carInput: ICar = {
      id: '63eac9d296b502ec53213b80',
      model: 'Uno',
      year: 2001,
      color: 'white',
      status: false,
      buyValue: 20,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput = new Car(carInput);

    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCarById('63eac9d296b502ec53213b80');

    expect(result).to.be.deep.equal(carOutput);
  });
});