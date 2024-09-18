import Auto from "./auto.js";

export default class Garage {
  #_razonSocial;
  #_precioPorHora;
  #_autos;

  constructor(razonSocial, precioPorHora) {
    // Tipo de dato  -  Clase
    // string   -       String
    // number   -       Number

    if (typeof razonSocial === "string") {
      this.#_razonSocial = razonSocial;
    }
    this.#_precioPorHora = precioPorHora;
    this.#_autos = [];
  }

  get RazonSocial() {
    return this.#_razonSocial;
  }
  get PrecioPorHora() {
    return this.#_precioPorHora;
  }
  get Autos() {
    return this.#_autos;
  }

  MostrarGarage() {
    const autosList = this.#_autos
      .map((auto) => {
        return;
        `\nColor : ${auto.color}\n
        Precio: ${auto.precio}\n
        Marca: ${auto.marca}\n
        Año: ${auto.año}`;
      })
      .join("\n");
    return `\nRazon Social: ${this.#_razonSocial}
                 \nPrecio por Hora : ${this.#_precioPorHora} 
                 \nAutos:  ${autosList}`;
  }

  Equals(auto) {
    return this.#_autos.includes(auto);
  }

  Add(Auto) {
    if (this.#_autos.includes(Auto)) {
      console.log("El auto ya se encuentra en el garage");
    } else {
      this.#_autos.push(Auto);
    }
  }

  Remove(Auto) {
    if (this.#_autos.includes(Auto)) {
      this.#_autos.splice(this.#_autos.indexOf(Auto), 1);
    } else {
      console.log("El auto no se encuentra dentro del garage");
    }
  }
}

// export { Garage };
