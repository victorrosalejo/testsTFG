function hola(nombre) {
  return `Hola, ${nombre}!`;
}

function adios(nombre) {
  return `Adiós, ${nombre}!`;
}

function crearBoton(texto) {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.onclick = () => alert("¡Hiciste clic!");
  return btn;
}

export { adios, crearBoton, hola };
