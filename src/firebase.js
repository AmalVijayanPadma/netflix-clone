import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAshIdOLzZm58EjcsnTbu2SlF6haISPDeE",
  authDomain: "netflix-clone-9c515.firebaseapp.com",
  projectId: "netflix-clone-9c515",
  storageBucket: "netflix-clone-9c515.appspot.com",
  messagingSenderId: "618572343637",
  appId: "1:618572343637:web:36204095a275a1d01667dc",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
export default firebaseApp;
