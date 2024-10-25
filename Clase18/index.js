const express = require("express");
const app = express();

// Importante para variables de entorno
//require("dotenv").config();
process.loadEnvFile();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Conexión DB

// Inicio rutas

const autosRoutes = require("./routes/auto.routes.js");
app.use("/autos", autosRoutes);

// Fin rutas

app.get("/", async (req, res) => {
  res.send("Ruta por defecto");
});

app.listen(process.env.PORT || 3000, () => {});
