import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjqA6mvlcY6DsEVPiuz7ROI8Sc853Drd4",
  authDomain: "eravend-1.firebaseapp.com",
  projectId: "eravend-1",
  storageBucket: "eravend-1.appspot.com",
  messagingSenderId: "865897105182",
  appId: "1:865897105182:web:8a58d00d8decade7066b0f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
