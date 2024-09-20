import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyD2ER96nE-EtjU_8rKZNdJH0uayFqzSxXE",
  authDomain: "hackaton-app-19412.firebaseapp.com",
  databaseURL: "https://hackaton-app-19412-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hackaton-app-19412",
  storageBucket: "hackaton-app-19412.appspot.com",
  messagingSenderId: "482016611202",
  appId: "1:482016611202:web:f1749c20358a544db19d9b"
};

const app = initializeApp(firebaseConfig);