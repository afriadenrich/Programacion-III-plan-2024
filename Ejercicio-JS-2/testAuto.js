import { Auto } from "./auto.js";

let auto1 = new Auto("Rojo", 20000, "Toyota", new Date());
let auto2 = new Auto("Blanco", 10000, "Toyota", new Date());
let auto3 = new Auto("Negro", 5000, "Nissan", new Date());
let auto4 = new Auto("Negro", 8000, "Nissan", new Date());

let autos = [auto1, auto2, auto3, auto4];

console.log(auto2.AgregarImpuestos(1500));
console.log(auto3.AgregarImpuestos(1500));
console.log(auto4.AgregarImpuestos(1500));

console.log(Auto.Add(auto1, auto2));

console.log(auto1.Equals(auto1, auto2));

for (let i = 0; i < autos.length; i++) {
  if (i % 2 === 1) {
    console.log(Auto.MostrarAuto(autos[i]));
  }
}
