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

  if (precio <= 0) {
    res.status(400).send({ error: true });
  } else {
    res.status(200);
    res.send(auto.toJson());
  }
});

router.put("/", (req, res) => {
  res.status(501);
  throw new Error("Not implented");
});

module.exports = router;
