import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDoGt3tbkZnUbvAWT-k2FgP6QsNd43kdSk',
  authDomain: 'vista-2b697.firebaseapp.com',
  databaseURL: 'https://vista-2b697.firebaseio.com',
  projectId: 'vista-2b697',
  storageBucket: 'vista-2b697.appspot.com',
  messagingSenderId: '525332139677',
  appId: '1:525332139677:web:18af11266355736eb40e74',
  measurementId: 'G-CEX6NPX4TV',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
