import { DataTypes, Model } from "sequelize";
import sequelize from "../../../dbConnection";

class template extends Model {}

template.init(
  {
    name: DataTypes.STRING,
    a: DataTypes.STRING,
    b: DataTypes.BOOLEAN,
  },
  { sequelize }
);

export default template;
