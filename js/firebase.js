import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmDaIoEZex91CS93x0iEMgrA-Ka7iO0LQ",
  authDomain: "otakufit-a8a84.firebaseapp.com",
  projectId: "otakufit-a8a84",
  storageBucket: "otakufit-a8a84.firebasestorage.app",
  messagingSenderId: "862712022885",
  appId: "1:862712022885:web:bf237f6620c41223e3438c",
  measurementId: "G-WEBPLWZNTW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
