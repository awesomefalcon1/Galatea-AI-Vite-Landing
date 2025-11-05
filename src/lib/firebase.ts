import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlw_fzjEs-NbOabJkHEpGbfBdDEt7RVvI",
  authDomain: "galatea-ai.firebaseapp.com",
  databaseURL: "https://galatea-ai-default-rtdb.firebaseio.com",
  projectId: "galatea-ai",
  storageBucket: "galatea-ai.firebasestorage.app",
  messagingSenderId: "727737899444",
  appId: "1:727737899444:web:16152c4885a96302af7ae1",
  measurementId: "G-6ZQT56XSCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
