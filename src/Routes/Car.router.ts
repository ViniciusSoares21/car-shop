import { Router } from 'express';
import CarController from '../Controllers/CarConttoller';

const carRouter = Router();

carRouter.post('/cars', (req, res, next) => new CarController().create(req, res, next));

carRouter.get('/cars', (req, res, next) => new CarController().getAll(req, res, next));

carRouter.get('/cars/:id', (req, res, next) => new CarController().getById(req, res, next));

carRouter.put('/cars/:id', (req, res, next) => new CarController().update(req, res, next));

carRouter.delete('/cars/:id', (req, res, next) => new CarController().delete(req, res, next));

export default carRouter;