// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdM_NpMPfxugkYEaWQZakxx2tzXlp4yf8",
  authDomain: "practice-ff692.firebaseapp.com",
  databaseURL: "https://practice-ff692-default-rtdb.firebaseio.com",
  projectId: "practice-ff692",
  storageBucket: "practice-ff692.appspot.com",
  messagingSenderId: "622327775239",
  appId: "1:622327775239:web:029471144cfa6d6052aaa2",
  measurementId: "G-G2RBN4P521"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
