import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANFSxJY_7x3sTMRRVDx0RYDpS1Moi65O8",
  authDomain: "app-commerce-6184b.firebaseapp.com",
  projectId: "app-commerce-6184b",
  storageBucket: "app-commerce-6184b.appspot.com",
  messagingSenderId: "58517762726",
  appId: "1:58517762726:web:982e40ec9ba7aa44f4fa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)