// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyA8ybEiKx3-Q8QuosepLZsOp38yBLi0VCY",
    authDomain: "messenger-app-c5199.firebaseapp.com",
    projectId: "messenger-app-c5199",
    storageBucket: "messenger-app-c5199.appspot.com",
    messagingSenderId: "355522744444",
    appId: "1:355522744444:web:05e66d03aea4943abd79f9",
    measurementId: "G-JYTZBN6VHV"
  });

  const db=firebaseApp.firestore();
  export default db;