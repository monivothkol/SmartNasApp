import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig={
apiKey: "AIzaSyBeeJ19mGbfyLSn5bBuZXA4bGqwPyHlpNc",
  authDomain: "smartnasreact.firebaseapp.com",
  projectId: "smartnasreact",
  storageBucket: "smartnasreact.appspot.com",
  messagingSenderId: "129871381422",
  appId: "1:129871381422:web:70c3323b0516cec0623e3f",
  measurementId: "G-7LJR63L63T"
}

auth().settings.appVerificationDisabledForTesting = true
initializeApp(firebaseConfig);

export default () => {
    return (firebase, auth);
}