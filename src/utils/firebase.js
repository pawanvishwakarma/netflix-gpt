// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjKoZiWWzhhzEwcebIwx8JPoGFecOYKgg",
  authDomain: "netflixgpt-e32ed.firebaseapp.com",
  projectId: "netflixgpt-e32ed",
  storageBucket: "netflixgpt-e32ed.appspot.com",
  messagingSenderId: "812217550386",
  appId: "1:812217550386:web:06ef2ca8f83be69c3d5e2b",
  measurementId: "G-5VETSNK1MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();