export function hola(nombre) {
  return `Hola, ${nombre}!`;
}

export function adios(nombre) {
  return `Adiós, ${nombre}!`;
}

export function crearBoton(texto) {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.onclick = () => alert("¡Hiciste clic!");
  return btn;
}
