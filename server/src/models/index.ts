/** types */
import { Sequelize, QueryTypes, DataTypes, Op, Model } from "sequelize";
import * as fs from "fs";
import * as path from "path";
/** connection */
import sequelize from "../dbConnection";

function main() {
  const basename = path.basename(__filename);
  const db: DB = {
    sequelize,
    Sequelize,
    DataTypes,
    QueryTypes,
    Op,
  };

  try {
    /** Read other model files in current folder */
    fs.readdirSync(__dirname)
      .filter((file) => {
        /** filter js files */
        return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-3) === ".js"
        );
      })
      .forEach((file) => {
        /** load model */
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
      });

    /** load associate */
    Object.keys(db).forEach((modelName) => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    return db;
  } catch (error) {
    console.log("[E] [models index]", error);

    return db;
  }
}

const db = main();

type DB = {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  DataTypes: typeof DataTypes;
  QueryTypes: typeof QueryTypes;
  Op: typeof Op;
  [keys: string]: typeof Model | any;
};

export default db;
