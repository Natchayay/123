import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsmslWUjf-Xea61fBHFFPbTn1iveHCpt4",
  authDomain: "database-d35bc.firebaseapp.com",
  projectId: "database-d35bc",
  storageBucket: "database-d35bc.appspot.com",
  messagingSenderId: "484655563530",
  appId: "1:484655563530:web:3d4fcc0515fd2ecc3a30f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;