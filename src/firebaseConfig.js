// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASHCL51tHbUxYKx6VD4AT42xvN9Fa7HWs",
  authDomain: "mypersona-45207.firebaseapp.com",
  projectId: "mypersona-45207",
  storageBucket: "mypersona-45207.firebasestorage.app",
  messagingSenderId: "496123681959",
  appId: "1:496123681959:web:6959226f1bf23e914acf82",
  measurementId: "G-6R91JMS3DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, analytics };