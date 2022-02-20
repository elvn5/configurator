import React, { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "src/components/Title";
import Card from "src/components/Card";
import Setup from "src/components/Setup";
import { selectModules } from "src/redux/modules/selectors";
import { useNavigate } from "react-router";
import { ICard } from "src/redux/modules/types";
import { ERoutes } from "src/constants/types";
import { TColors, TWindowsState } from "src/components/Card/types";
import { setRoofWindows } from "src/redux/tentConfigurations";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

const RoofWindowsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const selectRoofWindows = (
    { price, size, type }:ICard, _colors?:TColors[], windows?:TWindowsState[]) => {
    if(price && size && type && windows){
      dispatch(setRoofWindows({
        type,
        size,
        price,
        windows
      }));
    }
    navigate(ERoutes.FINAL);
  };


  return (
    <div className="module grid grid-cols-12">
      <div className={cn("module__main col-span-8 ", isMobile && "flex justify-center flex-col")}>
        <Title title="5. Выберите окна в стене"/>
        {data && data.roofWindows.map((window, index)=>
          <Card
            key={window.price + index}
            img={window.img}
            title={window.type}
            color={false}
            size={window.size}
            type={window.type}
            price={window.price}
            onClickSelectModule={selectRoofWindows}
            withDetails={false}/>
        )}
      </div>
      {isMobile ? null : <div className="col-span-4 my-8">
        <Setup/>
      </div>}
    </div>
  );
};

export default RoofWindowsModule;
