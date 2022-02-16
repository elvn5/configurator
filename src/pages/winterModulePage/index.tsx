import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import WinterModule from "src/components/WinterModule";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";
import Footer from "src/components/Footer";
import { useDispatch } from "react-redux";
import { setWinterModule } from "src/redux/tentConfigurations";
import { useNavigate } from "react-router";
import { ERoutes } from "src/constants/types";

const WinterModulePage:VFC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useScrollIntoView();


  const footerButtons = [
    {
      title : "Назад",
      className: "footer__back",
      onClick: () => {
        navigate(-1);
      },
    },
    {
      title: "Без зимнего комплекта",
      className: "footer__without-module",
      onClick: () => {
        dispatch(setWinterModule(null));
        navigate(ERoutes.CURTAINS);
      }
    }
  ];

  return (
    <MainLayout footer={<Footer buttons={footerButtons}/>}>
      <WinterModule/>
    </MainLayout>
  );
};

export default WinterModulePage;
