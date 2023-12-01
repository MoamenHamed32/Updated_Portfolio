import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { collection, getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);

export const contactsCol = collection(firestore, "contacts");
