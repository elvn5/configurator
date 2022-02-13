import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import WinterModule from "src/components/WinterModule";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";

const WinterModulePage:VFC = () => {

  useScrollIntoView();

  return (
    <MainLayout>
      <WinterModule/>
    </MainLayout>
  );
};

export default WinterModulePage;
