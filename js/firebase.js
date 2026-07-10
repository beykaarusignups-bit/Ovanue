
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyCMw3mC9JoY9qPh_mZzEtDIFj1zKJkliAc",

    authDomain: "ovanue.firebaseapp.com",

    projectId: "ovanue",

    storageBucket: "ovanue.firebasestorage.app",

    messagingSenderId: "24477205910",

    appId: "1:24477205910:web:f884358a83242b46fa49b7"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

export {

    db,

    storage,

    auth

};
