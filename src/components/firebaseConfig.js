// src/utils/firebaseconfig.js

// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ✅ Correct Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGfBJdJT821xmS-udYp8qTY6UULxvvZyE",
  authDomain: "gamifiedliteracyapp-506b0.firebaseapp.com",
  projectId: "gamifiedliteracyapp-506b0",
  storageBucket: "gamifiedliteracyapp-506b0.appspot.com",  // ✅ fixed
  messagingSenderId: "559758321997",
  appId: "1:559758321997:web:4781479f745dd4058aef04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export so you can import in other files
export { db, auth };
