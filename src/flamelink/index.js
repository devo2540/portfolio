import * as firebase from 'firebase'
import flamelink from 'flamelink'

const firebaseConfig = {
  apiKey: "AIzaSyC6WEylWSqzFl1Q1RYlbKLaX4SPjKQqCPo",
  authDomain: "portfolio-fdc8f.firebaseapp.com",
  databaseURL: "https://portfolio-fdc8f.firebaseio.com",
  projectId: "portfolio-fdc8f",
  storageBucket: "portfolio-fdc8f.appspot.com",
  messagingSenderId: "252862865370",
  appId: "1:252862865370:web:1bec0cfca78f381ce4eae3",
  measurementId: "G-T1S0MF4WT5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const flamelinkApp = flamelink({ 
  firebaseApp,
  dbType: 'cf', 
})