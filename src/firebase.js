import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9RZXYzdtyqZXX-OVPMshmO34TZasPNts",
    authDomain: "bt3103-week8-6fbc1.firebaseapp.com",
    databaseURL: "https://bt3103-week8-6fbc1.firebaseio.com",
    projectId: "bt3103-week8-6fbc1",
    storageBucket: "bt3103-week8-6fbc1.appspot.com",
    messagingSenderId: "550310774830",
    appId: "1:550310774830:web:5060173ec4c9aa2a9e37bf",
    measurementId: "G-K7NCT6R2TJ"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
