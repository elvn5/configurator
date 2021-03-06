import db from "src/firebase/db";
import { collection, getDocs, DocumentData } from "@firebase/firestore";

async function getModules():Promise<Record<string, DocumentData[]>> {
  const tents = collection(db, 'tent');
  const winterModules = collection(db, 'winterModules');
  const curtains = collection(db, 'curtains');
  const windows = collection(db, 'windows');
  const roofWindows = collection(db, 'roofWindows');

  const tentSnapshot = await getDocs(tents);
  const winterModuleSnapshot = await getDocs(winterModules);
  const curtainsSnapshot = await getDocs(curtains);
  const windowsSnapshot = await getDocs(windows);
  const roofWindowsSnapshot = await getDocs(roofWindows);

  return {
    tents: tentSnapshot.docs.map(doc => doc.data()),
    winterModule: winterModuleSnapshot.docs.map(doc => doc.data()),
    windows: windowsSnapshot.docs.map(doc => doc.data()),
    roofWindows: roofWindowsSnapshot.docs.map(doc => doc.data()),
    curtains: curtainsSnapshot.docs.map(doc => doc.data()),
  };

}

export {
  getModules
};
