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

  public async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const cars = await this.carService.getAllCars();
      return res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const car = await this.carService.getCarById(req.params.id);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }
}