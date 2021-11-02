import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDj1cUTxZZXWPtqVhsPeOG_o_YpQPvGK3U",

    authDomain: "projectmoxy-f781d.firebaseapp.com",
  
    projectId: "projectmoxy-f781d",
  
    storageBucket: "projectmoxy-f781d.appspot.com",
  
    messagingSenderId: "55582070189",
  
    appId: "1:55582070189:web:8f38a38778cae55c167d24",
  
    measurementId: "G-79Y1H1QETY"
};

const app = Firebase.initializeApp(config);
const db = app.database();
export default db;
