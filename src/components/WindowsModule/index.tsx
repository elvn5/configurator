import React, { VFC } from "react";
import Title from "src/components/Title";
import Card from "src/components/Card";
import Setup from "src/components/Setup";
import { useDispatch, useSelector } from "react-redux";
import { selectModules } from "src/redux/modules/selectors";
import { useNavigate } from "react-router";
import { ICard } from "src/redux/modules/types";
import { setWindowsModule } from "src/redux/tentConfigurations";
import { ERoutes } from "src/constants/types";
import { TColors, TWindowsState } from "src/components/Card/types";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";

const WindowsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const selectInnerWindows = (
    { price, size, type }:ICard, _colors?:TColors[], windows?:TWindowsState[]
  ) => {
    if(price && size && type && windows){
      dispatch(setWindowsModule({
        price: price,
        size: size,
        type: type,
        windows
      }));
    }

    navigate(ERoutes.ROOF_WINDOWS);
  };

  return <div className="module grid grid-cols-12">
    <div className={cn("module__main col-span-8 ", isMobile && "flex justify-center flex-col")}>
      <Title title="4. Выберите окна в кровле"/>
      {data && data.windows.map((window, index)=>
        <Card
          key={window.price + index}
          img={window.img}
          type={window.type}
          color={false}
          withPrice={true}
          price={window.price}
          size={window.size}
          onClickSelectModule={selectInnerWindows}
          withDetails={false}
        />
      )}
    </div>
    {isMobile ? null : <div className="col-span-4 my-8">
      <Setup/>
    </div>}
  </div>;
};

export default WindowsModule;
