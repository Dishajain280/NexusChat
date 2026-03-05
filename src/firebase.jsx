// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ8FbzM81ibgBsPxWz6tjCCInvVLuSV0c",
  authDomain: "chat-9f8e0.firebaseapp.com",
  projectId: "chat-9f8e0",
  storageBucket: "chat-9f8e0.firebasestorage.app",
  messagingSenderId: "936161292169",
  appId: "1:936161292169:web:b20e0af21e5bf777093b58",
  measurementId: "G-4KQ5M5DHBH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);