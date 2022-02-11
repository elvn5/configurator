import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Main from "src/pages/main";
import WinterModule from "src/pages/winterModulePage";
import { useSelector } from "react-redux";
import { selectCurrentConfiguration } from "src/redux/tentConfigurations/selectors";

function App(): JSX.Element {
  const { currentConfiguration: { base } } = useSelector(selectCurrentConfiguration);

  const navigate = useNavigate();

  useEffect(()=>{
    if(!base){
      navigate("/");
    }
  }, [base, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/winter-module" element={<WinterModule/>}/>
    </Routes>
  );
}

export default App;
