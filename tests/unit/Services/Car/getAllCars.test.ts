import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';
import Car from '../../../../src/Domains/Car';

describe('Teste getAllCars', function () {
  it('Deve retornar uma lista de carros', async function () {
    const carInputArr: ICar[] = [
      {
        id: '63eac98196b502ec53213b7e',
        model: 'Onix',
        year: 2016,
        color: 'black',
        status: true,
        buyValue: 60,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63eac9d296b502ec53213b80',
        model: 'Uno',
        year: 2001,
        color: 'white',
        status: false,
        buyValue: 20,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    const carOutput = carInputArr.map((car) => new Car(car));

    sinon.stub(Model, 'find').resolves(carOutput);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(carOutput);
  });
});