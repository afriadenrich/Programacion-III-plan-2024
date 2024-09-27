// Fetch en modo GET.

const promesa = fetch("https://api.github.com/users/afriadenrich");

// Asincronismos
promesa.then((response) => {
  console.log(response.body);

  response.json().then((valor) => {
    console.log(valor);

    const titulo = document.createElement("h1");
    titulo.innerText = valor.login;

    document.body.insertAdjacentElement("beforeend", titulo);
  });
});

// Promesa.

// Async.

console.log(promesa);

//
//
//
//
///
//
//
//
// Llega el recurso.
