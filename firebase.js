// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";;
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACNKraQpNbbjECCieU9hRxqEGF-X6E5Tc",
  authDomain: "reel-a529b.firebaseapp.com",
  projectId: "reel-a529b",
  storageBucket: "reel-a529b.appspot.com",
  messagingSenderId: "372412572986",
  appId: "1:372412572986:web:46db43cf4915e34a885c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
export {auth,storage,db}; 
export default app;