// const path = require("path");
const path = require("node:path");
const fs = require("node:fs"); // file system
// const fs = require("fs"); // file system

// await fs.writeFile()
//fs.writeFileSync("./data.txt", "Hola programacion 3"); // Escribir. Y pisar lo que haya escrito

const data = { nombre: "Agust", apellido: "x" };
const ruta = path.join(__dirname, "public/data.json");

console.log(ruta);
//fs.writeFileSync(ruta, JSON.stringify(data, null, 2));

//const lectura = fs.readFileSync(ruta, "utf-8");
//console.log(lectura);

fs.unlink(ruta, (err) => {
  console.log(err);
});

const rutaTxt = path.join(__dirname, "public/data.txt");
fs.appendFileSync(rutaTxt, "Agustín Friadenrich\n");
fs.appendFileSync(rutaTxt, "Nicolás Ferrero\n");
fs.appendFileSync(rutaTxt, "Etc.\n");

const existe = fs.existsSync("backup");
if (!existe) {
  fs.mkdirSync("backup");
}

fs.copyFileSync(rutaTxt, "./backup/data.txt");
