const express = require("express");
const app = express();
const XLSX = require("xlsx");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// Generar Excel
app.get("/excel", (req, res) => {
  const data = [
    { nombre: "Agus", apellido: "F", edad: 58 },
    { nombre: "Otro", apellido: "otro", edad: 2 },
    { nombre: "Uno más", apellido: "Otro", altura: 99 },
  ];

  const libro = XLSX.utils.book_new();
  const hoja = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(libro, hoja, "Hoja de ejemplo");

  // Pasar el archivo a array de bytes.
  const buffer = XLSX.write(libro, { type: "buffer" });

  res.type("application/vnd.ms-excel");
  res.attachment("Ejemplo Excel.xlsx");

  res.send(buffer);
});

// Generar PDF
const { PDFDocument, rgb } = require("pdf-lib");

app.get("/pdf", async (req, res) => {
  const documento = await PDFDocument.create();
  const pagina = documento.addPage([600, 1200]);

  pagina.drawText("Hola mundo");
  pagina.drawText("Hola mundo en otro lado", {
    x: 15,
    y: 1150,
    size: 25,
    color: rgb(0.5, 0.53, 0.71),
  });

  const pdfEnBytes = await documento.save();

  res.type("application/pdf");
  res.attachment("EjemploPDF.pdf");

  res.send(Buffer.from(pdfEnBytes));
});

// Descargar imagen ya guardada
app.get("/imagen", (req, res) => {
  const imagen = path.join(__dirname, "public", "cirujano.jpg");
  res.attachment("cirujano.jpg");
  res.sendFile(imagen);
});

// Descargar archivo ya guardado
app.get("/archivo", (req, res) => {
  const archivo = path.join(__dirname, "public", "archivo.txt");
  res.attachment("archivo.txt");
  res.sendFile(archivo);
});

app.get("/", (req, res) => {
  res.send("App funcionando");
});

app.listen(3000, () => {
  console.log("Todo funcionando");
});
