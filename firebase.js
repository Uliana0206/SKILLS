import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBncr4roXY-aDz13a0Z_4JaLpeA9H8eO7k",
  authDomain: "test-8dd03.firebaseapp.com",
  projectId: "test-8dd03",
  storageBucket: "test-8dd03.appspot.com",
  messagingSenderId: "1035815566487",
  appId: "1:1035815566487:web:6b1b6f4af3abc3fabd3dd2",
  measurementId: "G-3JCTJQN8GD"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };