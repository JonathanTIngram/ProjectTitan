import firebase from 'firebase';

// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDSSn5jfIyVK_1rKJd6j9OKmbCAvttDIKg",
    authDomain: "titan-2c2e1.firebaseapp.com",
    projectId: "titan-2c2e1",
    storageBucket: "titan-2c2e1.appspot.com",
    messagingSenderId: "110743809522",
    appId: "1:110743809522:web:6da229d2ca6071e1a7cf6b"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

export default fire;