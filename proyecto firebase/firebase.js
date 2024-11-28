import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3L75aNXjrHOX61UuQHPBKZpdgau2N2ts",
  authDomain: "los-jazmines.firebaseapp.com",
  projectId: "los-jazmines",
  storageBucket: "los-jazmines.firebasestorage.app",
  messagingSenderId: "125234816008",
  appId: "1:125234816008:web:7634a2c12fc78a4696ddbd",
  measurementId: "G-QVFV5NWH8X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener un abuelo por su ID de documento (usuario1, usuario2, etc.)
export const obtenerAbueloPorUsuario = async (usuarioId) => {
  try {
    // Obtenemos la referencia al documento de ese usuario
    const docRef = doc(db, "abuelos", usuarioId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Datos encontrados para el usuario:", usuarioId);
      console.log(docSnap.data());
      return docSnap.data(); // Retorna los datos del abuelo encontrado
    } else {
      console.log("No se encontró el documento para el usuario especificado");
      return null;
    }
  } catch (error) {
    console.error("Error al buscar abuelo por usuario:", error);
    throw error;
  }
};

export { db };
