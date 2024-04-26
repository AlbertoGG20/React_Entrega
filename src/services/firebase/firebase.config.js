// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNeWecDRN6ge4YuNe1oE2-wFXlG-S978w",
  authDomain: "studens-5c119.firebaseapp.com",
  databaseURL: "https://studens-5c119-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studens-5c119",
  storageBucket: "studens-5c119.appspot.com",
  messagingSenderId: "21836272242",
  appId: "1:21836272242:web:754fcbb6367a290ccea8eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;