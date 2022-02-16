import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import RoofWindowsModule from "src/components/RoofWindowsModule";
import Footer from "src/components/Footer";
import { useNavigate } from "react-router";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";
import { ERoutes } from "src/constants/types";

const RoofWindowsPage:VFC = () => {
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
      title: "Без окон в кровле",
      className: "footer__without-module",
      onClick: () => {
        navigate(ERoutes.FINAL);
      }
    }
  ];
  return (
    <MainLayout footer={<Footer buttons={footerButtons}/>}>
      <RoofWindowsModule/>
    </MainLayout>
  );
};


export default RoofWindowsPage;
