import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYE_ZWHhojXyLaOokqey9b1nQh9qoRnQ0",
  authDomain: "eravend-gmbh.firebaseapp.com",
  projectId: "eravend-gmbh",
  storageBucket: "eravend-gmbh.appspot.com",
  messagingSenderId: "153939955272",
  appId: "1:153939955272:web:c771e0568dbb7b7b8f927d",
  measurementId: "G-3X778WW3G5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);