import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCYPMZfpNLXqd8GWM80ZaM5OdqjS3sae6c",
    authDomain: "clone-1f6dc.firebaseapp.com",
    projectId: "clone-1f6dc",
    storageBucket: "clone-1f6dc.appspot.com",
    messagingSenderId: "464674520104",
    appId: "1:464674520104:web:9db6ebd9937bc90c04891d"
  };

  firebase.initializeApp(firebaseConfig)

export default firebase.auth()