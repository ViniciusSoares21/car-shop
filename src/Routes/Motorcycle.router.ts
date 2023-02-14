import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRouter = Router();

motorcyclesRouter.post('/motorcycles', (req, res, next) => new MotorcycleController()
  .create(req, res, next));

motorcyclesRouter.get('/motorcycles', (req, res, next) => new MotorcycleController()
  .getAll(req, res, next));

motorcyclesRouter.get('/motorcycles/:id', (req, res, next) => new MotorcycleController()
  .getById(req, res, next));

motorcyclesRouter.put('/motorcycles/:id', (req, res, next) => new MotorcycleController()
  .update(req, res, next));

export default motorcyclesRouter;