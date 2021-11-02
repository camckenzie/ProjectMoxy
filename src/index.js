import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj1cUTxZZXWPtqVhsPeOG_o_YpQPvGK3U",
  authDomain: "projectmoxy-f781d.firebaseapp.com",
  projectId: "projectmoxy-f781d",
  storageBucket: "projectmoxy-f781d.appspot.com",
  messagingSenderId: "55582070189",
  appId: "1:55582070189:web:8f38a38778cae55c167d24",
  measurementId: "G-79Y1H1QETY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById('root'));

