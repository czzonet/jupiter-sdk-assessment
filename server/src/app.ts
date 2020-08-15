/** express */
import * as express from "express";
/** morgan log */
import * as morgan from "morgan";
import * as errorhandler from "errorhandler";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
/** fs */
import * as fs from "fs";
import * as path from "path";
/** cookie */
import * as cookieParser from "cookie-parser";
/** api */
import apiRouter from "./routers/api";
/** handler */
import { notFond, logErrors, errorHandler } from "./handlers";

function main() {
  const app = express();

  // all environments
  /** port */
  app.set("port", process.env.PORT || 3000);
  /* middleware */
  app.use(morgan("short"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(helmet());

  /* folder of public */
  const publicPath = path.resolve(__dirname, "../../public");
  /* create if not exist */
  fs.existsSync(publicPath) ? null : fs.mkdirSync(publicPath);

  /* folder of front-end dist */
  const frontPath = path.resolve(__dirname, "../../dist");
  /* create if not exist */
  fs.existsSync(frontPath) ? null : fs.mkdirSync(frontPath);

  /* folder of public */
  const uploadPath = path.resolve(__dirname, "../../../upload");
  /* create if not exist */
  fs.existsSync(uploadPath) ? null : fs.mkdirSync(uploadPath);

  /** entry for front-end dist */
  app.use("/", express.static(frontPath));

  /** public */
  app.use("/api/public", express.static(publicPath));

  /** apiRouter */
  app.use("/api", apiRouter);

  /** notFond */
  app.use(notFond);

  /** errorhandler */
  if (process.env.NODE_ENV === "development") {
    // only use in development
    app.use(errorhandler());
  } else {
    /** logErrors */
    app.use(logErrors);
    /** errorHandler */
    app.use(errorHandler);
  }

  return app;
}

const app = main();

export default app;
