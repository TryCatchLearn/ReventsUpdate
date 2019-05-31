import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBrlxlOHWLtAxfKJwIp1lDwqp9RD44x-0c",
    authDomain: "revents-2c2ee.firebaseapp.com",
    databaseURL: "https://revents-2c2ee.firebaseio.com",
    projectId: "revents-2c2ee",
    storageBucket: "revents-2c2ee.appspot.com",
    messagingSenderId: "218617380649",
    appId: "1:218617380649:web:c1c7a50ffe8e5eb5"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;