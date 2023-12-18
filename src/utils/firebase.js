// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCo370MoGbElJW5e_CPH-aTlccb8q-rPmk",
    authDomain: "neflixgpt-81ea8.firebaseapp.com",
    projectId: "neflixgpt-81ea8",
    storageBucket: "neflixgpt-81ea8.appspot.com",
    messagingSenderId: "203904347136",
    appId: "1:203904347136:web:7444ad2f3a75ee3009bce5",
    measurementId: "G-HSH7PEGR20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();