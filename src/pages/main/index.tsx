import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "src/components/MainLayout";
import Card from "src/components/Card";
import { selectModules } from "src/redux/modules/selectors";
import Loader from "src/components/Loader";
import Logo from "src/components/Logo";
import { getModulesRequest } from "src/redux/modules";

const Main:FC = ( ) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectModules);

  useEffect(()=>{
    dispatch(getModulesRequest());
  }, [dispatch]);

  return (
    <MainLayout>
      <h2 className="text-2xl my-8">
        1. Выберите каркас и тент.
      </h2>
      <div className="flex flex-wrap main">
        {data && !loading && data.tents.map(props=> <Card color={true} key={props.id} {...props} /> )}
        {loading && <Loader/>}
        {!loading && <Logo/>}
      </div>
    </MainLayout>
  );
};


export default Main;
