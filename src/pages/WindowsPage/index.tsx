import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import WindowsModule from "src/components/WindowsModule";
import Footer from "src/components/Footer";
import { useNavigate } from "react-router";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";
import { ERoutes } from "src/constants/types";

const WindowsPage:VFC = () =>{
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
      title: "Без окон в стене",
      className: "footer__without-module",
      onClick: () => {
        navigate(ERoutes.ROOF_WINDOWS);
      }
    }
  ];

  return (
    <MainLayout footer={<Footer buttons={footerButtons}/>}>
      <WindowsModule/>
    </MainLayout>
  );
};

export default WindowsPage;
