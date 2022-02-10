import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBb7m5mV8TQk-AydljIF24qincSLtQM55Q",
    authDomain: "slack-clone-31e04.firebaseapp.com",
    databaseURL: "https://slack-clone-31e04-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "slack-clone-31e04",
    storageBucket: "slack-clone-31e04.appspot.com",
    messagingSenderId: "562000622952",
    appId: "1:562000622952:web:f9e86b5be0e4a73b7c12dd",
    measurementId: "G-XF9MTN5LY7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;