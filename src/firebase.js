import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import firebase from './fire'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Jayant Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjNXoa0iNxwe3CNUuyfyVLDMMHbGNUm-I",
    authDomain: "whatsapp-clone-3fe64.firebaseapp.com",
    projectId: "whatsapp-clone-3fe64",
    storageBucket: "whatsapp-clone-3fe64.appspot.com",
    messagingSenderId: "1033095764026",
    appId: "1:1033095764026:web:5f9dce8090d719924c7d03",
    measurementId: "G-9NVYZSNCRF"
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Navneet's database
// const firebaseConfig = {
//     apiKey: "AIzaSyDREOdI6ycZSCmtvbyOHAohF7p-ENcMIas",
//     authDomain: "whatsapp-clone-f7b49.firebaseapp.com",
//     projectId: "whatsapp-clone-f7b49",
//     storageBucket: "whatsapp-clone-f7b49.appspot.com",
//     messagingSenderId: "468349954236",
//     appId: "1:468349954236:web:eed1eba53f7c5b39c148b9",
//     measurementId: "G-4RVE8QSKD9"
//   };




const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


const authorization = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { authorization, provider, signInWithPopup };
export default db;