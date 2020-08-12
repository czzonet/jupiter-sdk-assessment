/** express */
import { RequestHandler, ErrorRequestHandler } from "express";

/**
 * catch 404 and forward to error handler
 */
export const notFond: RequestHandler = (req, res, next) => {
  /* next http error */
  next({ status: 404 });
};

/**
 * error to stderr
 */
export const logErrors: ErrorRequestHandler = function(err, req, res, next) {
  console.error(err.stack);
  next(err);
};

/**
 * error handler
 */
export const errorHandler: ErrorRequestHandler = function(err, req, res, next) {
  res.status(500).send({ error: `500` });
};
