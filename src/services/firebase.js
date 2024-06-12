import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnE5ycGneewLVrdlSSAokfJ-e6UmVmhgM",
  authDomain: "my-pizzaria-app.firebaseapp.com",
  projectId: "my-pizzaria-app",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET", // Atualize com o valor correto
  messagingSenderId: "871135678515",
  appId: "YOUR_FIREBASE_APP_ID", // Atualize com o valor correto
  measurementId: "YOUR_FIREBASE_MEASUREMENT_ID" // Atualize com o valor correto
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('logged in');
  } else {
    console.log('no user');
  }
});

export { auth, firebaseApp };