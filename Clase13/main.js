import Swal from "./node_modules/sweetalert2/dist/sweetalert2.esm.all.js";

//const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  Swal.fire("Hola mundo", "Cómo están?", "error");
});

const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort((a, b) => {
  return a - b;
}); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words", "B", "A", "C"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

console.log(frutas, puntos, cosas);

class Serie {
  id = 0;
  nombre = "";

  toJsonString() {
    return JSON.stringify(this);
  }

  static createFromJson(json) {
    let serie = new Serie();
    serie.id = json.id;

    return serie;
  }
}

const datosDeLaApi = {};
datosDeLaApi.image = datosDeLaApi.image.medium;

const serie = new Serie(datosDeLaApi.id, datosDeLaApi.image.medium);
serie.toJsonString();

const otraSerie = Serie.createFromJson({});
otraSerie.toJsonString();
