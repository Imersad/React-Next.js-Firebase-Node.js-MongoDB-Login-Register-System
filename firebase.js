import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey || '',
  authDomain: process.env.authDomaiin || '',
  projectId: process.env.projectId || '',
  storageBucket: process.env.storageBucket || '',
  messagingSenderId: process.env.messagingSenderId || '',
  appId: process.env.appId || '',
};

// Initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
