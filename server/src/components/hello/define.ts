/** name */
export const NAME = "hello";
export const MODEL = "hello";
/** debug */
import Debug from "debug";
export const debug = Debug(NAME);
/** models */
export { default as models } from "../../models";
/** router */
import * as express from "express";
export const router = express.Router();
