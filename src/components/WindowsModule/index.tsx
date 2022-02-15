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

const WindowsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectInnerWindows = ({ price, size, type }:ICard) => {
    if(price && size && type){
      dispatch(setWindowsModule({
        price: price,
        size: size,
        count: 4,
        type: type,
      }));
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
    <div className="col-span-4 my-8">
      <Setup progress="60"/>
    </div>
  </div>;
};

export default WindowsModule;
