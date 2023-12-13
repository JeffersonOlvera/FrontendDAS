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
