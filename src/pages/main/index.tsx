import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "src/components/MainLayout";
import Card from "src/components/Card";
import { tentActions } from "src/redux/frameAndAwning/actions";
import { selectFrameAndAwnings } from "src/redux/frameAndAwning/selectors";

const Main:FC = ( ) => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectFrameAndAwnings);

  useEffect(()=>{
    dispatch({ type: tentActions.GET_TENTS_REQUEST });
  }, []);

  return (
    <MainLayout>
      <h2 className="text-2xl my-8">1. Выберите каркас и тент.</h2>
      <div className="flex flex-wrap main">
        {data && data.map(props=> <Card key={props.id} {...props} /> )}
      </div>
    </MainLayout>
  );
};


export default Main;
