import React  from "react";
import { Routes, Route } from "react-router";
import Main from "src/pages/main";

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
