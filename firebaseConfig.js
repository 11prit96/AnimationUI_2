import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUtX97bzzQOGxeNSfdUxYi1F5A8dK3kTM",
  authDomain: "animation-ui-d2468.firebaseapp.com",
  projectId: "animation-ui-d2468",
  storageBucket: "animation-ui-d2468.appspot.com",
  messagingSenderId: "316750154251",
  appId: "1:316750154251:web:281f65a10cf70cc3f6d50e",
  measurementId: "G-ZM12PD9K0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

