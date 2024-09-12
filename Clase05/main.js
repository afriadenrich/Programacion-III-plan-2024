console.log("Hola mundo.");

let nombre = "Fernando";
let Nombre = "Carla";

let edad = 33;
let altura = 180.5;

const EDAD_MINIMA = 18;

console.log(EDAD_MINIMA);

nombre = "a";

// EDAD_MINIMA = 22; ERROR -> NO PUEDE CAMBIAR PORQUE ES CONSTANTE

console.log(Nombre);
console.log(EDAD_MINIMA);

// nombre_de_la_persona // snake_case
// nombreDeLaPersona // camelCase

console.log("");

console.log(typeof edad);
console.log(typeof altura);
console.log(typeof nombre);
console.log(typeof Nombre);

console.log("Tipo Boolean");
let esVerdadero = true; // tipo boolean
let esFalso = false; // tipo boolean

console.log(typeof esVerdadero);

let operacion = "a" / 5;
console.log(operacion);
console.log(typeof operacion);

let dato;

console.log(dato);

console.log(null);

// OBJECT

let persona = {
  nombre: "Fernando",
  apellido: "Fernandez",
  saludar: function () {
    console.log("Hola soy " + this.nombre + " desde un object");
  },
};

class Persona {
  //Atributos
  nombre;
  apellido;

  //Constructor
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  //Métodos
  saludar() {
    console.log("Hola soy " + this.nombre);
  }
}

let persona2 = new Persona("Agustin", "Friadenrich");
let persona3 = new Persona("Nicolas", "Ferrero");
let persona4 = new Persona("Fernando", "Fernandez");

console.log(persona);
console.log(persona2);

persona2.saludar();
persona.saludar();

// ARRAYS.
console.log("Arrays!!");

let listado = [1, 2, 3, 5, 8, 13, 21, 34];
let nombres = ["Fernando", "Carla", 455, true, true, "Zapatilla"];

let personas = [persona2, persona3, persona4];

personas[1].saludar();
personas[2].saludar();

let usuarios = [
  { alias: "Fernando", password: 1234 },
  { alias: "Fernando", password: 13123 },
];

// CONDICIONALES

let falso = false;
let numero = 0;

if (persona === persona4) {
  console.log("Son iguales");
} else {
  console.log("No son lo mismo");
}
