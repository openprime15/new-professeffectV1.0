import firebase from "firebase";

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "mck-professeffect.firebaseapp.com",
  databaseURL: "https://mck-professeffect.firebaseio.com",
  projectId: "mck-professeffect",
  storageBucket: "mck-professeffect.appspot.com",
  messagingSenderId: "720806938339",
  appId: "1:720806938339:web:36ee38427765d05ba127d6",
  measurementId: "G-ZSZ25KLRLR",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
