import React, { VFC } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Card from "src/components/Card";
import { selectModules } from "src/redux/modules/selectors";
import { selectCurrentBaseConfiguration } from "src/redux/tentConfigurations/selectors";
import Setup from "src/components/Setup";
import { ICard } from "src/redux/modules/types";
import { setWinterModule } from "src/redux/tentConfigurations";
import Title from "src/components/Title";
import { ERoutes } from "src/constants/types";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

const WinterModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const currentBaseConfig = useSelector(selectCurrentBaseConfiguration);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectWinterModules = ({ price }:ICard) =>{

    dispatch(setWinterModule(Number(price)));

    navigate(ERoutes.CURTAINS);
  };

  return  <div className="module grid grid-cols-12">
    <div className="module__main col-span-8">
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
    {isMobile ?
      null
      :
      (<div className={cn("col-span-4 my-8")}>
        <Setup/>
      </div>)}

  </div>;
};

export default WinterModule;
