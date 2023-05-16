
const numeroInput = document.getElementById('numero');
const colorInput = document.getElementById('color');
const contenedorDivs = document.getElementById('contenedor');
const botonCrear = document.getElementById('boton-crear');
const botonArcoiris = document.getElementById('boton-arcoiris');

function crearDivs() {
  const numero = parseInt(numeroInput.value);
  const color = colorInput.value;

  contenedorDivs.innerHTML = '';

  contenedorDivs.style.display = 'grid';
  contenedorDivs.style.gridTemplateColumns = `repeat(auto-fill, minmax(100px, 1fr))`;
  contenedorDivs.style.gap = '10px';

  for (let i = 0; i < numero; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    div.style.width = '100px';
    div.style.height = '100px';
    contenedorDivs.appendChild(div);
  }

  if (numero.toString().startsWith('7')) {
    botonArcoiris.style.display = 'block';
  } else {
    botonArcoiris.style.display = 'none';
  }
}
function pintarArcoiris() {
  const bloques = contenedorDivs.querySelectorAll('div');
  const coloresArcoiris = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let indiceColor = 0;

  bloques.forEach((bloque) => {
    bloque.style.backgroundColor = coloresArcoiris[indiceColor];
    indiceColor = (indiceColor + 1) % coloresArcoiris.length;
  });
}

botonCrear.addEventListener('click', crearDivs);

botonArcoiris.addEventListener('click', pintarArcoiris);
