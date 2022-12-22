import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTnzaYsuI9_R2AA-n3_pflBDpQN6-vdV8",
    authDomain: "netflix-clone-nitish.firebaseapp.com",
    projectId: "netflix-clone-nitish",
    storageBucket: "netflix-clone-nitish.appspot.com",
    messagingSenderId: "1055349967695",
    appId: "1:1055349967695:web:785be1695187e62aec933a",
    measurementId: "G-4G3VRQPM7Q",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const auth = firebase.auth();
const db = app.firestore();
const rdb = firebase.database();
const G_provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, rdb, G_provider };
