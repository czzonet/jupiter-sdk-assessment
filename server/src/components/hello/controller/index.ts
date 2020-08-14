/** express */
import { RequestHandler } from "express";
/** define */
import { debug, models, MODEL } from "../define";
/** lib */
import { copyFile, unlink, exists, readFile, writeFile } from "fs";
import * as util from "util";
import * as path from "path";

export const total: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here

    let { page, limit } = req.body;

    if (typeof page !== "number" || page < 1) {
      page = 1;
    }
    if (typeof limit !== "number" || limit < 10) {
      limit = 10;
    }

    const recordAll = await models[MODEL].findAll({
      order: [["id", "desc"]],
      attributes: ["id", "title"],
      limit: limit,
      offset: (page - 1) * limit,
    });

    const recordCount = await models[MODEL].count();

    res.json({
      code: 200,
      message: "ok",
      data: recordAll,
      count: parseInt(recordCount),
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

    const recordNew = await models[MODEL].create({ title });

    /** Output file name with id */
    const uploadPath = path.resolve(
      __dirname,
      "../../../../../../upload/" + recordNew.id
    );
    /** Write to file */
    await util.promisify(writeFile)(uploadPath, content, {
      encoding: "utf8",
    });

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
