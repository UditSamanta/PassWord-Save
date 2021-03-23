import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    
    apiKey: "AIzaSyBGz1zm9wE5L29cJPkwqtHA6uBBI8tgBq4",
    authDomain: "pass-lock-bee49.firebaseapp.com",
    databaseURL: "https://pass-lock-bee49.firebaseIO.com",
    projectId: "pass-lock-bee49",
    storageBucket: "pass-lock-bee49.appspot.com",
    messagingSenderId: "33907810389",
    appId: "1:33907810389:web:ace5054a531a9d18fa34dc"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
