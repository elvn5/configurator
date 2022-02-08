import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Main from "src/pages/main";
import { getFirestore, collection, getDocs, Firestore } from "@firebase/firestore";
import { app } from "src/firebase/firebase.config";

function App(): JSX.Element {

  const db = getFirestore(app);

  async function getTents(db: Firestore) {
    const tents = collection(db, 'tent');
    const tentSnapshot = await getDocs(tents);
    const tentList = tentSnapshot.docs.map(doc => doc.data());
    return tentList;
  }

  useEffect(()=>{
    getTents(db).then(res=>{
      console.log(res);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
