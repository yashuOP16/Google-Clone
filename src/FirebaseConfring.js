// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHwcc-jinysL3_cUZh22JVGwXSXbL0QB4",
  authDomain: "login-signin-790c8.firebaseapp.com",
  projectId: "login-signin-790c8",
  storageBucket: "gs://login-signin-790c8.appspot.com",
  messagingSenderId: "852162511179",
  appId: "1:852162511179:web:ccab34c0021f2bacb768ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

