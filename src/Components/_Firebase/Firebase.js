//"use client";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZI30wfWXZH2yR1yCuLwNoeMF7CJKxqQ",
  authDomain: "mishlohemed-daf95.firebaseapp.com",
  projectId: "mishlohemed-daf95",
  storageBucket: "mishlohemed-daf95.appspot.com",
  messagingSenderId: "130117464346",
  appId: "1:130117464346:web:844f3e5f51060a8c1abca3",
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
