import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAEvoaXsS4ZP0Ax6UKwSYP1Z6DNJVtX_XY",
    authDomain: "ecomerce-3d834.firebaseapp.com",
    projectId: "ecomerce-3d834",
    storageBucket: "ecomerce-3d834.appspot.com",
    messagingSenderId: "627537009775",
    appId: "1:627537009775:web:4136736e5c2bc52695019a",
    measurementId: "G-FDB6658GFF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)

const analytics = getAnalytics(app);