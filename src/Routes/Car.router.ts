import { Router } from 'express';
import CarController from '../Controllers/CarConttoller';

const carRouter = Router();

carRouter.post('/cars', (req, res, next) => new CarController().create(req, res, next));

carRouter.get('/cars', (req, res, next) => new CarController().getAll(req, res, next));

carRouter.get('/cars/:id', (req, res, next) => new CarController().getById(req, res, next));

export default carRouter;