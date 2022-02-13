import React, { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "src/components/Title";
import Card from "src/components/Card";
import Setup from "src/components/Setup";
import { selectModules } from "src/redux/modules/selectors";
import { useNavigate } from "react-router";
import { ITents } from "src/redux/modules/types";
import { ERoutes } from "src/constants/types";

const RoofWindowsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectRoofWindows = (args:ITents) => {
    console.log(args);

    return;
    navigate(ERoutes.FINAL);
  };

  console.log(dispatch, navigate);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <Title title="5. Выберите окна в стене"/>
        {data && data.windows.map((window, index)=>
          <Card
            key={window.price + index}
            img={window.img}
            title={window.type}
            color={false}
            price={window.price}
            onClickSelectModule={selectRoofWindows}
            withDetails={true}/>
        )}
      </div>
      <div className="col-span-4 my-8">
        <Setup progress="80"/>
      </div>
    </div>
  );
};

export default RoofWindowsModule;
