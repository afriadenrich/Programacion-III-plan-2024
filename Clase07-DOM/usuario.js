export default class Usuario {
  #_nombre = String;
  #_mail = String;
  #_password = String;

  constructor(nombre, mail, password) {
    this.#_nombre = nombre;
    this.#_mail = mail;
    this.#_password = password;
  }

  get Nombre() {
    return this.#_nombre;
  }

  get Mail() {
    return this.#_mail;
  }

  get Password() {
    return this.#_password;
  }

  static stringify(usuario) {
    return JSON.stringify(usuario);
  }

  static parse(cadena) {
    return JSON.parse(cadena);
  }

  Registro() {
    /*
        let usuario = {
          nombre: nombre,
          mail: mail,
          password: password,
        };*/

    let usuario = this;

    // let usuario = new Usuario(...);

    // Forma resumida
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Forma alargada
    if (JSON.parse(localStorage.getItem("usuarios")) === undefined) {
      usuarios = [];
    } else {
      usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    // let usuarios = [];
    // Forma try catch
    /*
        try {
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
        } catch(error){
            console.log(error);
            usuarios = [];
        }
    */
    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  static Listado() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios;
  }

  Login() {
    let respuesta = "";

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let verificacionEmail = usuarios.find(
      (usuario) => usuario._mail === this.#_mail
    );

    if (verificacionEmail) {
      let verificacionPassword =
        verificacionEmail._password === this.#_password;

      if (verificacionPassword) {
        respuesta = "Verificado";
      } else {
        respuesta = "Error en los datos";
      }
    } else {
      respuesta = "Usuario no registrado";
    }

    return respuesta;
  }
}