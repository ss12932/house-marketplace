// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaZEMJGAyr1kXALdEk53DYXYwuZog4RLw',
  authDomain: 'house-marketplace-103b2.firebaseapp.com',
  projectId: 'house-marketplace-103b2',
  storageBucket: 'house-marketplace-103b2.appspot.com',
  messagingSenderId: '476785729682',
  appId: '1:476785729682:web:1717483bc8531df07e464b',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
