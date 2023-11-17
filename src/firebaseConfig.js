// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCILcEYQ3lSjzKPTR1Fvk9t-W30UDnvFAU",
  authDomain: "attendance-app-b2e8e.firebaseapp.com",
  projectId: "attendance-app-b2e8e",
  storageBucket: "attendance-app-b2e8e.appspot.com",
  messagingSenderId: "208017461802",
  appId: "1:208017461802:web:6454d9af54b022195e2953",
  measurementId: "G-DM1JDT7SQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
