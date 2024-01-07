// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ZnS5ZR61CFAiGnykC_0ECTRC5jdQh7k",
  authDomain: "food-task-management.firebaseapp.com",
  projectId: "food-task-management",
  storageBucket: "food-task-management.appspot.com",
  messagingSenderId: "749110470625",
  appId: "1:749110470625:web:cd6823f9be73815b86d4a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;