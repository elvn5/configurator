import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router";
import Main from "src/pages/main";
import WinterModulePage from "src/pages/winterModulePage";
import { selectCurrentConfiguration } from "src/redux/tentConfigurations/selectors";
import CurtainsPage from "src/pages/curtainsPage";
import WindowsPage from "src/pages/WindowsPage";
import { ERoutes } from "src/constants/types";
import RoofWindowsPage from "src/pages/RoofWindowsPage";

function App(): JSX.Element {
  const { currentConfiguration: { base } } = useSelector(selectCurrentConfiguration);

  const navigate = useNavigate();

  useEffect(()=>{
    if(!base){
      navigate(ERoutes.MAIN);
    }
  }, [base, navigate]);

  return (
    <Routes>
      <Route path={ERoutes.MAIN} element={<Main />} />
      <Route path={ERoutes.WINTER_MODULE} element={<WinterModulePage/>}/>
      <Route path={ERoutes.CURTAINS} element={<CurtainsPage/>}/>
      <Route path={ERoutes.WINDOWS} element={<WindowsPage/>}/>
      <Route path={ERoutes.ROOF_WINDOWS} element={<RoofWindowsPage/>}/>
    </Routes>
  );
}

export default App;
