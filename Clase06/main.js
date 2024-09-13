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
