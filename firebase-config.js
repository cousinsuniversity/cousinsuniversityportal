// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6m82pGHLZj_UEF0Bv1hYQz51oRQtakwE",
  authDomain: "school-portal-system-7bbb5.firebaseapp.com",
  projectId: "school-portal-system-7bbb5",
  storageBucket: "school-portal-system-7bbb5.firebasestorage.app",
  messagingSenderId: "401910630319",
  appId: "1:401910630319:web:dd4f61ba3afaa8c587d15a",
  measurementId: "G-YPJB8LJ3TL"
};

// Initialize Firebase and Firestore
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
