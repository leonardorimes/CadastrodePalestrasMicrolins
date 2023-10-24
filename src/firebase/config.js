import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH5N2AnHYvqX8X6IV134yI1QB6HYzK0zU",
  authDomain: "pdpmicrolins-faed5.firebaseapp.com",
  projectId: "pdpmicrolins-faed5",
  storageBucket: "pdpmicrolins-faed5.appspot.com",
  messagingSenderId: "259999154109",
  appId: "1:259999154109:web:099bede0c1fff253625cd4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
