// Export SIN default
import { Auto } from "./auto.js";

// Imporar todo bajo una misma varialbe
import * as Constantes from "./constantes.js";

// Poner solo el nombre trae lo que es por defecto
import Garage from "./garage.js";

let auto1 = new Auto("Rojo", 20000, "Toyota", new Date());

console.log(auto1 instanceof Garage);
console.log(auto1 instanceof Auto);
console.log(auto1.fecha instanceof Date);

let auto2 = new Auto("Blanco", 10000, "Toyota", new Date());
let auto3 = new Auto("Negro", 5000, "Nissan", new Date());
let auto4 = new Auto("Negro", 8000, "Nissan", new Date());

const miGarage = new Garage("Garage Central", 10);

miGarage.Add(auto1);
miGarage.Add(auto2);
miGarage.Add(auto3);
miGarage.Add(auto1);
console.log(miGarage.MostrarGarage());

console.log(miGarage.Equals(auto4));

miGarage.Remove(auto2);
miGarage.Remove(auto2);

console.log(miGarage.MostrarGarage());
