// src/utils/firebaseconfig.js

// Import the function to initialize Firebase
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

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

export let _Auth=getAuth(app);

export let _DB=getFirestore(app)

// Export the Firebase app so other files can use it
export default app;
