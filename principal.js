// Obtener referencias a los elementos del DOM
const numeroInput = document.getElementById('numero');
const colorInput = document.getElementById('color');
const contenedorDivs = document.getElementById('contenedor');
const botonCrear = document.getElementById('boton-crear');
const botonArcoiris = document.getElementById('boton-arcoiris');

// Función para crear los divs
function crearDivs() {
  const numero = parseInt(numeroInput.value);
  const color = colorInput.value;

  // Limpiar el contenedor
  contenedorDivs.innerHTML = '';

  // Configurar el estilo del contenedor
  contenedorDivs.style.display = 'grid';
  contenedorDivs.style.gridTemplateColumns = `repeat(auto-fill, minmax(100px, 1fr))`;
  contenedorDivs.style.gap = '10px';

  // Crear los divs y aplicar el color y tamaño
  for (let i = 0; i < numero; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    div.style.width = '100px';
    div.style.height = '100px';
    contenedorDivs.appendChild(div);
  }

  // Verificar si el número comienza con 7 y mostrar el botón "Arcoíris" si es así
  if (numero.toString().startsWith('7')) {
    botonArcoiris.style.display = 'block';
  } else {
    botonArcoiris.style.display = 'none';
  }
}

// Función para pintar los bloques con colores del arcoíris
function pintarArcoiris() {
  const bloques = contenedorDivs.querySelectorAll('div');
  const coloresArcoiris = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let indiceColor = 0;

  bloques.forEach((bloque) => {
    bloque.style.backgroundColor = coloresArcoiris[indiceColor];
    indiceColor = (indiceColor + 1) % coloresArcoiris.length;
  });
}

// Evento para crear los divs cuando se hace clic en el botón "Crear Divs"
botonCrear.addEventListener('click', crearDivs);

// Evento para pintar los bloques con colores del arcoíris cuando se hace clic en el botón "Arcoíris"
botonArcoiris.addEventListener('click', pintarArcoiris);
