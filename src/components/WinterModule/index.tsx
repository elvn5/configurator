import React, { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Setup from "src/components/Setup";
import Card from "src/components/Card";
import { selectModules } from "src/redux/modules/selectors";
import { selectCurrentBaseConfiguration } from "src/redux/tentConfigurations/selectors";
import Title from "src/components/Title";
import { setWinterModule } from "src/redux/tentConfigurations";
import { ITents } from "src/redux/modules/types";
import { useNavigate } from "react-router";
import { ERoutes } from "src/constants/types";

const WinterModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const currentBaseConfig = useSelector(selectCurrentBaseConfiguration);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectWinterModules = ({ price }:ITents) =>{

    dispatch(setWinterModule(Number(price)));

    navigate(ERoutes.CURTAINS);
  };

  return  <div className="grid grid-cols-12">
    <div className="col-span-8">
      <Title title="2. Выберите зимний модуль"/>
      {data && data.winterModule.map(({
        size,
        price,
        img },
      index) => {
        if(size === currentBaseConfig?.tentSize){
          return  <Card
            key={index}
            price={price}
            tentSize={size}
            img={img}
            color={false}
            onClickSelectModule={selectWinterModules}
            withDetails={false}
          />;
        }
        return null;
      }
      )}
    </div>
    <div className="col-span-4 my-8">
      <Setup progress="20"/>
    </div>
  </div>;
};

export default WinterModule;
