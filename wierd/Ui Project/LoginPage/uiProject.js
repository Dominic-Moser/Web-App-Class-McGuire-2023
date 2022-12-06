function smoothOpen()
{
    login.classList.toggle("open");

}
// Get the input field
var input = document.getElementById("myInput");

//firebase stuff
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTvhk-67qT9bg9C1inKh699ZeNWPysMuc",
  authDomain: "chat-app-11da6.firebaseapp.com",
  projectId: "chat-app-11da6",
  storageBucket: "chat-app-11da6.appspot.com",
  messagingSenderId: "34676840095",
  appId: "1:34676840095:web:29df0c7aae6e8b34daf4aa",
  measurementId: "G-TY1TKXTCSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);