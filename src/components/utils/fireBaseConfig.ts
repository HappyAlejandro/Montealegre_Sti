import * as firebase from 'firebase/app';

// Required for side-effects
require("firebase/database");
require("firebase/storage");
require("firebase/auth");
require("firebase/firestore");

let config = {
    apiKey: "AIzaSyBfLYZZbi6yRpIzbkaAuahJOoipfv9zvvI",
    authDomain: "pinturillo-avanzada.firebaseapp.com",
    databaseURL: "https://pinturillo-avanzada.firebaseio.com",
    projectId: "pinturillo-avanzada",
    storageBucket: "pinturillo-avanzada.appspot.com",
    messagingSenderId: "232911057882",
    appId: "1:232911057882:web:b13c70545f080376"
  };
firebase.initializeApp(config);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth =  firebase.auth();

export default db;

