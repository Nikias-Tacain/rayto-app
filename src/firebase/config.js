import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCoxj7-WZhSWg6weSibFatebg9CJA8WTa4",
  authDomain: "react-app-8b256.firebaseapp.com",
  projectId: "react-app-8b256",
  storageBucket: "react-app-8b256.appspot.com",
  messagingSenderId: "871962068569",
  appId: "1:871962068569:web:a5c96e0c45ece2a7b9d348"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);