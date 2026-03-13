import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// import.meta.env funciona en Vite; process.env funciona en Node.js (con dotenv)
const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY ?? process.env.VITE_FIREBASE_API_KEY,
  authDomain: "entrega1-react.firebaseapp.com",
  projectId: "entrega1-react",
  storageBucket: "entrega1-react.firebasestorage.app",
  messagingSenderId: "392304060630",
  appId: "1:392304060630:web:29db4546e4593b57538177",
  measurementId: "G-86N4RSE5JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
