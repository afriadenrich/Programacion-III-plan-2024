var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.on("finish", () => {
    console.log("/ GET");
  });
  next();
});

router.use((req, res, next) => {
  if (req.headers.perfil === "admin") {
    next();
  } else {
    res.status(401).send("No estás autorizado!");
  }
});

// Utilizarlo en una ruta en específica
router.use("/", (req, res, next) => {
  if (req.query.id !== undefined) {
    console.log("Pasa");
    next();
  } else {
    res.status(400).send("Error, faltó el id");
  }
});

router.get("/", function (req, res) {
  const id = req.query.id;
  res.send("Usuario con ID: " + id);
});

router.get(
  "/porId",
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.send("Llegó");
  }
);
module.exports = router;
