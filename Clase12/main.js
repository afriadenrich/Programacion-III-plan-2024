console.log("Hola mundo");
const urlBase = "https://api.nasa.gov/planetary/apod";

async function traerDatos() {
  const params = new URLSearchParams({
    api_key: "DEMO_KEY", // &
    date: "2022-12-18",
  });

  // Luego del signo ? van a ir los query params
  const urlFinal = urlBase + "?" + params.toString();

  const resultado = await fetch(urlFinal, {
    method: "GET",
  });

  // GET - POST - PUT - DELETE

  const datos = await resultado.json();

  console.log(datos);
}

traerDatos();

// GET - POST - PUT - DELETE

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2024-10-01

let params = new URLSearchParams(document.location.search);
let nombre = params.get("nombre");
let edad = parseInt(params.get("edad"), 10);

console.log(nombre, edad);
