import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  constructor(private carService = new CarService()) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newCar = await this.carService.createCar(req.body);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
}