//dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
//project files
import { FIREBASE_CONFIG } from "../firebase.env";
// 1) when seeding the database you'll have to uncomment this!
 //import { seedDatabase } from '../seed';

const firebaseInstance = initializeApp(FIREBASE_CONFIG);
// 2) when seeding the database you'll have to uncomment this!
 //seedDatabase(firebaseInstance);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
export const storageInstance = getStorage(firebaseInstance);
export const analytics = getAnalytics(firebaseInstance);

