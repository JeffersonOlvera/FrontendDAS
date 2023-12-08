// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

fetch('https://demo-java-spring.onrender.com/')
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Mostrar los datos en el frontend
    const dataContainer = document.getElementById('data-container');
    const { title, message, time } = data;

    const formattedTime = new Date(time).toLocaleString(); // Formatear la fecha y hora

    dataContainer.innerHTML = `
    <h2>${title}</h2>
    <p>${message}</p>
    <p>Time: ${formattedTime}</p>
  `;
  })
  .catch((error) => {
    // Manejar errores en caso de que la solicitud falle
    console.error('Ha ocurrido un error:', error);
  });
