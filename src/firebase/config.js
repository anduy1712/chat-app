import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAJixKVsdkD5G0v9d9TsrhtEintpjfmF6E",
  authDomain: "chat-app-16e11.firebaseapp.com",
  projectId: "chat-app-16e11",
  storageBucket: "chat-app-16e11.appspot.com",
  messagingSenderId: "884649291569",
  appId: "1:884649291569:web:7005a1bb9719ccd0dd8a10",
  measurementId: "G-1M2Q9E0BSP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
