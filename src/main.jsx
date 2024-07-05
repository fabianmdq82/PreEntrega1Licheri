import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyC8HFpU1xNASEmKzk3Jr8Yx4R43y7WFizo",
  authDomain: "jugueteria-toypiola.firebaseapp.com",
  projectId: "jugueteria-toypiola",
  storageBucket: "jugueteria-toypiola.appspot.com",
  messagingSenderId: "360797662952",
  appId: "1:360797662952:web:53e8de82366d5f1d35635d",
  measurementId: "G-EYQ0D55LRQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)