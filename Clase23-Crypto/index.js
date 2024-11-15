// Encriptar != Hashear != Codificar

// Codificar -> Reversible. No oculta información.
//  7 -> 0111 -> 7

// Encriptar -> Reversible. Oculta información.

// 7 -> $49VCKT -> ???

// Hashear -> Reversible. Oculta información o no.
// Garantizar la integridad de los datos.
// Agus, 47, Casa, CLAVE_SECRETA -> %ISAD2(82)&

// Token garantiza que quien lo tenga es quien dice ser.

/*
Acrónimos:
- AES (Advanced Encryption Standard)
- IV (vector de inicialización) 
- ECB (Electronic Codebook)
- CBC (Cipher Block Chaining)

*/
const crypto = require("crypto");
require("dotenv").config();

const passwordDelUsuario = "123456";

// Obtener contraseña de 32 caracteres: console.log(crypto.randomBytes(16).toString("hex"));
const claveSecretaDelServer = process.env.CLAVE_SECRETA;
const algoritmo = "aes-256-cbc";

function encriptar(password) {
  const iv = crypto.randomBytes(16); // Vector de inicialización;
  const encriptador = crypto.createCipheriv(
    algoritmo,
    claveSecretaDelServer,
    iv
  );

  let encriptado = encriptador.update(password, "utf8", "hex");
  encriptado += encriptador.final("hex");

  return { iv, encriptado };
}
/*
const { iv, encriptado } = encriptar(passwordDelUsuario);
console.log(iv.toString("hex"));
console.log(encriptado);
*/
const ivGenerado = "f1f2f002c2509e5b25470fd1543f64a8";
const passGenerada = "42e9658b87ceaf2e003a6590c481b382";

// 123456 == "42e9658b87ceaf2e003a6590c481b382"

function desencriptar(iv, passEncriptada) {
  const decifrador = crypto.createDecipheriv(
    algoritmo,
    claveSecretaDelServer,
    Buffer.from(iv, "hex")
  );

  let decifrado = decifrador.update(passEncriptada, "hex", "utf8");
  decifrado += decifrador.final("utf8");
  return decifrado;
}

/*
const decifrado = desencriptar(ivGenerado, passGenerada);

console.log(decifrado);
*/

function registro(pass) {
  return encriptar(pass);
}

function login(pass, iv, passEncriptada) {
  const encriptador = crypto.createCipheriv(
    algoritmo,
    claveSecretaDelServer,
    Buffer.from(iv, "hex")
  );

  let encriptado = encriptador.update(pass, "utf8", "hex");
  encriptado += encriptador.final("hex");
  console.log(encriptado);

  return encriptado === passEncriptada;
}

const { iv, encriptado } = registro("12345678");
console.log(encriptado);

const exito = login("12345678", iv, encriptado);

console.log(exito);
