const traer = document.getElementById("traer");
const insertar = document.getElementById("insertar");
const modificar = document.getElementById("modificar");
const eliminar = document.getElementById("eliminar");

traer.addEventListener("click", async () => {
  const pedido = await fetch("http://localhost:3000/autos");
  const respuesta = await pedido.json();
  console.log(respuesta);
});

insertar.addEventListener("click", async () => {
  const datos = {
    nombre: "Ferrari 3",
    precio: 99,
    patente: "FF123FF",
  };

  const pedido = await fetch("http://localhost:3000/autos", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const respuesta = await pedido.json();
  console.log(respuesta);
});

modificar.addEventListener("click", async () => {
  const datos = {
    nombre: "Audi 3",
    precio: 99999999,
    patente: "FF123FF",
  };

  const pedido = await fetch("http://localhost:3000/autos/7", {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const respuesta = await pedido.json();
  console.log(respuesta);
});

eliminar.addEventListener("click", async () => {
  const pedido = await fetch("http://localhost:3000/autos/7", {
    method: "DELETE",
  });
  const respuesta = await pedido.json();
  console.log(respuesta);
});

window.addEventListener("load", async () => {
  const pedido = await fetch("http://localhost:3000/header");
  const respuesta = await pedido.text();
  console.log(respuesta);
  const body = document.body;
  body.insertAdjacentHTML("afterbegin", respuesta);
});

async function crearAutoYGarage() {
  const peticionGarage = await fetch("/garages", {
    method: "POST",
    body: JSON.stringify({}),
  });
  const respuesta = await peticionGarage.json();
  const garageId = respuesta.id;

  const peticionAuto = await fetch("/auto", {
    method: "POST",
    body: JSON.stringify({ garageId: garageId }),
  });
}
