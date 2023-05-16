// Obtener referencias a los elementos del DOM
const numeroInput = document.getElementById('numero');
const colorInput = document.getElementById('color');
const contenedorDivs = document.getElementById('contenedor');

// Función para crear los divs
function crearDivs() {
  const numero = parseInt(numeroInput.value);
  const color = colorInput.value;

  // Limpiar el contenedor
  contenedorDivs.innerHTML = '';

  // Configurar el estilo del contenedor
  contenedorDivs.style.display = 'grid';
  contenedorDivs.style.gridTemplateColumns = `repeat(${numero}, 1fr)`;
  contenedorDivs.style.gap = '10px';

  // Crear los divs y aplicar el color
  for (let i = 0; i < numero; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    contenedorDivs.appendChild(div);
  }
}

// Evento para crear los divs cuando se cambia el número o el color
numeroInput.addEventListener('input', crearDivs);
colorInput.addEventListener('input', crearDivs);
