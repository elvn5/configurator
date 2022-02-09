import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "src/components/MainLayout";
import Card from "src/components/Card";
import { tentActions } from "src/redux/frameAndAwning/actions";
import { selectFrameAndAwnings } from "src/redux/frameAndAwning/selectors";
import Loader from "src/components/Loader";
import Logo from "src/components/Logo";

const Main:FC = ( ) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectFrameAndAwnings);

  useEffect(()=>{
    dispatch({ type: tentActions.GET_TENTS_REQUEST });
  }, [dispatch]);

  return (
    <MainLayout>
      <h2 className="text-2xl my-8">
        1. Выберите каркас и тент.
      </h2>
      <div className="flex flex-wrap main">
        {data && !loading && data.map(props=> <Card color={true} key={props.id} {...props} /> )}
        {loading && <Loader/>}
        {!loading && <Logo/>}
      </div>
    </MainLayout>
  );
};


export default Main;
