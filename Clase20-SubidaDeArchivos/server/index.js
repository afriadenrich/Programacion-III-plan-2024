// Express
const express = require("express");
const app = express();

// cors
const cors = require("cors");
app.use(cors());

// Multer - manejo de subida de archivos
const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    //const mimetype = "image/jpeg"
    //const mimetype = "image/jpg"
    //const mimetype = "image/png"
    const mimetype = file.mimetype;
    const [tipo, extension] = mimetype.split("/"); // ["image", "jpeg"]
    if (tipo !== "image") {
      callback(new Error("No es imagen"));
    } else {
      const nombre = file.originalname + "-" + Date.now() + "." + extension;
      callback(null, nombre);
    }
  },
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
});

// const upload = multer({ dest: "uploads/"});
const upload = multer({ storage: storage });

app.post("/carga", upload.single("foto"), (req, res) => {
  console.log(req.file);
  const pruebaBody = req.body.clave;
  res.send("Foto cargada " + pruebaBody);
});

app.get("/", (req, res) => {
  res.send("Todo funcionando");
});

app.listen(3000, () => {
  console.log("x");
});
