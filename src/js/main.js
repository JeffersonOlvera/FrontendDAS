// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

fetch('https://demo-java-spring.onrender.com/actas')
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Mostrar los datos en el frontend
    const dataContainer = document.getElementById('actasList');
    const { id, fecha, hora, local, visitante, arbitro, ubicacion } = data;

    // const formattedTime = new Date(time).toLocaleString(); // Formatear la fecha y hora

    dataContainer.innerHTML = `
    <p> Acta: ${id}, fecha: ${fecha}, hora: ${hora}, Equipo local: ${local}, Equipo visitante: ${visitante}, Arbitro: ${arbitro}, ubicación: ${ubicacion}  </p>
  `;
  })
  .catch((error) => {
    // Manejar errores en caso de que la solicitud falle
    console.error('Ha ocurrido un error:', error);
  });
