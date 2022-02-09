import db from "src/firebase/db";
import { collection, getDocs, DocumentData } from "@firebase/firestore";

async function getWinterModules():Promise<DocumentData[]> {
  const winterModules = collection(db, 'winterModules');
  const winterModulesSnapshot = await getDocs(winterModules);
  return winterModulesSnapshot.docs.map(doc => doc.data());
}

export {
  getWinterModules,
};
