import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRouter = Router();
const router = '/motorcycles/:id';

motorcyclesRouter.post('/motorcycles', (req, res, next) => new MotorcycleController()
  .create(req, res, next));

motorcyclesRouter.get('/motorcycles', (req, res, next) => new MotorcycleController()
  .getAll(req, res, next));

motorcyclesRouter.get(router, (req, res, next) => new MotorcycleController()
  .getById(req, res, next));

motorcyclesRouter.put(router, (req, res, next) => new MotorcycleController()
  .update(req, res, next));

motorcyclesRouter.delete(router, (req, res, next) => new MotorcycleController()
  .delete(req, res, next));

export default motorcyclesRouter;