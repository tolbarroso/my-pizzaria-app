// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnE5ycGneewLVrdlSSAokfJ-e6UmVmhgM",
  authDomain: "my-pizzaria-app.firebaseapp.com",
  projectId: "my-pizzaria-app",
  storageBucket: "my-pizzaria-app.appspot.com",
  messagingSenderId: "871135678515",
  appId: "1:871135678515:web:98b59cef6eb7daca50d346",
  measurementId: "G-V31PM2148L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);