import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * web app's Firebase configuration
 */
const firebaseConfig = {
  apiKey: 'AIzaSyANuRPcmvuI18MbTpmYaH2Q3uWXFjBpBEY',
  authDomain: 'personal-website-88e33.firebaseapp.com',
  projectId: 'personal-website-88e33',
  storageBucket: 'personal-website-88e33.appspot.com',
  messagingSenderId: '330722402333',
  appId: '1:330722402333:web:58b90377153e4d183966f4',
};

/**
 * Initialize Firebase and Firestore
 */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
