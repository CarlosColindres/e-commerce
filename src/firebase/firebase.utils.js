import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAp79lJ1PFSdUijAQL2aTswJdtUHWQ79uQ",
  authDomain: "crown-db-3ca87.firebaseapp.com",
  databaseURL: "https://crown-db-3ca87.firebaseio.com",
  projectId: "crown-db-3ca87",
  storageBucket: "crown-db-3ca87.appspot.com",
  messagingSenderId: "569934395149",
  appId: "1:569934395149:web:f0710b9728b01c47202244",
  measurementId: "G-6FZMJ5KYHW",
};

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
