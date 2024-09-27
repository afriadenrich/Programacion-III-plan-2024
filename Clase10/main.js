const usuarios = [
  {
    nombre: "Agus",
    apellido: "F",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg",
  },
  {
    nombre: "Nicolas",
    apellido: "F",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg",
  },
  {
    nombre: "Pablo",
    apellido: "R",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg",
  },
  {
    nombre: "Fernando",
    apellido: "D",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg",
  },
];

const contenedor = document.getElementById("listado-usuarios");

usuarios.forEach((usr) => {
  // Crear el elemnto.
  let usuarioElement = document.createElement("div");
  let usuarioImgElement = document.createElement("img");
  let usuarioNombre = document.createElement("p");

  // Darle los datos al elemento.
  usuarioNombre.innerText = usr.nombre + " " + usr.apellido;

  usuarioImgElement.src = usr.imagen;
  usuarioImgElement.height = 20;

  if (usr.apellido === "F") {
    usuarioElement.classList.add("text-danger");
    usuarioElement.classList.add("m-5");
    usuarioElement.classList.add("bg-black");
  }
  /*
  usuarioElement.addEventListener("click", () => {
    ...
  });
  */
  usuarioElement.onclick = () => {
    console.log(usr);
  };

  // usuarioElement.innerText = `${usr.nombre} ${usr.apellido}`;

  // Agregar el elemento al Documento.
  contenedor.appendChild(usuarioElement);
  usuarioElement.appendChild(usuarioImgElement);
  usuarioElement.appendChild(usuarioNombre);
});

const textoHtml = `<div id="creadoDesdeTexto">
<p>Texto de prueba</p>
</div>`;

document.body.insertAdjacentHTML("beforeend", textoHtml);

const elementoCreado = document.getElementById("creadoDesdeTexto");
