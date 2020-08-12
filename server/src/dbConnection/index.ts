import { Sequelize } from "sequelize";

import * as fs from "fs";
import * as path from "path";

const connectDB = () => {
  // const env = process.env.NODE_ENV || "production";

  // const configPath = path.resolve(__dirname, "../../env_config.json");
  // let configstr = fs.readFileSync(configPath, { encoding: "utf8" });
  // let config = JSON.parse(configstr)[env];

  /** For pg,mysql... */
  // let sequelize = new Sequelize(
  //   config.database,
  //   config.username,
  //   config.password,
  //   config
  // );

  /** For sqlite */
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.resolve(__dirname, "../../hello.db"),
  });

  return sequelize;
};

/** DB instance */
const sequelize = connectDB();

export default sequelize;
