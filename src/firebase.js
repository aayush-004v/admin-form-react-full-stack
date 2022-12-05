// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKWsorNxBOXbTkprbmid4jxXornUH122w",
    authDomain: "login-auth-4c08c.firebaseapp.com",
    projectId: "login-auth-4c08c",
    storageBucket: "login-auth-4c08c.appspot.com",
    messagingSenderId: "1065618640199",
    appId: "1:1065618640199:web:e325a622f1b26537781062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

