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

// Config. EJS
const ejs = require("ejs");
const path = require("path");

// view engine setup
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("vista");
});

app.get("/autos", (req, res) => {
  const autos = [
    {
      id: 1,
      nombre: "Ferrari",
      patente: "AVC123",
      precio: 333,
      eliminado: false,
      creado_en: "2024-10-30T22:25:13.000Z",
      updatedAt: "2024-10-30T22:25:13.000Z",
      GarageId: null,
    },
    {
      id: 2,
      nombre: "A",
      patente: "X",
      precio: 3,
      eliminado: false,
      creado_en: "2024-10-30T22:27:27.000Z",
      updatedAt: "2024-10-30T22:27:27.000Z",
      GarageId: null,
    },
    {
      id: 3,
      nombre: "A",
      patente: "X",
      precio: 3,
      eliminado: false,
      creado_en: "2024-10-30T22:28:04.000Z",
      updatedAt: "2024-10-30T22:28:04.000Z",
      GarageId: 1,
    },
  ];

  console.log(req.query.mostrar);
  res.render("autos", {
    array: autos,
    mostrar: req.query.mostrar,
  });
});

app.get("/header", (req, res) => {
  res.render("header");
});

app.listen(3000, () => {
  console.log("Levantó!");
});
