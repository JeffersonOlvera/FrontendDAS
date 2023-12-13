// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

fetch('https://demo-java-spring.onrender.com/actas')
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Mostrar los datos en el frontend
    const dataContainer = document.getElementById('actasList');

    // Iterar sobre cada acta en los datos recibidos
    data.forEach((acta) => {
      const {
        id,
        fecha,
        hora,
        equipoLocal,
        equipoVisitante,
        arbitro,
        ubicacion,
      } = acta;

      // Agregar cada acta al contenedor HTML
      const actaElement = document.createElement('p');
      actaElement.innerHTML = `
        Acta: ${id}, fecha: ${fecha}, hora: ${hora}, Equipo local: ${equipoLocal}, 
        Equipo visitante: ${equipoVisitante}, Arbitro: ${arbitro}, ubicación: ${ubicacion}
      `;
      dataContainer.appendChild(actaElement);
    });
  })
  .catch((error) => {
    // Manejar errores en caso de que la solicitud falle
    console.error('Ha ocurrido un error:', error);
  });

// Obtener referencia al botón de enviar
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('actaForm');

// Event listener para el clic en el botón
form.addEventListener('submit', () => {
  // Obtener los valores de los campos del formulario
  const fecha = document.getElementById('inputFecha').value;
  const hora = document.getElementById('inputHora').value;
  const ubicacion = document.getElementById('inputUbicacion').value;
  const equipoLocal = document.getElementById('inputLocal').value;
  const equipoVisitante = document.getElementById('inputVisitante').value;
  const arbitro = document.getElementById('inputArbitro').value;

  // Crear un objeto con los datos del formulario
  const formData = {
    id: 0,
    fecha: fecha,
    hora: hora,
    equipoLocal: equipoLocal,
    equipoVisitante: equipoVisitante,
    arbitro: arbitro,
    ubicacion: ubicacion,
  };

  // Realizar la solicitud POST al backend
  fetch('https://demo-java-spring.onrender.com/acta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result); // Puedes hacer algo con el resultado si es necesario
    })
    .catch((error) => {
      console.error('Error al enviar los datos al backend:', error);
    });
});
