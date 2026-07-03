// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKtDvF6zW4Fl5slNN0BAkAa1SeFubUkC0",
  authDomain: "business-online-a88d7.firebaseapp.com",
  projectId: "business-online-a88d7",
  storageBucket: "business-online-a88d7.firebasestorage.app",
  messagingSenderId: "330407890753",
  appId: "1:330407890753:web:ed74face92bf3bfe031bc0",
  measurementId: "G-3N9N08CHRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
