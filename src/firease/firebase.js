import firebase  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfBg2mcHOLYZqWRBZ96ba2CFc6R-sigbQ",
  authDomain: "instagram-clone-yo.firebaseapp.com",
  projectId: "instagram-clone-yo",
  storageBucket: "instagram-clone-yo.appspot.com",
  messagingSenderId: "171003847917",
  appId: "1:171003847917:web:396f8e82ff6193f1bc58e4",
  measurementId: "G-3V4MJEF64D"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

export {firebase}