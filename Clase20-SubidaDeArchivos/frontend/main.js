const form = document.getElementById("subida");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita que se recargue la página
  const imagen = document.getElementById("image").files[0];

  const formData = new FormData();

  formData.append("clave", "una clave");
  formData.append("foto", imagen);
  try {
    const peticion = await fetch("http://localhost:3000/carga", {
      method: "POST",
      body: formData,
    });

    const respuesta = await peticion.text();

    console.log(respuesta);
  } catch (e) {
    console.log(e);
  }
});
