// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQAe5BCxhHTaZrgupHva8eb04z2i6JZho",
  authDomain: "irfutubesite.firebaseapp.com",
  databaseURL: "https://irfutubesite-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "irfutubesite",
  storageBucket: "irfutubesite.appspot.com",
  messagingSenderId: "706464855338",
  appId: "1:706464855338:web:55cab48985ba4a4bc15a53",
  measurementId: "G-81VK25216J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
function register(){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("account created sucessfully!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}