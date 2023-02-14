import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import Motorcycle from '../../../../src/Domains/Motorcycle';

describe('Teste getAllMoto', function () {
  it('Deve retornar uma lista de motos', async function () {
    const motoInputArr: IMotorcycle[] = [
      {
        id: '63eb97fa451b8b28985c58e7',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '63eb9851451b8b28985c58e9',
        model: 'Honda CG 160',
        year: 2016,
        color: 'red',
        status: true,
        buyValue: 14,
        category: 'Street',
        engineCapacity: 160,
      },
    ];

    const motoOutput = motoInputArr.map((moto) => new Motorcycle(moto));

    sinon.stub(Model, 'find').resolves(motoOutput);

    const service = new MotorcycleService();
    const result = await service.getAllMoto();

    expect(result).to.be.deep.equal(motoOutput);
    sinon.restore();
  });
});