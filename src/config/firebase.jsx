import { initializeApp } from "firebase/app";
import { httpsCallable } from "firebase/functions";
import { getStripePayments, getProducts, createCheckoutSession } from "@stripe/firestore-stripe-payments";
import { getAnalytics } from "firebase/analytics";
import { loadStripe, } from '@stripe/stripe-js';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

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

const stripeKey = loadStripe('pk_test_51MhD15B0niWLCqAgQGZDnkmH9SbRiwnrLNzgfNijjyanaSCzlfzcjKet2cgV0lbzXoLsjwLxR7AjuYIWBFf8QAPR00ItOrFJHV')



export const db = getFirestore(app)
export const storage = getStorage(app)


const analytics = getAnalytics(app);