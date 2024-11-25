// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYx3CPOrDnS9t8ThsdfYxmEfT4nXe5-E",
  authDomain: "blog-d57f2.firebaseapp.com",
  projectId: "blog-d57f2",
  storageBucket: "blog-d57f2.firebasestorage.app",
  messagingSenderId: "126547199228",
  appId: "1:126547199228:web:d12a7e44f720e74d934379"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;