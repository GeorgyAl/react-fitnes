import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA2b-sXcs2yhpFPxcy9K8etKnMWUs3ZULY",
  authDomain: "react-fitnes3.firebaseapp.com",
  projectId: "react-fitnes3",
  storageBucket: "react-fitnes3.appspot.com",
  messagingSenderId: "829707640245",
  appId: "1:829707640245:web:23d58ce550e05b0ae6cdfc",
  measurementId: "G-4QSBNBTZNW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);