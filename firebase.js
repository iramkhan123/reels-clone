// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";;
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVZTIvREAO3aSzPF6dftJ98TKkYSaq0I",
  authDomain: "reel-clone-cee4b.firebaseapp.com",
  projectId: "reel-clone-cee4b",
  storageBucket: "reel-clone-cee4b.appspot.com",
  messagingSenderId: "918831378765",
  appId: "1:918831378765:web:22ec7dba6ff75a72a7c704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();
export {auth,storage,db}; 
export default app;