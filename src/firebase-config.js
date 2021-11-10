import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: 'auth2-38fee.firebaseapp.com',

  projectId: 'auth2-38fee',

  storageBucket: 'auth2-38fee.appspot.com',

  messagingSenderId: '415288709812',

  appId: '1:415288709812:web:81f7d54ef169803f72fde1',
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const storage = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const db = getFirestore();

export { storage, db, auth };
