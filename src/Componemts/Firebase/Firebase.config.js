// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLwE2FdaEhvC6bD_3kb0iOZ02lUSOWa7w",
  authDomain: "news-portal-5aa8d.firebaseapp.com",
  projectId: "news-portal-5aa8d",
  storageBucket: "news-portal-5aa8d.appspot.com",
  messagingSenderId: "659961318679",
  appId: "1:659961318679:web:acbf056e620f3506f63b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;