import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyB7Fz6EQw6YamgqAUcoCJLSKvxpI2CH0Hw",
    authDomain: "disney-f7bd9.firebaseapp.com",
    projectId: "disney-f7bd9",
    storageBucket: "disney-f7bd9.appspot.com",
    messagingSenderId: "492392841767",
    appId: "1:492392841767:web:0e90804209a069a65e8402",
    measurementId: "G-298MTXFE0V"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;