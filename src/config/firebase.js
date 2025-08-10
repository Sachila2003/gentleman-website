import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC_yJzZ5SAA7nJgWR4rvvOe5Sew6kJnM6s",
    authDomain: "gentleman-4f833.firebaseapp.com",
    databaseURL: "https://gentleman-4f833-default-rtdb.firebaseio.com",
    projectId: "gentleman-4f833",
    storageBucket: "gentleman-4f833.firebasestorage.app",
    messagingSenderId: "509422307713",
    appId: "1:509422307713:web:962fee2809afdad1760080",
    measurementId: "G-1L4T3ZS136"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
