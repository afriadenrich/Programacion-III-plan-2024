const { jsPDF } = window.jspdf;

const doc = new jsPDF();
// https://raw.githack.com/MrRio/jsPDF/master/docs/module-html.html

//doc.text("Hello world!", 10, 10);
function guardar() {
  doc.html(document.getElementById("boton"), {
    callback: function (doc) {
      doc.save("boton.pdf");
    },
    x: 10,
    y: 10,
  });
}
