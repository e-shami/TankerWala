import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration object here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { firebase, db };
