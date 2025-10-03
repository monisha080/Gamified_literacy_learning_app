// src/utils/firebaseconfig.js

// Import the function to initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


// ✅ FIXED: storageBucket should end in .appspot.com
const firebaseConfig = {
  apiKey: "AIzaSyAgfA2VwtUBNeMDUPwaQHGyjzYycxVX_a0",
  authDomain: "gamifiedliteracyapp.firebaseapp.com",
  projectId: "gamifiedliteracyapp",
  storageBucket: "gamifiedliteracyapp.firebasestorage.app",
  messagingSenderId: "694639985651",
  appId: "1:694639985651:web:63e0e7be058fb928d24886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

// Export the Firebase app so other files can use it
export { db, auth };