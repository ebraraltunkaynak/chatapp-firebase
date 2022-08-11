// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB69o5sFFwZlgEkuI8oGl1LGoGxi4o9-ik",
  authDomain: "chat-app-firebase-6fe17.firebaseapp.com",
  projectId: "chat-app-firebase-6fe17",
  storageBucket: "chat-app-firebase-6fe17.appspot.com",
  messagingSenderId: "812862548137",
  appId: "1:812862548137:web:728d117f895551aa3fe1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);