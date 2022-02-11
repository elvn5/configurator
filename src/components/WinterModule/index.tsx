import React, { VFC } from "react";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";
import Setup from "src/components/Setup";
import Card from "src/components/Card";
import { selectModules } from "src/redux/modules/selectors";

const WinterModule:VFC = () => {
  const { data, loading } = useSelector(selectModules);

  return  <div className="grid grid-cols-12">
    <div className="col-span-8">
      <h2 className="text-2xl my-8">
        2. Выберите зимний модуль
      </h2>
      {data && !loading && data.winterModule.map(({ size, price, img }, index) =>
        <Card
          key={index}
          price={price}
          tentSize={size}
          img={img}
          color={false}
        />
      )}
      {loading && <Loader/>}
    </div>
    <div className="col-span-4 my-8">
      <Setup/>
    </div>
  </div>;
};

export default WinterModule;
