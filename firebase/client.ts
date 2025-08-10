// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvuv0dEpPkeSFb1RXrtSMfx1S4eMJUn6U',
  authDomain: 'prepace-e1db8.firebaseapp.com',
  projectId: 'prepace-e1db8',
  storageBucket: 'prepace-e1db8.firebasestorage.app',
  messagingSenderId: '28711030781',
  appId: '1:28711030781:web:41b1ab5ff7239e68e19394',
  measurementId: 'G-74C8V994JX',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
