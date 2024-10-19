const express = require("express");
const app = express();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Rutas.
// POST - GET - PUT - DELETE - PATCH - OPTION ...
app.get("/", (request, response) => {
  console.log("Entraron a /");
  // response.setHeader("Content-Type", "image/png");
  // response.setHeader("Content-Type", "application/pdf");
  // response.setHeader("Content-Type", "text/json");
  response.send("Hola mundo");
});

app.get("/algo", (req, res) => {
  console.log("Entraron a ruta algo");
  res.send("Algo!");
});

app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// route params - parametros de ruta
// /parametros/6
// ?id=6
app.get("/parametros/:id", (req, res) => {
  res.send({ city: req.params.id });
});

// query params - parametros de query
// /queryparams?nombre=agus
app.get("/queryparams", (req, res) => {
  res.send(req.query.nombre);
});

// Tomar datos del body (En el postman es el que pone raw)
app.post("/body", (req, res) => {
  const nombre = req.body.nombre;
  res.send("Post a /body " + nombre);
});

app.post("/algo", (req, res) => {
  res.send("Algo por post");
});

app.listen(3000, () => {
  console.log("Se levantó correctamente");
});

/*
Habilitar ejecución de scripts, en la powershell como administradores:
set-executionpolicy remotesigned

Instalar express:
- npm install express
o
- npm i express

Instalar nodemon como dependencia de desarrollo:
- npm install -g nodemon
- npm install --save-dev nodemon
- nodemon index.js
*/
