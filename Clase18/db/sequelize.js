const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("auto_test", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
  dialectOptions: {
    useUTC: false,
  },
  timezone: "America/Argentina/Buenos_Aires",
});

module.exports = sequelize;
