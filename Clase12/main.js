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

/*
https://www.google.com/search?q=utn


&sca_esv=92c44415b946008c&source=hp&ei=Y2oAZ-0a0NLWxA-9sJvQBA&iflsig=AL9hbdgAAAAAZwB4c3JHyON35ZPtvXpLzamZEgIw-J7N&ved=0ahUKEwit2NS64fWIAxVQqZUCHT3YBkoQ4dUDCBY&uact=5&oq=utn&gs_lp=Egdnd3Mtd2l6IgN1dG4yCxAuGIAEGLEDGIMBMhQQLhiABBixAxiDARjHARiOBRivATIREC4YgAQYsQMYgwEYxwEYrwEyCBAAGIAEGLEDMgsQLhiABBixAxiDATILEC4YgAQYxwEYrwEyDhAuGIAEGMcBGI4FGK8BMggQABiABBixAzILEC4YgAQYsQMYgwEyCBAAGIAEGLEDSOwFUABYhgFwAHgAkAEAmAFWoAHzAaoBATO4AQPIAQD4AQGYAgOgAoACwgIFEC4YgATCAg4QABiABBixAxiDARiKBcICDhAuGIAEGLEDGMcBGK8BwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICBRAAGIAEmAMAkgcBM6AHyD0&sclient=gws-wiz






*/
