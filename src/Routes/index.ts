import { Router } from 'express';
import carRouter from './Car.router';
import motorcyclesRouter from './Motorcycle.router';

const routers = Router();

routers.use(carRouter);
routers.use(motorcyclesRouter);

export default routers;