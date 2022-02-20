import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import WindowsModule from "src/components/WindowsModule";
import Footer from "src/components/Footer";
import { useNavigate } from "react-router";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";
import { ERoutes } from "src/constants/types";
import Header from "src/components/Header";
import { useMediaQuery } from "react-responsive";

const WindowsPage:VFC = () =>{
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
      title: "Без окон в стене",
      className: "footer__without-module",
      onClick: () => {
        navigate(ERoutes.ROOF_WINDOWS);
      }
    }
  ];

  return (
    <MainLayout
      header={<Header withDescription={false}/>}
      footer={<Footer buttons={isMobile ? [footerButtons[1]] : footerButtons}/>}>
      <WindowsModule/>
    </MainLayout>
  );
};

export default WindowsPage;
