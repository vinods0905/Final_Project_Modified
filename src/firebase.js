// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL6X6Q1bp-9lD0QTN0_dvceE2UqNWzacE",
  authDomain: "linkedin-clone-training-fd1e6.firebaseapp.com",
  projectId: "linkedin-clone-training-fd1e6",
  storageBucket: "linkedin-clone-training-fd1e6.appspot.com",
  messagingSenderId: "800247340556",
  appId: "1:800247340556:web:11c369a46f1801bfae1829",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();
const storage = getStorage();

export { app, auth, db, provider, timestamp, storage };
