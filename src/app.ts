import express from 'express';
import error from './middlewares/error';
import routers from './Routes';

const app = express();
app.use(express.json());

app.use(routers);

app.use(error);

export default app;
