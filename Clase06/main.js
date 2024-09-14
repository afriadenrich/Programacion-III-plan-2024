// import { Usuario, PI } from "./usuario.js";
import Usuario from "./usuario.js";
// import Usuario, { PI, E } from "./usuario.js";
// import * as UsuarioArchivo from "./usuario.js";

const usuario = new Usuario("AGustin@mail.com", "123456");

console.log(usuario);
usuario.correo = "AGUSTIN@MAIL.COM.AR";

console.log(usuario);

usuario.contraseña = "Otra";
console.log(usuario);

const mapa = new Map();
mapa.set("nombre", "F");
mapa.set("apellido", "G");

mapa.forEach((value, key) => {
  console.log(key, " - ", value);
});

// colección JS con Clave nombrada
mapa.set("nombre", "Fernando");
mapa.get("nombre");
mapa.forEach((valor) => {
  console.log(valor);
});

const objeto = {
  clave: "valor",
  // ...
};

// Array -> Claves son números
// Map -> Claves son strings
// Set -> Valores únicos.
