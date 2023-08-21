import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDVX3vusss8DQ_wc_CBiUNoS8wueAnMKk8",
    authDomain: "random-project-abf6c.firebaseapp.com",
    projectId: "random-project-abf6c",
    storageBucket: "random-project-abf6c.appspot.com",
    messagingSenderId: "663675446704",
    appId: "1:663675446704:web:60090a7f0473b530bba275",
    measurementId: "G-D57H3NY3EZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)

  const analytics = getAnalytics(app);