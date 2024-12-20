const express = require("express");
const app = express();

// Deshabilitar cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// Importante para variables de entorno
//require("dotenv").config();
process.loadEnvFile();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Conexión DB
// const sequelize = require("./db/sequelize.js");
// const autoSequelize = require("./entity/auto.entity.js");

// Inicio rutas

const autosRoutes = require("./routes/auto.routes.js");
app.use("/autos", autosRoutes);

// Fin rutas

app.get("/", async (req, res) => {
  // await autoSequelize.sync({ force: true });
  res.send("Ruta por defecto");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App started");
});
