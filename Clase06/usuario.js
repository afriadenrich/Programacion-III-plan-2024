export default class Usuario {
  // atributos
  #correo = "";
  #contraseña = "";

  // constructor
  constructor(correo, contraseña) {
    this.#correo = correo;
    this.#contraseña = contraseña;
  }

  // métodos

  toString() {
    const cadena = this.#correo + " - " + this.#contraseña;
    return cadena;
  }

  get correo() {
    return this.#correo;
  }

  set correo(correo) {
    this.#correo = correo.toLowerCase();
  }
}
/*
const PI = Math.PI;

export { PI };

export const E = Math.E;
*/
// export default Usuario;
