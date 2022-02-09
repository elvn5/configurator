import { getFirestore } from "@firebase/firestore";
import { app } from "src/firebase/firebase.config";
import { Firestore } from "@firebase/firestore";


const db:Firestore = getFirestore(app);

export default db as Firestore;
