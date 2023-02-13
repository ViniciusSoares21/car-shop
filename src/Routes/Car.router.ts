import { Router } from 'express';
import CarController from '../Controllers/CarConttoller';

const carRouter = Router();

carRouter.post('/cars', (req, res, next) => new CarController().create(req, res, next));

export default carRouter;