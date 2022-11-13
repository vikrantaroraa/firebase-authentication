// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_PUBLIC_API_KEY,
//   authDomain: process.env.REACT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.REACT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.REACT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_PUBLIC_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_PUBLIC_APP_ID,
//   measurementId: process.env.REACT_PUBLIC_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDEUKszzvS-r8dNTMttJFTG3OWBa2L0h4A",
  authDomain: "e-commerce-10cbe.firebaseapp.com",
  projectId: "e-commerce-10cbe",
  storageBucket: "e-commerce-10cbe.appspot.com",
  messagingSenderId: "423201012317",
  appId: "1:423201012317:web:a4e7428c9b6551b2066bb4",
  measurementId: "G-MEMK9PGVM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
