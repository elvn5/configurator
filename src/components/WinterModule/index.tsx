import React, { useEffect, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWinterModulesRequest } from "src/redux/winterModule";
import { selectWinterModules } from "src/redux/winterModule/selectors";
import Loader from "src/components/Loader";
import Setup from "src/components/Setup";
import Card from "src/components/Card";

const WinterModule:VFC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectWinterModules);
  console.log(data, loading);

  useEffect(()=>{
    dispatch(getWinterModulesRequest());
  }, [dispatch]);

  return  <div className="grid grid-cols-12">
    <div className="col-span-8">
      <h2 className="text-2xl my-8">
        2. Выберите зимний модуль
      </h2>
      {data && !loading && data.map(({ size, price, img }, index) =>
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
