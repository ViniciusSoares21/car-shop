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
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const car = await this.carService.updateCar(req.params.id, req.body);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.carService.deleteCar(req.params.id);
      return res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}