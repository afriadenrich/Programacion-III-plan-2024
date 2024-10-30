const boton = document.getElementById("traer");

boton.addEventListener("click", async () => {
  const pedido = await fetch("http://localhost:3000/autos");
  const respuesta = await pedido.json();
  console.log(respuesta);
});
