const fs = require("fs");

// fetch

fetch("http:localhost:3000/autos").then((response) => {
  response.text().then((data) => {
    fs.writeFileSync("autos.json", data);
  });
});

(async () => {
  const response = await fetch("http:localhost:3000/autos");
  const data = await response.text();
  fs.writeFileSync("data.json", data);
})();

// node:https
const https = require("node:https");

https.get("https://pokeapi.co/api/v2/ability/1", (response) => {
  // chunk = parte / pedazo
  let resultado = "";
  response.on("data", (chunk) => {
    console.log(chunk);
    resultado += chunk;
  });

  response.on("end", () => {
    fs.writeFileSync("categorias.json", resultado);
  });

  response.on("error", (err) => {
    console.log(err.message);
  });
});
