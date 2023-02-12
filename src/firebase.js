import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXKnie-lkKFzfA2zyqvpWvraqVlHTZkJE",
    authDomain: "linkedin-clone-2440c.firebaseapp.com",
    projectId: "linkedin-clone-2440c",
    storageBucket: "linkedin-clone-2440c.appspot.com",
    messagingSenderId: "67282408097",
    appId: "1:67282408097:web:903f586a68bfba70f056e0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};