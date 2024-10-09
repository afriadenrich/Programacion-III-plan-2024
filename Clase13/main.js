import Swal from "./node_modules/sweetalert2/dist/sweetalert2.esm.all.js";

//const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  Swal.fire("Hola mundo", "Cómo están?", "error");
});
