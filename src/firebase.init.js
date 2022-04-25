// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe_ln62oxRo6QVHam0vLuezos5DLmPPIE",
  authDomain: "ema-john-2a662.firebaseapp.com",
  projectId: "ema-john-2a662",
  storageBucket: "ema-john-2a662.appspot.com",
  messagingSenderId: "14884780589",
  appId: "1:14884780589:web:9d04b418f76b1babb756a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth