import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import WinterModule from "src/components/WinterModule";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";
import Footer from "src/components/Footer";
import { useDispatch } from "react-redux";
import { setWinterModule } from "src/redux/tentConfigurations";
import { useNavigate } from "react-router";
import { ERoutes } from "src/constants/types";
import Header from "src/components/Header";
import { useMediaQuery } from "react-responsive";

const WinterModulePage:VFC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    <MainLayout
      header={<Header withDescription={false}/>}
      footer={<Footer buttons={isMobile ? [footerButtons[1]] : footerButtons}
      />}
    >
      <WinterModule/>
    </MainLayout>
  );
};

export default WinterModulePage;
