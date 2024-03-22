// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6ec40.firebaseapp.com",
  projectId: "mern-blog-6ec40",
  storageBucket: "mern-blog-6ec40.appspot.com",
  messagingSenderId: "21429732149",
  appId: "1:21429732149:web:e8ac0313ff99617970827c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);