const express = require("express");
const router = express.Router();
const Auto = require("../model/auto.js");

// localhost:3000/autos/
router.get("/", (req, res) => {
  res.send("Estoy en el router");
});

router.post("/", (req, res) => {
  // Tomar los datos del body
  const nombre = req.body.nombre;
  const patente = req.body.patente;
  const precio = req.body.precio;

  // Crear un auto
  const auto = new Auto();
  auto.nombre = nombre;
  auto.patente = patente;
  auto.precio = precio;

  res.send(auto.toJson());
});

module.exports = router;
