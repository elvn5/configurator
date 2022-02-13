import React, { VFC } from "react";
import Title from "src/components/Title";
import Card from "src/components/Card";
import Setup from "src/components/Setup";
import { useDispatch, useSelector } from "react-redux";
import { selectModules } from "src/redux/modules/selectors";
import { useNavigate } from "react-router";
import { ITents } from "src/redux/modules/types";
import { setWindowsModule } from "src/redux/tentConfigurations";
import { ERoutes } from "src/constants/types";

const WindowsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectInnerWindows = (args:ITents) => {
    if(args.price){
      dispatch(setWindowsModule(args.price));
    }

    navigate(ERoutes.ROOF_WINDOWS);
  };

  return <div className="grid grid-cols-12">
    <div className="col-span-8">
      <Title title="4. Выберите окна в кровле"/>
      {data && data.windows.map((window, index)=>
        <Card
          key={window.price + index}
          img={window.img}
          title={window.type}
          color={false}
          price={window.price}
          onClickSelectModule={selectInnerWindows}
          withDetails={true}/>
      )}
    </div>
    <div className="col-span-4 my-8">
      <Setup progress="60"/>
    </div>
  </div>;
};

export default WindowsModule;
