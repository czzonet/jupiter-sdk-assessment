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

export const show: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here

    let { id } = req.body;

    if (typeof id !== "number" || id < 1) {
      id = 1;
    }

    const record = await models[MODEL].findOne({
      where: { id },
      attributes: ["id", "title"],
    });

    /** Output file name with id */
    const uploadPath = path.resolve(
      __dirname,
      "../../../../../../upload/" + id
    );
    /** Read file */
    const content = await util.promisify(readFile)(uploadPath, {
      encoding: "utf8",
    });

    const data = { ...JSON.parse(JSON.stringify(record)), content };

    res.json({
      code: 200,
      message: "ok",
      data,
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
    const { id, title, content } = req.body;

    const recordNew = await models[MODEL].update(
      { title },
      {
        where: { id },
      }
    );

    /** Output file name with id */
    const uploadPath = path.resolve(
      __dirname,
      "../../../../../../upload/" + id
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

export const remove: RequestHandler = async (req, res, next) => {
  debug(`body: %O`, req.body);

  try {
    // Add logic here
  } catch (error) {
    next(error);
  }
};
