import Usuario from "./usuario.js";

// paso 1: obtener los valores de los input
const nombreElemento = document.getElementById("nombre");
const correoElemento = document.getElementById("correo");
const contraseniaElemento = document.getElementById("contraseña");
const terminosElemento = document.getElementById("terminos");
const errorEl = document.getElementById("error");

const loginBtn = document.getElementById("login");
const registroBtn = document.getElementById("registro");

loginBtn.onclick = login;
registroBtn.addEventListener("mousedown", registro);

let mensajeError = "";
let nombre = "";
let correo = "";
let contra = "";
let terminos = "";

function obtenerValoresActuales() {
  nombre = nombreElemento.value;
  correo = correoElemento.value;
  contra = contraseniaElemento.value;
  terminos = terminosElemento.checked;
}

function login() {
  obtenerValoresActuales();
  // paso 2: realizar el login de la clase usuario
  if (terminos) {
    if (nombre !== "" && correo !== "" && contra !== "") {
      const usuario = new Usuario(nombre, correo, contra);
      const respuesta = usuario.Login();
      if (respuesta !== "Verificado") {
        mensajeError = respuesta;
      } else {
        mensajeError = "";
      }
    } else {
      mensajeError = "Complete los campos";
    }
  } else {
    mensajeError = "Debes aceptar los términos.";
  }
  console.log(mensajeError);
  errorEl.innerText = mensajeError;
}

function registro() {
  obtenerValoresActuales();
  // paso 2: realizar el registro de la clase usuario

  if (terminos) {
    if (nombre !== "" && correo !== "" && contra !== "") {
      const usuario = new Usuario(nombre, correo, contra);
      usuario.Registro();
      console.log("Registrado!");
      mensajeError = "";
    } else {
      mensajeError = "Complete los campos";
    }
  } else {
    mensajeError = "Debes aceptar los términos.";
  }
  console.log(mensajeError);
  errorEl.innerText = mensajeError;
}
