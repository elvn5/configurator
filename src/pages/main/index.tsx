import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "src/components/MainLayout";
import Card from "src/components/Card";
import { selectModules } from "src/redux/modules/selectors";
import Loader from "src/components/Loader";
import Logo from "src/components/Logo";
import { getModulesRequest } from "src/redux/modules";
import { ITents } from "src/redux/modules/types";
import { addConfiguration } from "src/redux/tentConfigurations";
import { useNavigate } from "react-router";
import { TColors } from "src/components/Card/types";
import Title from "src/components/Title";
import { ERoutes } from "src/constants/types";

const Main:FC = ( ) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectModules);

  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getModulesRequest());
  }, [dispatch]);

  const onClickSelectTent = (tentObj:ITents, colorsState?:Array<TColors>) => {
    const selectedColor = colorsState?.find(element => element.selected)?.color || "";

    dispatch(addConfiguration(Object.assign({}, tentObj,{ selectedColor: selectedColor } )));

    navigate(ERoutes.WINTER_MODULE);
  };

  return (
    <MainLayout>
      <Title title={"1. Выберите каркас и тент."}/>
      <div className="flex flex-wrap main">
        {data && !loading && data.tents.map(props=>
          <Card
            color={true}
            key={props.id}
            {...props}
            withDetails={true}
            onClickSelectModule={onClickSelectTent}
          /> )}
        {loading && <Loader/>}
        {!loading && <Logo/>}
      </div>
    </MainLayout>
  );
};


export default Main;
