/** express */
import { RequestHandler } from "express";
/** define */
import { debug, models, MODEL } from "../define";

export const total: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here
    res.json({
      code: 200,
      message: "ok",
    });
  } catch (error) {
    next(error);
  }
};

export const add: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here
    const { title, content } = req.body;

    await models[MODEL].create({ title });
    res.json({
      code: 200,
      message: "ok",
    });
  } catch (error) {
    next(error);
  }
};

export const change: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here
  } catch (error) {
    next(error);
  }
};

export const remove: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here
  } catch (error) {
    next(error);
  }
};
