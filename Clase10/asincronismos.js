// Fetch en modo GET.

function traerDatosPromesa() {
  const promesa = fetch("https://api.github.com/users/afriadenrich");

  // Asincronismos
  // Promesa.
  promesa
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      console.log(response.body);

      response.json().then((valor) => {
        console.log(valor);

        const titulo = document.createElement("h1");
        titulo.innerText = valor.login;

        document.body.insertAdjacentElement("beforeend", titulo);
      });
    })
    .catch((reason) => {
      console.log(reason);
    });

  promesa.finally(() => {
    console.log("se ejecuta después!");
  });

  console.log(promesa);
}

// Async.

async function traerDatosAsync() {
  try {
    const respuesta = await fetch("https://api.github.com/users/afriadenrich");

    const json = await respuesta.json();

    console.log(json);

    const titulo = document.createElement("h1");
    titulo.innerText = json.login;

    document.body.insertAdjacentElement("beforeend", titulo);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally!");
  }
}

traerDatosAsync();

console.log("Código que está después.");
//
//
//
//
///
//
//
//
// Llega el recurso.
