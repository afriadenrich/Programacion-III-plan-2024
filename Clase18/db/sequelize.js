const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("auto_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    useUTC: false,
  },
  timezone: "America/Argentina/Buenos_Aires",
});

module.exports = sequelize;
