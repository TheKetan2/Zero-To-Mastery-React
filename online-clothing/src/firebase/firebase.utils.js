import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDtZgXaqw6C_tQTDP1v-FvkOpmRgMdpGs",
  authDomain: "crwn-db-d16fd.firebaseapp.com",
  databaseURL: "https://crwn-db-d16fd.firebaseio.com",
  projectId: "crwn-db-d16fd",
  storageBucket: "crwn-db-d16fd.appspot.com",
  messagingSenderId: "382809190901",
  appId: "1:382809190901:web:4bc3589bd35d52d454f0bc",
  measurementId: "G-YDK65GL800"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
