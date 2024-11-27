// Obtener referencia a los elementos del DOM
const searchForm = document.getElementById('search-form');
const dniInput = document.getElementById('dni-input');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');

// Agregar evento de envío del formulario
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dni = dniInput.value.trim();
    // Llamar a la función para obtener los datos de la base de datos
    getDatos(dni);
});

// Función para obtener los datos de la base de datos
function getDatos(dni) {
}


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// Obtenemos la referencia a la base de datos
const dbRef = firebase.database().ref();


import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyB3L75aNXjrHOX61UuQHPBKZpdgau2N2ts",
  authDomain: "los-jazmines.firebaseapp.com",
  projectId: "los-jazmines",
  storageBucket: "los-jazmines.firebasestorage.app",
  messagingSenderId: "125234816008",
  appId: "1:125234816008:web:7634a2c12fc78a4696ddbd",
  measurementId: "G-QVFV5NWH8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();

db.collection('abuelos').doc(dni).get().then((doc) => {
  if (doc.exists) {
    const abuelo = doc.data();
    // Mostrar los datos del abuelo en la página web
    mostrarDatos(abuelo);
  } else {
    console.log('No se encontraron datos para el DNI especificado');
  }
});


function mostrarDatos(abuelo) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <h2>Datos del abuelo</h2>
    <p>DNI: ${abuelo.dni}</p>
    <p>Nombre: ${abuelo.nombre}</p>
    <p>Dias de Baño: ${abuelo.dias_de_baño}</p>
    <p>Mutual: ${abuelo.mutual}</p>
    <p>Medico de Cabecera: ${abuelo.medico_de_cabecera}</p>
    <p>comida preferida: ${abuelo.comida_preferida}</p>
    <p>Fecha de nac: ${abuelo.fecha_de_nac}</p>
    <p>Patologia: ${abuelo.patologia}</p>
    <p>Medicacion cronica: ${abuelo.medicacion_cronica}</p>
  `;
}
 



firebase.ferestore().collection("abuelos").doc(dni).get()