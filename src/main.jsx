import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './firebase/config'
// import firebase from 'firebase/app';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import 'firebase/firestore';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
