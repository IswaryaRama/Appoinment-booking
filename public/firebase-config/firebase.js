// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsdqwyQk6hY0z37yS3z06gQrCn14o92-I",
  authDomain: "student-teacher-booking-edffb.firebaseapp.com",
  projectId: "student-teacher-booking-edffb",
  storageBucket: "student-teacher-booking-edffb.firebasestorage.app",
  messagingSenderId: "293983803147",
  appId: "1:293983803147:web:a8cfbca11c9c7059fa340e",
  measurementId: "G-XD5Z0SLW5C"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase services
export { auth, db };
