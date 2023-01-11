// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtZLfQA_Mj6N64vES5Ld33aDST_4bUPtI",
  authDomain: "testmap-2ffaa.firebaseapp.com",
  projectId: "testmap-2ffaa",
  storageBucket: "testmap-2ffaa.appspot.com",
  messagingSenderId: "1091512672520",
  appId: "1:1091512672520:web:82fced80340d65dea38cbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
