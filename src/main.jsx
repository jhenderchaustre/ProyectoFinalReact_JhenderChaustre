import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtW-ak6mGDXjYAY-fj-hJH8PNRXrGreMY",
  authDomain: "rhinostore-88c83.firebaseapp.com",
  projectId: "rhinostore-88c83",
  storageBucket: "rhinostore-88c83.appspot.com",
  messagingSenderId: "889991827700",
  appId: "1:889991827700:web:74a3282c7514b279d8cea1"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
