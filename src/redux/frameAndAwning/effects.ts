import db from "src/firebase/db";
import { collection, getDocs, DocumentData } from "@firebase/firestore";

async function getTents():Promise<DocumentData[]> {
  const tents = collection(db, 'tent');
  const tentSnapshot = await getDocs(tents);
  return tentSnapshot.docs.map(doc => doc.data());
}

export {
  getTents
};
