/**
 * Initialize firebase and it configs
 */
import * as firebase from "firebase";
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDlMW9WN_ZI6FZtDqqBwNtw2PBwM7_qNQo',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: 'https://akube-546eb.firebaseio.com',
  projectId: 'akube-546eb',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESSAGING_ID,
};

let akubeMain = firebase.initializeApp(firebaseConfig, "akubeMain");

export const dataBase = akubeMain.firestore();
export const databaseRealtime = akubeMain.database();
export const mediaStore = akubeMain.storage;
export const authentication = akubeMain.auth();
export const dx = akubeMain;

if (process.env.NODE_ENV === "test") {
  authentication.setPersistence(firebase.auth.Auth.Persistence.NONE);
} else {
  authentication.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
