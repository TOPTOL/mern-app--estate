// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-project-286f9.firebaseapp.com",
  projectId: "mern-estate-project-286f9",
  storageBucket: "mern-estate-project-286f9.appspot.com",
  messagingSenderId: "801577236636",
  appId: "1:801577236636:web:f847f79ecb26ec68fe5559"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);