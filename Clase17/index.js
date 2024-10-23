const express = require("express");
const app = express();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Inicio rutas

const autosRoutes = require("./routes/auto.routes.js");
app.use("/autos", autosRoutes);

// Fin rutas

app.get("/", (req, res) => {
  res.send("Ruta por defecto");
});

app.listen(3000, () => {
  console.log("App started!");
});
