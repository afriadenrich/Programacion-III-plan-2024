// 1- Encontrar números primos hasta número “n”

function esPrimo(num) {
  // retorna true o false si num es primo o no.

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function encontrarPrimosHasta(numeroMaximo) {
  let primos = [];

  for (let i = 2; i < numeroMaximo; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }

  return primos;
}

console.log(encontrarPrimosHasta(100));

// 2- El texto es un palíndromo?

// "HOLA"
// slpit("")
// ["H", "O", "L", "A"]
// reverse()
// ["A", "L", "O", "H"]
// join("")
// "ALOH"

/*
function esPalindromo(str) {
  const textoInverso = str.split("").reverse().join("");
  return str === textoInverso;
}
*/

const esPalindromo = (str) => str === str.split("").reverse().join("");

console.log(esPalindromo("neuquen")); // Salida: true

// 3- Remover duplicados en array
/*
function removerDuplicados(original) {
  const resultado = [];

  for (let i = 0; i < original.length; i++) {
    // if (!resultado.includes(original[i])) {
    //   resultado.push(original[i]);
    // }

    if (resultado.indexOf(original[i]) === -1) {
      resultado.push(original[i]);
    }
  }

  return resultado;
}
*/

function removerDuplicados(original) {
  const set = new Set(original);

  return [...set];
}
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 4. Sumar dígitos a partir de un string

function sumarDigitos(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    // let proximo = parseInt(str[i], 10);
    const letra = str[i];
    sum += !isNaN(letra) ? parseInt(letra, 10) : 0;

    /*
    if (!isNaN(proximo)) {
      sum += proximo;
    }*/
  }
  return sum;
}

/*
function sumarDigitos(str = "") {
  let sum = 0;

  while (str.length > 0) {
    sum += parseInt(str.slice(1), 10);
    // sum += Number(str.slice(1));
  }

  return sum;
}
*/

console.log(sumarDigitos("123a45")); // Output 15
console.log(Number("2A"));
console.log(parseInt("2A"));

// 5- Convertir arrays anidados en una array plano

function flattenArray(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultado = resultado.concat(flattenArray(arr[i]));
    } else {
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

let array = [1, 2, 3];
const otro = [4, 5, 6];

array = array.concat(otro);
console.log(array); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, 3], [4, [5]]])); // Salida: [1, 2, 3, 4, 5]

// 6- Balancear string de (), [], {}

function verificarBalance(cadena) {
  const stack = [];

  for (const char of cadena) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const last = stack.pop();
      //Si es carácter de cierre el último debe ser de abertura
      if (
        (char === ")" && last !== "(") ||
        (char === "}" && last !== "{") ||
        (char === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }
  //Al final deberíamos llegar a que el largo del array sea 0
  return stack.length === 0;
}

console.log(verificarBalance("({[])"));
console.log(verificarBalance("{[()()]}"));
console.log(verificarBalance("({[]}"));
