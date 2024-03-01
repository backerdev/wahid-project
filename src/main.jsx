import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVdwuJg3njzeMbo6u5_Wq7sK0pcEXGF48",
  authDomain: "project-one-wahid.firebaseapp.com",
  projectId: "project-one-wahid",
  storageBucket: "project-one-wahid.appspot.com",
  messagingSenderId: "164223985041",
  appId: "1:164223985041:web:cb8daf6ed1c2a64795e630",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
