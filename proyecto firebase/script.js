import { obtenerAbueloPorUsuario } from "./firebase.js";

// Obtener referencia a los elementos del DOM
const searchForm = document.getElementById('search-form');
const usuarioInput = document.getElementById('usuario-input');  // Cambié a usuario-input
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

// Agregar evento de envío del formulario
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuarioId = usuarioInput.value.trim();  // Obtener el ID del usuario ingresado
  getDatos(usuarioId);
});

// Función para obtener los datos del usuario
async function getDatos(usuarioId) {
  try {
    const abuelo = await obtenerAbueloPorUsuario(usuarioId);
    if (abuelo) {
      mostrarDatos(abuelo);
    } else {
      resultsDiv.innerHTML = "<p>No se encontraron datos para el usuario especificado.</p>";
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    resultsDiv.innerHTML = "<p>Hubo un error al buscar los datos.</p>";
  }
}

// Función para mostrar los datos en la página web
function mostrarDatos(abuelo) {
  resultsDiv.innerHTML = `
    <h2>Datos del abuelo</h2>
    <p>Nombre: ${abuelo.nombre}</p>
    <p>DNI: ${abuelo.DNI}</p>
    <p>Mutual: ${abuelo.Mutual}</p>
    <p>Medico de Cabecera: ${abuelo["Medico de Cabecera"]}</p>
    <p>Comida preferida: ${abuelo["comida preferida"]}</p>
    <p>Fecha de nacimiento: ${abuelo["fecha de nac"].toDate().toLocaleDateString()}</p>
    <p>Patología: ${abuelo.patologia}</p>
    <p>Medicaciones crónicas: ${abuelo["medicacion cronica"]}</p>
    <p>Días de baño: ${abuelo["dias de baño"]}</p>
  `;
}
