import React  from "react";
import { Routes, Route } from "react-router";
import Main from "src/pages/main";
import WinterModule from "src/pages/winterModulePage";

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/winter-module" element={<WinterModule/>}/>
    </Routes>
  );
}

export default App;
