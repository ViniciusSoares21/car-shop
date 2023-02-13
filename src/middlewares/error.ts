import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err, req, res, _next) => res
  .status(err.statusCode || 500).json({ error: err.message });

export default error;