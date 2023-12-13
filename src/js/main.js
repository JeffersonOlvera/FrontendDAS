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

// Obtener referencia al formulario y al botón de enviar
const form = document.getElementById('actaForm');
const submitButton = document.getElementById('submitButton');

// Event listener para el clic en el botón
submitButton.addEventListener('click', function () {
  // Obtener los valores de los campos del formulario
  const fecha = document.getElementById('inputFecha').value;
  const hora = document.getElementById('inputHora').value;
  const ubicacion = document.getElementById('inputLocal').value;
  const equipoLocal = document.getElementById('inputEquipoLocal').value;
  const equipoVisitante = document.getElementById('inputVisitante').value;
  const arbitro = document.getElementById('inputArbitro').value;

  // Crear un objeto con los datos del formulario
  const formData = {
    fecha: fecha,
    hora: hora,
    ubicacion: ubicacion,
    equipoLocal: equipoLocal,
    equipoVisitante: equipoVisitante,
    arbitro: arbitro,
  };

  // Realizar la solicitud POST al backend
  fetch('https://demo-java-spring.onrender.com/acta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then((data) => {
      // Hacer algo con la respuesta del backend si es necesario
      console.log('Respuesta del backend:', data);
      // Aquí puedes actualizar la interfaz o hacer otras acciones en el frontend
    })
    .catch((error) => {
      // Manejar errores en caso de que la solicitud falle
      console.error('Error al enviar los datos al backend:', error);
    });
});
