import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAsBPXgGEY5cDS7lJ3dFAMEuvFM519pRJA",
  authDomain: "react-fitnes.firebaseapp.com",
  projectId: "react-fitnes",
  storageBucket: "react-fitnes.appspot.com",
  messagingSenderId: "876295340914",
  appId: "1:876295340914:web:936190af1536103f7653eb",
  measurementId: "G-D92491L6P6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);