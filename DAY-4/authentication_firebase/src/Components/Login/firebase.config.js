import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCFJBhiyNuQ_PQdyY9IWmCRDIVsySwkSyQ",
  authDomain: "extra--project.firebaseapp.com",
  projectId: "extra--project",
  storageBucket: "extra--project.appspot.com",
  messagingSenderId: "865907295494",
  appId: "1:865907295494:web:cf95c5d1a9afcceeef0a87"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();