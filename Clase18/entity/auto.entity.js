const sequelize = require("../db/sequelize");

const AutoSequelize = sequelize.define(
  "Auto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false, // NOT NULL
    },
    patente: {
      type: DataTypes.STRING,
      allowNull: false, // NOT NULL
    },
    precio: {
      type: DataTypes.NUMBER,
      allowNull: false, // NOT NULL
    },
  },
  {
    timestamps: true,
    createdAt: "creado_en",
  }
);

/*
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);
*/
