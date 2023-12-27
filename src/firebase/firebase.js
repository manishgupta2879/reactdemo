import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQxE1LXZTkkT_8dcEkKrNxNBZPkvp93Ds",
  authDomain: "filehost-f342e.firebaseapp.com",
  projectId: "filehost-f342e",
  storageBucket: "filehost-f342e.appspot.com",
  messagingSenderId: "10442024408",
  appId: "1:10442024408:web:270acde54909bafa10bead"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

export default db;
export {app, auth};


