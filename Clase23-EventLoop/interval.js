const arranque = Date.now();

const idIntervalo = setInterval(() => {
  const delay = Date.now() - arranque;

  console.log("Ejecuta esta callback cada 3 segundos. Delay: " + delay);
}, 3000);

setTimeout(() => {
  const delay = Date.now() - arranque;

  console.log(
    "Rompe la callback del intervalo después de 12 segundos. Delay: " + delay
  );
  clearInterval(idIntervalo);
}, 12020);
