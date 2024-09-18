class Auto {
  #_color = String;
  #_precio = Number;
  #_marca = String;
  #_fecha = Date;

  constructor(color, precio, marca = "", fecha = null) {
    this.#_color = color;
    this.#_precio = precio;
    this.#_marca = marca;
    this.#_fecha = fecha;
  }

  /*
  marca color
  new Auto("Verde", 100);
  new Auto("Verde", 100, "BMW");
  new Auto("Verde", 100, "BMW", null);

  potenca(numero, potencia = 2){
    numero ^ potencia
  }
*/

  get color() {
    return this.#_color;
  }

  get precio() {
    return this.#_precio;
  }

  get marca() {
    return this.#_marca;
  }

  get fecha() {
    return this.#_fecha;
  }

  AgregarImpuestos(num) {
    return (this.#_precio += parseFloat(num));
  }

  static MostrarAuto(Auto) {
    console.log(Auto.fecha.getTime());
    return `Auto: 
        Color: ${Auto.color}
        Precio: $${Auto.precio}
        Marca: ${Auto.marca} 
        Fecha:${Auto.fecha}`;
  }

  Equals(Auto1, Auto2) {
    return Auto1.marca === Auto2.marca;
  }

  static Add(Auto1, Auto2) {
    if (Auto1.color === Auto2.color && Auto1.marca === Auto2.marca) {
      //   Auto1 = new Auto(Auto1.color, Auto1.precio, Auto1.marca, Auto1.fecha);
      //   Auto2 = new Auto(Auto2.color, Auto2.precio, Auto2.marca, Auto2.fecha);
      return `Precio :  $${Auto1.precio + Auto2.precio}`;
    } else {
      return ` No se puede agregar un auto con un color o marca diferente. 
 
 Precio: $0`;
    }
  }
}

export { Auto };
