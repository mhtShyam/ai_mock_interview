// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADz3yksma3ccQh5hO0LEjJVADAMXpWcVU",
  authDomain: "prepwise-e0db9.firebaseapp.com",
  projectId: "prepwise-e0db9",
  storageBucket: "prepwise-e0db9.firebasestorage.app",
  messagingSenderId: "421563257399",
  appId: "1:421563257399:web:0b343324e016f4fdff65b2",
  measurementId: "G-1JKGBHNCPR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);