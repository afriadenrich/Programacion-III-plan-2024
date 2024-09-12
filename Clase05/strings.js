console.log("\n\nMétodos de strings!!!");

function mostrar(cadena) {
  console.log(cadena);
}

let cadena = "Agustín Friadenrich ";
let csv = "Agustín,Friadenrich,33,etc";

mostrar(cadena.length);
mostrar(cadena.slice(2, 4));
mostrar(cadena.trim());
mostrar(csv.split(","));
mostrar(cadena.replace("Agus", "AAAA").toUpperCase());

console.log("\n\nMétodos de listadoDeNumeross!!!");

let listadoDeNumeros = [1, 2, 3, 5, 8, 8, 8, 13, 21];

mostrar(listadoDeNumeros.length);
mostrar(listadoDeNumeros.indexOf(8));
mostrar(listadoDeNumeros[4]);
mostrar(listadoDeNumeros.push(34));
mostrar(listadoDeNumeros);
mostrar(listadoDeNumeros.push(55));
mostrar(listadoDeNumeros);
mostrar(listadoDeNumeros.pop());
mostrar(listadoDeNumeros);
mostrar(listadoDeNumeros.splice(2, 3));
mostrar(listadoDeNumeros);
mostrar(listadoDeNumeros.push(8));
mostrar(listadoDeNumeros.lastIndexOf(8));

// Callback.

console.log("\n\nMétodos de listadoDeNumeross con callback!!!");

function busqueda(elemento, indice) {
  console.log("Elemento: " + elemento + " Indice: " + indice);

  return elemento >= 25;
}

mostrar(
  listadoDeNumeros.find(function (elemento) {
    return elemento >= 25;
  })
);

// Método sin nombre

(elemento, indice, objeto) => elemento >= 25;

// Se llama al find desde el array.
// El find itera todos los elementos.
// Por cada elemento, find llama al método pasado por parámetro.
/*
for(...){
    (elemento, i, array);
    return elemento;
}
*/

listadoDeNumeros.forEach((elemento, indice, array) => {
  mostrar(elemento);
});

let arrayFiltrado = listadoDeNumeros.filter((valor) => valor > 8);
let arrayFiltrado2 = listadoDeNumeros.filter(metodoFiltrar);

mostrar(arrayFiltrado);
mostrar(arrayFiltrado2);

// valor => valor > 8
// (valor) => valor > 8
// (valor) => { return valor > 8; }
// function(valor) { return valor > 8; }
function metodoFiltrar(elemento) {
  return elemento > 8;
}

// tratamos de replicarlo.

function encontrar(metodo) {
  listadoDeNumeros.forEach((elemento) => {
    if (metodo(elemento) === true) {
      console.log(elemento + " enocntrado");
    }
  });
}

encontrar((elemento) => elemento > 20);
