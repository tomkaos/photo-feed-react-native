import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDPI8mSjuQkA_Ahvid1ilZ-OPfknFtAnOk",
  authDomain: "instaclone-a1a33.firebaseapp.com",
  databaseURL: "https://instaclone-a1a33.firebaseio.com",
  projectId: "instaclone-a1a33",
  storageBucket: "instaclone-a1a33.appspot.com",
  messagingSenderId: "1089415375791"
};
firebase.initializeApp(config);

export const f = firebase;
export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
