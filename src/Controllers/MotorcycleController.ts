import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  constructor(private service = new MotorcycleService()) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newMoto = await this.service.createMoto(req.body);
      res.status(201).json(newMoto);
    } catch (error) {
      next(error);
    }
  }

  public async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const motos = await this.service.getAllMoto();
      res.status(200).json(motos);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const moto = await this.service.getMotoById(req.params.id);
      if (!moto) return res.status(404).json({ message: 'Motorcycle not found' });
      res.status(200).json(moto);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const moto = await this.service.updateMoto(req.params.id, req.body);
      if (!moto) return res.status(404).json({ message: 'Motorcycle not found' });
      res.status(200).json(moto);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.deleteMoto(req.params.id);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}