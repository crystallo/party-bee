import Firebase from 'firebase/app';
import 'firebase/firestore';

import SeedDatabase from '../helpers/seedDB';

const config = {
  apiKey: "AIzaSyD2PJiH0-ni-PnE_l4aNf0PucMpXAV2ht8",
  authDomain: "party-llama-rentals.firebaseapp.com",
  projectId: "party-llama-rentals",
  storageBucket: "party-llama-rentals.appspot.com",
  messagingSenderId: "1010854546887",
  appId: "1:1010854546887:web:eac5f94ceca91da84c5de2",
  measurementId: "G-GHGE1MBXC1"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// SeedDatabase(firebase);

export { firebase, FieldValue };