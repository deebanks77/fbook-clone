import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADWmziT6sZtVCP7CaEXedXg6xx54pRBqs",
  authDomain: "facebook-clone-dfdd7.firebaseapp.com",
  projectId: "facebook-clone-dfdd7",
  storageBucket: "facebook-clone-dfdd7.appspot.com",
  messagingSenderId: "555648383307",
  appId: "1:555648383307:web:a875cf8d30298a0ac710ce",
  measurementId: "G-47PDCPG0EF",
};

const firebaseApp = initializeApp(firebaseConfig);

// For Realtime Database
const db = getDatabase(firebaseApp);

// For Firestore Database
const firestoreDB = getFirestore(firebaseApp);

// const auth = firebase.auth();
const auth = getAuth(firebaseApp);

// For google Authentication
const provider = new GoogleAuthProvider();

export { provider, auth };
export default firestoreDB;
